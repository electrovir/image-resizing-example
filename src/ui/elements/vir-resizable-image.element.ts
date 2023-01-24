import {html} from 'element-vir';
import {defineVirElement} from '../define-vir-element';

export const VirResizableImage = defineVirElement<{imageUrl: string}>()({
    tagName: 'vir-resizable-image',
    renderCallback: ({inputs}) => {
        return html`
            <img src=${inputs.imageUrl} />
        `;
    },
});
