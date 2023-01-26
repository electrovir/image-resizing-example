import {addPx, loadImage} from '@augment-vir/browser';
import {collapseWhiteSpace, extractErrorMessage, wait} from '@augment-vir/common';
import {convertTemplateToString} from '@augment-vir/element-vir';
import {asyncState, css, defineElement, html, onDomCreated, renderAsyncState} from 'element-vir';
import type {TemplateResult} from 'lit';
import {clampDimensions, Dimensions, scaleToConstraints} from './augments/dimensions';

type ImageData = {
    templateString: string;
    dimensions: Dimensions;
    imageUrl: string;
};

/**
 * These ping and pong messages are used to prevent race conditions between loading the iframe,
 * listening to its messages, and posting messages, both inside of the iframe and outside of it.
 */
const readyPingMessage = 'ready-ping';
const readyPongMessage = 'ready-pong';

export const VirResizableImage = defineElement<{
    imageUrl: string;
    /** The max image size constraints which the image will be resized to fit within. */
    max?: Dimensions | undefined;
    /** The min image size constraints which the image will be resized to fit within. */
    min?: Dimensions | undefined;
    /**
     * String of JavaScript that will be interpolated into the iframe source code. It will be used
     * within a context where the variable "svgElement" will reference the relevant SVG element,
     * which you can then mutate.
     */
    transformSvgJavascript?: string | undefined;
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
            max-width: 100%;
            max-height: 100%;
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

        const iframeTemplate = renderAsyncState(
            state.imageData,
            html`
                <slot name="loading">Loading...</slot>
            `,
            (resolvedImageData) => {
                const frameConstraintDiv = host.shadowRoot.querySelector('.frame-constraint');
                if (!(frameConstraintDiv instanceof HTMLElement)) {
                    throw new Error(`Could not find frame constraint div.`);
                }

                const imageDimensions: Dimensions =
                    state.imageDimensions ?? resolvedImageData.dimensions;

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
                        ${onDomCreated(async (rawIframe) => {
                            const iframe = rawIframe as HTMLIFrameElement;
                            let gotPong = false;
                            iframe.contentWindow!.addEventListener('message', (message) => {
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
                                    console.warn(`Got bad data: ${JSON.stringify(data)}`);
                                }
                            });
                            while (!gotPong) {
                                iframe.contentWindow?.postMessage(readyPingMessage);
                                await wait(100);
                            }
                        })}
                        scrolling="no"
                        srcdoc=${generateIframeDoc(
                            resolvedImageData,
                            inputs.transformSvgJavascript,
                        )}
                    ></iframe>
                `;
            },
            (error) => {
                return html`
                    <slot name="error">${extractErrorMessage(error)}</slot>
                `;
            },
        ) as string | TemplateResult;

        return html`
            <div class="frame-constraint">
                ${iframeTemplate}
                <slot name="loaded"></slot>
            </div>
            <div class="click-cover"></div>
        `;
    },
});

async function getImageData(imageUrl: string): Promise<ImageData> {
    const imageResponse = await fetch(imageUrl);
    const imageText = await imageResponse.text();
    const isSvg =
        imageResponse.headers.get('Content-Type')?.includes('svg') || imageText.includes('<svg');
    const imageTemplate = html`
        <img src=${imageUrl} />
    `;

    const templateString = isSvg ? imageText : convertTemplateToString(imageTemplate);
    const dimensions = await loadDimensions(imageUrl);

    return {
        templateString,
        dimensions,
        imageUrl,
    };
}

async function loadDimensions(imageUrl: string): Promise<Dimensions> {
    const image = await loadImage(imageUrl);

    const dimensions: Dimensions = {
        width: image.naturalWidth,
        height: image.naturalHeight,
    };

    return dimensions;
}

function generateIframeDoc(
    imageData: ImageData,
    transformSvgJavascript: string | undefined,
): string {
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
                        const viewBoxWidth = viewBoxDimensions?.[1];
                        const viewBoxHeight = viewBoxDimensions?.[2];
                        const width = Number(
                            svgElement.getAttribute('width')?.replace(/px$/, '') ?? viewBoxWidth,
                        );
                        const height = Number(
                            svgElement.getAttribute('height')?.replace(/px$/, '') ?? viewBoxHeight,
                        );

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
                            width,
                            height,
                            viewBoxWidth,
                            viewBoxHeight,
                            imageUrl: '${imageData.imageUrl}',
                            dimensions: JSON.parse('${JSON.stringify(imageData.dimensions)}'),
                        });
                        */

                        ${transformSvgJavascript ?? ''};

                        readyPromise.then(() => {
                            globalThis.postMessage(JSON.stringify({width, height}));
                        });
                    }
                </script>
            </body>
        </html>
    `;

    const htmlString = collapseWhiteSpace(convertTemplateToString(htmlTemplate));

    return htmlString;
}
