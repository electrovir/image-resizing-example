import {assign, html} from 'element-vir';
import {VirResizableImage} from '..';

export function createTemplate() {
    return html`
        <${VirResizableImage}
            ${assign(VirResizableImage, {
                imageUrl: 'https://example.com/my-image-url',
                maxDimensions: {
                    maxHeight: 100,
                    maxWidth: 200,
                },
            })}
        ></${VirResizableImage}>
    `;
}
