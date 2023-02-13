import {addPx, loadImage, loadVideo} from '@augment-vir/browser';
import {collapseWhiteSpace, extractErrorMessage, filterObject, wait} from '@augment-vir/common';
import {convertTemplateToString} from '@augment-vir/element-vir';
import {asyncState, css, defineElement, html, onDomCreated, renderAsyncState} from 'element-vir';
import type {TemplateResult} from 'lit';
import {clampDimensions, Dimensions, scaleToConstraints} from './augments/dimensions';

enum ImageType {
    Html = 'html',
    Svg = 'svg',
    Image = 'image',
    Video = 'video',
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
    /** String of HTML that will be interpolated into the iframe source code. */
    extraHTML?: string | undefined | TemplateResult;
}>()({
    tagName: 'vir-resizable-image',
    stateInit: {
        imageData: asyncState<ImageData>(),
        imageDimensions: undefined as Dimensions | undefined,
        shouldVerticallyCenter: false,
    },
    hostClasses: {
        verticallyCenter: ({state}) => state.shouldVerticallyCenter,
    },
    styles: ({hostClassSelectors}) => css`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            overflow: hidden;
        }

        ${hostClassSelectors.verticallyCenter} {
            align-items: center;
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
                    updateState({
                        imageDimensions: undefined,
                        shouldVerticallyCenter: false,
                    });
                    return getImageData(inputs.imageUrl).catch(async () => {
                        // try again
                        await wait(1000);
                        return getImageData(inputs.imageUrl);
                    });
                },
                trigger: {
                    ...(filterObject(inputs, (key) => key !== 'extraHTML') as Omit<
                        typeof inputs,
                        'extraHTML'
                    >),
                },
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

                if (newImageSize.height < hostSize.height) {
                    updateState({
                        shouldVerticallyCenter: true,
                    });
                } else {
                    updateState({
                        shouldVerticallyCenter: false,
                    });
                }

                host.style.width = addPx(hostSize.width);
                host.style.height = addPx(hostSize.height);

                return html`
                    <iframe
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        scrolling="no"
                        srcdoc=${generateIframeDoc(resolvedImageData, inputs.extraHTML)}
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
    if (contentType.includes('video')) {
        return ImageType.Video;
    } else if (contentType.includes('svg') || imageText.includes('<svg')) {
        return ImageType.Svg;
    } else if (contentType.includes('html') || imageText.includes('<html')) {
        return ImageType.Html;
    } else {
        return ImageType.Image;
    }
}

function generateTemplateString({
    imageType,
    imageText,
    imageUrl,
}: {
    imageType: ImageType;
    imageText: string;
    imageUrl: string;
}): string {
    if (imageType === ImageType.Image) {
        return convertTemplateToString(html`
            <img src=${imageUrl} />
        `);
    } else if (imageType === ImageType.Video) {
        return convertTemplateToString(html`
            <video autoplay muted loop>
                <source src=${imageUrl} type="video/mp4" />
            </video>
        `);
    } else {
        return imageText;
    }
}

async function getImageData(imageUrl: string): Promise<ImageData> {
    let imageResponse: Response | undefined;

    try {
        imageResponse = await fetch(imageUrl);
    } catch (error) {}

    const imageText = (await imageResponse?.text()) ?? '';

    const imageType = imageResponse
        ? await determineImageType(imageResponse, imageText)
        : // naively assume it's an image
          ImageType.Image;

    const templateString = generateTemplateString({
        imageText,
        imageType,
        imageUrl,
    });
    const dimensions = await loadDimensions(imageUrl, imageType);

    return {
        templateString,
        dimensions,
        imageUrl,
        imageType,
    };
}

async function loadDimensions(imageUrl: string, imageType: ImageType): Promise<Dimensions> {
    try {
        if (imageType === ImageType.Video) {
            const video = await loadVideo(imageUrl);
            return {
                width: video.videoWidth,
                height: video.videoHeight,
            };
        } else if (imageType === ImageType.Html) {
            /**
             * There's no way of knowing what the size of an HTML page should be. In this case, it
             * should be provided via the originalImageSize input.
             */
            return {
                height: 0,
                width: 0,
            };
        } else {
            const image = await loadImage(imageUrl);

            const dimensions: Dimensions = {
                width: image.naturalWidth,
                height: image.naturalHeight,
            };

            return dimensions;
        }
    } catch (error) {
        console.warn(error);
        return {
            height: 0,
            width: 0,
        };
    }
}

function generateIframeDoc(
    imageData: ImageData,
    extraHTML: string | TemplateResult | undefined,
): string {
    const placeholder = Math.random();

    const sizeScript = html`
        <script>
            const imageType = '${imageData.imageType}';

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(/s*\\d+\\s+\\d+\\s+(\\d+)\\s+(\\d+)\\s*/);
                const viewBoxWidth = Number(viewBoxDimensions?.[1]);
                const viewBoxHeight = Number(viewBoxDimensions?.[2]);
                const width =
                    Number(svgElement.getAttribute('width')?.replace(/px$/, '')) || viewBoxWidth;
                const height =
                    Number(svgElement.getAttribute('height')?.replace(/px$/, '')) || viewBoxHeight;

                if (isNaN(width) || isNaN(height)) {
                    return undefined;
                } else {
                    return {width, height};
                }
            }

            function extractHtmlSize(element = document.body) {
                let size;

                if (element instanceof HTMLImageElement) {
                    size = {
                        width: element.naturalWidth,
                        height: element.naturalHeight,
                    };
                } else {
                    let width = element.getAttribute('width');
                    let height = element.getAttribute('height');
                    if (width && height) {
                        size = {height, width};
                    }
                }

                if (size) {
                    if (!size.height || !size.width) {
                        throw new Error(
                            \`Got invalid html size for '${imageData.imageUrl}': \${size} \`,
                        );
                    }
                    return size;
                }

                const childSizes = Array.from(element.children).map((child) =>
                    extractHtmlSize(child),
                );

                return childSizes.reduce(
                    (finalSize, currentSize) => {
                        const width = Math.max(finalSize.width, currentSize.width);
                        const height = Math.max(finalSize.height, currentSize.height);
                        return {width, height};
                    },
                    {width: 0, height: 0},
                );
            }

            function postHtmlSize(element = document.body) {
                const size = extractHtmlSize();

                readyPromise.then(() => {
                    globalThis.postMessage(JSON.stringify(size));
                });
            }

            function postSvgSize() {
                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = extractSvgSize(svgElement);

                if (!svgElement.getAttribute('viewBox')) {
                    svgElement.setAttribute('viewBox', \`0 0 \${width} \${height}\`);
                }
                svgElement.removeAttribute('width');
                svgElement.removeAttribute('height');
                svgElement.style.removeProperty('width');
                svgElement.style.removeProperty('height');
                /*
                        console.debug({
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

            function postSize() {
                if (imageType === 'svg') {
                    postSvgSize();
                } else if (imageType === 'html') {
                    postHtmlSize();
                }
            }

            let retryCount = 0;

            function repeatedlyPostSize() {
                try {
                    postSize();
                } catch (error) {
                    retryCount++;
                    if (retryCount > 10) {
                        throw new Error(
                            "Tried to get the '${imageData.imageType}' size for '${imageData.imageUrl}' over 10 times and failed.",
                        );
                    }
                    setTimeout(() => {
                        repeatedlyPostSize();
                    }, 500);
                }
            }

            repeatedlyPostSize();
        </script>
    `;

    const htmlTemplate = html`
        <!DOCTYPE html>
        <html class="image-type-${imageData.imageType.toLowerCase()}">
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
                    svg,
                    video {
                        max-height: 100vh;
                        max-width: 100vw;
                        width: 100vw;
                        height: 100vh;
                    }

                    html.image-type-html * {
                        max-height: 100vh;
                        max-width: 100vw;
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
                ${placeholder} ${sizeScript} ${extraHTML ?? ''}
            </body>
        </html>
    `;

    const htmlString = collapseWhiteSpace(convertTemplateToString(htmlTemplate)).replace(
        String(placeholder),
        `\n${imageData.templateString}\n`,
    );

    return htmlString;
}
