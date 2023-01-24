import {collapseWhiteSpace} from '@augment-vir/common';
import {asyncState, css, html, renderAsyncState} from 'element-vir';
import {TemplateResult} from 'lit';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
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
};

export const VirResizableImage = defineVirElement<{
    imageUrl: string;
    maxDimensions: MaxDimensions;
}>()({
    tagName: 'vir-resizable-image',
    stateInit: {
        imageData: asyncState<ImageData>(),
    },
    styles: css`
        :host {
            display: block;
            position: relative;
            overflow: hidden;
        }

        .frame-constraint {
            position: relative;
        }

        iframe {
            display: block;
            border: none;
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
        }
    `,
    renderCallback: ({state, inputs, updateState, host}) => {
        updateState({
            imageData: {
                createPromise: () => {
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
                const maxDimensions = maxToDimensions(inputs.maxDimensions);

                const constraintDimension = determineConstraintDimension({
                    sizableBox: resolvedImageData.dimensions,
                    constraintBox: maxDimensions,
                });

                const imageToConstraintRatio =
                    maxDimensions[constraintDimension] /
                    resolvedImageData.dimensions[constraintDimension];

                const resizeRatio = imageToConstraintRatio > 1 ? 1 : imageToConstraintRatio;

                frameConstraintDiv.style.width = addPx(
                    resolvedImageData.dimensions.width * resizeRatio,
                );

                frameConstraintDiv.style.height = addPx(
                    resolvedImageData.dimensions.height * resizeRatio,
                );

                return html`
                    <iframe src=${generateIframeUrl(resolvedImageData)}></iframe>
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
    const dimensions = await loadDimensions({
        imageText,
        imageUrl,
        isSvg,
    });

    console.log({imageUrl, dimensions});

    return {
        templateString,
        dimensions,
    };
}

async function loadDimensions({
    imageUrl,
    isSvg,
    imageText,
}: {
    imageUrl: string;
    isSvg: boolean;
    imageText: string;
}): Promise<Dimensions> {
    const image = await loadImage(imageUrl);

    return {
        width: image.naturalWidth,
        height: image.naturalHeight,
    };
}

function generateIframeUrl(imageData: ImageData): string {
    const htmlTemplate = html`
        <style>
            body,
            html {
                height: 100%;
                width: 100%;
                margin: 0;
                padding: 0;
            }

            img,
            svg {
                max-height: 100vh;
                max-width: 100vw;
            }
        </style>

        ${unsafeHTML(imageData.templateString)}

        <script>
            const svgElement = document.body.querySelector('svg');

            if (svgElement) {
                const width = Number(svgElement.getAttribute('width')?.replace(/px$/, ''));
                const height = Number(svgElement.getAttribute('height')?.replace(/px$/, ''));

                if (
                    !isNaN(width) &&
                    !isNaN(height) &&
                    !(svgElement.hasAttribute('viewBox') || svgElement.hasAttribute('viewbox'))
                ) {
                    svgElement.setAttribute('viewBox', \`0 0 \${width} \${height}\`);
                }
                svgElement.removeAttribute('width');
                svgElement.removeAttribute('height');
                svgElement.style.removeProperty('width');
                svgElement.style.removeProperty('height');
            }
        </script>
    `;

    const htmlString = collapseWhiteSpace(convertTemplateToString(htmlTemplate));

    const dataUrl = `data:text/html,${encodeURIComponent(htmlString)}`;

    return dataUrl;
}
