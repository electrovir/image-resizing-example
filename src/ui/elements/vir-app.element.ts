import {assign, asyncState, css, html, listen, renderAsyncState} from 'element-vir';
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
    `,
    renderCallback: ({state, updateState}) => {
        return html`
            <${VirUrlInput}
                ${assign(VirUrlInput, {
                    urls: Array.isArray(state.imageUrls) ? state.imageUrls : [],
                })}
                ${listen(VirUrlInput.events.urlsChange, (event) => {
                    const newUrls = event.detail;
                    console.log('storing');
                    storedUrls.set(newUrls);
                    updateState({
                        imageUrls: {
                            resolvedValue: event.detail,
                        },
                    });
                })}
            ></${VirUrlInput}>
            ${renderAsyncState(state.imageUrls, 'Loading...', (resolvedImageUrls) => {
                return resolvedImageUrls.map((imageUrl) => {
                    return html`
                                <${VirResizableImage}
                                    ${assign(VirResizableImage, {imageUrl})}
                                ></${VirResizableImage}>
                            `;
                });
            })}
        `;
    },
});
