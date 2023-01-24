import {ArrayElement} from '@augment-vir/common';
import {assign, AsyncState, asyncState, css, html, listen, renderAsyncState} from 'element-vir';
import {MaxDimensions} from '../../data/dimensions';
import {storedUrls} from '../../data/indexed-db/stored-urls';
import {defineVirElementNoInputs} from '../define-vir-element';
import {VirResizableImage} from './vir-resizable-image.element';
import {VirUrlInput} from './vir-url-input.element';

export const VirApp = defineVirElementNoInputs({
    tagName: 'vir-app',
    stateInit: {
        imageUrls: asyncState(storedUrls.get()),
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        .all-image-containers {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        ${VirResizableImage} {
            border: 5px solid red;
            background-color: rgb(241, 241, 241);
            border-radius: 8px;
        }

        .images-container {
            align-items: flex-start;
            display: flex;
            gap: 8px;
        }

        .images-container > * {
            flex-shrink: 0;
        }
    `,
    renderCallback: ({state, updateState}) => {
        return html`
            <${VirUrlInput}
                ${assign(VirUrlInput, {
                    urls: Array.isArray(state.imageUrls) ? state.imageUrls : [],
                })}
                ${listen(VirUrlInput.events.urlsChange, (event) => {
                    const newUrls = event.detail;
                    storedUrls.set(newUrls);
                    updateState({
                        imageUrls: {
                            resolvedValue: event.detail,
                        },
                    });
                })}
            ></${VirUrlInput}>
            <div class="all-image-containers">
                ${sizeClasses.map((sizeClassName) => {
                    const fullClassName = `${sizeClassName} images-container`;
                    return html`
                        <div class=${fullClassName}>
                            ${renderImages(maxDimensions[sizeClassName], state.imageUrls)}
                        </div>
                    `;
                })}
            </div>
        `;
    },
});

const sizeClasses = [
    'small-images',
    'big-images',
] as const;
const maxDimensions: Readonly<Record<ArrayElement<typeof sizeClasses>, MaxDimensions>> = {
    'big-images': {
        maxWidth: 500,
        maxHeight: 500,
    },
    'small-images': {
        maxWidth: 100,
        maxHeight: 100,
    },
};

function renderImages(maxDimensions: MaxDimensions, imageUrls: AsyncState<ReadonlyArray<string>>) {
    return renderAsyncState(imageUrls, 'Loading...', (resolvedImageUrls) => {
        return resolvedImageUrls.map((imageUrl) => {
            return html`
                                <${VirResizableImage}
                                    ${assign(VirResizableImage, {imageUrl, maxDimensions})}
                                ></${VirResizableImage}>
                            `;
        });
    });
}
