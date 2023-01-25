import {collapseWhiteSpace} from '@augment-vir/common';
import {asyncState, css, html, onDomCreated, renderAsyncState} from 'element-vir';
import {TemplateResult} from 'lit';
import {loadImage} from '../../augments/image';
import {convertTemplateToString} from '../../augments/lit';
import {addPx} from '../../augments/pixel';
import {
    determineConstraintDimension,
    Dimensions,
    MaxDimensions,
    maxToDimensions,
} from '../../data/dimensions';
import {defineVirElement} from '../define-vir-element';

type ImageData = {
    templateString: string;
    dimensions: Dimensions;
    imageUrl: string;
};

export const VirResizableImage = defineVirElement<{
    imageUrl: string;
    maxDimensions: MaxDimensions;
}>()({
    tagName: 'vir-resizable-image',
    stateInit: {
        imageData: asyncState<ImageData>(),
        imageDimensions: undefined as Dimensions | undefined,
    },
    styles: css`
        :host {
            display: block;
            position: relative;
            overflow: hidden;
        }

        .frame-constraint {
            position: relative;
            transition: 200ms;
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
                    return getImageData(inputs.imageUrl);
                },
                trigger: inputs.imageUrl,
            },
        });

        const iframeTemplate = renderAsyncState(
            state.imageData,
            'Loading...',
            (resolvedImageData) => {
                const frameConstraintDiv = host.shadowRoot.querySelector('.frame-constraint');
                if (!(frameConstraintDiv instanceof HTMLElement)) {
                    throw new Error(`Could not find frame constraint div.`);
                }
                const imageDimensions: Dimensions =
                    state.imageDimensions ?? resolvedImageData.dimensions;
                const maxDimensions: Dimensions = maxToDimensions(inputs.maxDimensions);

                const constraintDimension = determineConstraintDimension({
                    sizableBox: imageDimensions,
                    constraintBox: maxDimensions,
                });

                const imageToConstraintRatio =
                    maxDimensions[constraintDimension] / imageDimensions[constraintDimension];

                const resizeRatio = imageToConstraintRatio > 1 ? 1 : imageToConstraintRatio;

                frameConstraintDiv.style.width = addPx(
                    Math.floor(imageDimensions.width * resizeRatio),
                );

                frameConstraintDiv.style.height = addPx(
                    Math.floor(imageDimensions.height * resizeRatio),
                );

                return html`
                    <iframe
                        ${onDomCreated((iframe) => {
                            (iframe as HTMLIFrameElement).contentWindow!.addEventListener(
                                'message',
                                (message) => {
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
                                },
                            );
                        })}
                        scrolling="no"
                        srcdoc=${generateIframeDoc(resolvedImageData)}
                    ></iframe>
                `;
            },
        ) as string | TemplateResult;

        return html`
            <div class="frame-constraint">${iframeTemplate}</div>
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

function generateIframeDoc(imageData: ImageData): string {
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
                    }
                </style>
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

                        globalThis.postMessage(JSON.stringify({width, height}));
                    }
                </script>
            </body>
        </html>
    `;

    const htmlString = collapseWhiteSpace(convertTemplateToString(htmlTemplate));

    return htmlString;
}
