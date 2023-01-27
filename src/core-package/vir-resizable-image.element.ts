import {addPx, loadImage} from '@augment-vir/browser';
import {collapseWhiteSpace, extractErrorMessage, wait} from '@augment-vir/common';
import {convertTemplateToString} from '@augment-vir/element-vir';
import {asyncState, css, defineElement, html, onDomCreated, renderAsyncState} from 'element-vir';
import type {TemplateResult} from 'lit';
import {clampDimensions, Dimensions, scaleToConstraints} from './augments/dimensions';

enum ImageType {
    Html = 'html',
    Svg = 'svg',
    Image = 'image',
}

type ImageData = {
    templateString: string;
    imageType: ImageType;
    dimensions: Dimensions;
    imageUrl: string;
};

/**
 * These ping and pong messages are used to prevent race conditions between loading the iframe,
 * listening to its messages, and posting messages, both inside of the iframe and outside of it.
 */
const readyPingMessage = 'ready-ping';
const readyPongMessage = 'ready-pong';
const defaultClickCover = html`
    <div class="click-cover"></div>
`;

export const VirResizableImage = defineElement<{
    imageUrl: string;
    /** The max image size constraints which the image will be resized to fit within. */
    max?: Dimensions | undefined;
    /** The min image size constraints which the image will be resized to fit within. */
    min?: Dimensions | undefined;
    /** For hard-coding the original image size pre-scaling to fit the given constraints. */
    originalImageSize?: Dimensions | undefined;
    /**
     * String of JavaScript that will be interpolated into the iframe source code. It will be used
     * within a context where the variable "svgElement" will reference the relevant SVG element,
     * which you can then mutate.
     */
    transformJavascript?: string | undefined;
}>()({
    tagName: 'vir-resizable-image',
    stateInit: {
        imageData: asyncState<ImageData>(),
        imageDimensions: undefined as Dimensions | undefined,
    },
    styles: css`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            overflow: hidden;
        }

        .click-cover {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 100;
        }

        * {
            flex-shrink: 0;
        }

        .frame-constraint {
            position: relative;
            transition: 100ms;
        }

        .error-wrapper,
        .loading-wrapper {
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
            max-height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-break: break-word;
        }

        iframe {
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }
    `,
    renderCallback: ({state, inputs, updateState, host}) => {
        updateState({
            imageData: {
                createPromise: async () => {
                    return getImageData(inputs.imageUrl).catch(async () => {
                        // try again
                        await wait(1000);
                        return getImageData(inputs.imageUrl);
                    });
                },
                trigger: inputs.imageUrl,
            },
        });

        const min =
            inputs.min && inputs.max
                ? clampDimensions({box: inputs.min, max: inputs.max})
                : inputs.min;
        const max = inputs.max;

        const loadingWrapperStyles = min
            ? css`
                  min-width: ${min.width}px;
                  min-height: ${min.height}px;
              `
            : '';

        const iframeTemplate = renderAsyncState(
            state.imageData,
            html`
                <div class="loading-wrapper" style=${loadingWrapperStyles}>
                    <slot name="loading">Loading...</slot>
                </div>
            `,
            (resolvedImageData) => {
                const frameConstraintDiv = host.shadowRoot.querySelector('.frame-constraint');
                if (!(frameConstraintDiv instanceof HTMLElement)) {
                    throw new Error(`Could not find frame constraint div.`);
                }

                const imageDimensions: Dimensions =
                    inputs.originalImageSize ??
                    state.imageDimensions ??
                    resolvedImageData.dimensions;

                const newImageSize: Dimensions = scaleToConstraints({
                    min,
                    max,
                    box: imageDimensions,
                });

                frameConstraintDiv.style.width = addPx(Math.floor(newImageSize.width));
                frameConstraintDiv.style.height = addPx(Math.floor(newImageSize.height));

                const hostSize: Dimensions = clampDimensions({
                    min,
                    max,
                    box: newImageSize,
                });
                host.style.width = addPx(hostSize.width);
                host.style.height = addPx(hostSize.height);

                return html`
                    <iframe
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        scrolling="no"
                        srcdoc=${generateIframeDoc(resolvedImageData, inputs.transformJavascript)}
                        ${onDomCreated(async (rawIframe) => {
                            const iframe = rawIframe as HTMLIFrameElement;
                            iframe.onload = async () => {
                                let gotPong = false;
                                const startTime = Date.now();
                                while (!iframe.contentWindow) {
                                    await wait(100);
                                    if (Date.now() - startTime > 30_000) {
                                        throw new Error(
                                            `Took over 10 seconds for the vir-resizable-image iframe's content window to appear.`,
                                        );
                                    }
                                }
                                iframe.contentWindow.addEventListener('message', (message) => {
                                    if (message.data === readyPingMessage) {
                                        return;
                                    } else if (message.data === readyPongMessage) {
                                        gotPong = true;
                                        return;
                                    }

                                    const data = JSON.parse(message.data);
                                    const width = Number(data.width);
                                    const height = Number(data.height);

                                    if (!isNaN(width) && !isNaN(height)) {
                                        updateState({
                                            imageDimensions: {width, height},
                                        });
                                    } else {
                                        console.warn(
                                            `Got bad data from vir-resizable-image image iframe: ${JSON.stringify(
                                                data,
                                            )}`,
                                        );
                                    }
                                });
                                while (!gotPong) {
                                    iframe.contentWindow.postMessage(readyPingMessage);
                                    await wait(100);
                                }
                            };
                        })}
                    ></iframe>
                    <slot name="loaded"></slot>
                `;
            },
            (error) => {
                return html`
                    <div class="error-wrapper">
                        <slot name="error">${extractErrorMessage(error)}</slot>
                    </div>
                `;
            },
        ) as string | TemplateResult;

        const clickCoverTemplate = renderAsyncState(
            state.imageData,
            defaultClickCover,
            (resolvedImageData) => {
                if (resolvedImageData.imageType === ImageType.Html) {
                    /**
                     * In this case the "image" is likely meant to be interactive, so don't block
                     * mouse interactions.
                     */
                    return '';
                } else {
                    return defaultClickCover;
                }
            },
            () => '',
        );

        const frameConstraintMinStyles =
            state.imageData instanceof Error
                ? css`
                      max-width: 100%;
                      max-height: 100%;
                  `
                : '';

        return html`
            <div class="frame-constraint" style=${frameConstraintMinStyles}>${iframeTemplate}</div>
            ${clickCoverTemplate}
        `;
    },
});

async function determineImageType(imageResponse: Response, imageText: string): Promise<ImageType> {
    const contentType = imageResponse.headers.get('Content-Type') ?? '';
    if (contentType.includes('svg') || imageText.includes('<svg')) {
        return ImageType.Svg;
    } else if (contentType.includes('html') || imageText.includes('<html')) {
        return ImageType.Html;
    } else {
        return ImageType.Image;
    }
}

async function getImageData(imageUrl: string): Promise<ImageData> {
    const imageResponse = await fetch(imageUrl);
    const imageText = await imageResponse.text();

    const imageType = await determineImageType(imageResponse, imageText);
    const imageTemplate = html`
        <img src=${imageUrl} />
    `;

    const templateString =
        imageType === ImageType.Image ? convertTemplateToString(imageTemplate) : imageText;
    const dimensions = await loadDimensions(imageUrl);

    return {
        templateString,
        dimensions,
        imageUrl,
        imageType,
    };
}

async function loadDimensions(imageUrl: string): Promise<Dimensions> {
    try {
        const image = await loadImage(imageUrl);

        const dimensions: Dimensions = {
            width: image.naturalWidth,
            height: image.naturalHeight,
        };

        return dimensions;
    } catch (error) {
        return {
            height: 0,
            width: 0,
        };
    }
}

function generateIframeDoc(imageData: ImageData, transformJavascript: string | undefined): string {
    const htmlTemplate = html`
        <!DOCTYPE html>
        <html>
            <head>
                <style>
                    body,
                    html {
                        height: 100vh;
                        width: 100vw;
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    img,
                    svg {
                        max-height: 100vh;
                        max-width: 100vw;
                        width: 100vw;
                        height: auto;
                    }
                </style>
                <script>
                    let resolve;
                    const readyPromise = new Promise((innerResolve) => {
                        resolve = innerResolve;
                    });
                    globalThis.addEventListener('message', (event) => {
                        if (event.data === '${readyPingMessage}') {
                            resolve();
                            globalThis.postMessage('${readyPongMessage}');
                        }
                    });
                </script>
            </head>
            <body>
                ${imageData.templateString}

                <script>
                    const svgElement = document.body.querySelector('svg');

                    if (svgElement) {
                        const viewBox = svgElement.getAttribute('viewBox');
                        const viewBoxDimensions = viewBox?.match(
                            /s*\\d+\\s+\\d+\\s+(\\d+)\\s+(\\d+)\\s*/,
                        );
                        const viewBoxWidth = Number(viewBoxDimensions?.[1]);
                        const viewBoxHeight = Number(viewBoxDimensions?.[2]);
                        const width =
                            Number(svgElement.getAttribute('width')?.replace(/px$/, '')) ||
                            viewBoxWidth;
                        const height =
                            Number(svgElement.getAttribute('height')?.replace(/px$/, '')) ||
                            viewBoxHeight;
                        if (!isNaN(width) && !isNaN(height) && !viewBox) {
                            svgElement.setAttribute('viewBox', \`0 0 \${width} \${height}\`);
                        } else if (isNaN(width) || isNaN(height)) {
                            console.warn(
                                \`Failed to retrieve dimensions: \${JSON.stringify({
                                    width,
                                    height,
                                    viewBoxWidth,
                                    viewBoxHeight,
                                    imageUrl: '${imageData.imageUrl}',
                                })}\`,
                            );
                        }
                        svgElement.removeAttribute('width');
                        svgElement.removeAttribute('height');
                        svgElement.style.removeProperty('width');
                        svgElement.style.removeProperty('height');
                        /*
                        console.log({
                            width, g
                            height,
                            viewBoxWidth,
                            viewBoxHeight,
                            imageUrl: '${imageData.imageUrl}',
                            dimensions: JSON.parse('${JSON.stringify(imageData.dimensions)}'),
                        });
                        */

                        readyPromise.then(() => {
                            globalThis.postMessage(JSON.stringify({width, height}));
                        });
                    }

                    ${transformJavascript ?? ''};
                </script>
            </body>
        </html>
    `;

    const htmlString = collapseWhiteSpace(convertTemplateToString(htmlTemplate));

    return htmlString;
}
