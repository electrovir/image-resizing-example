import {assign, html} from 'element-vir';
import {VirResizableImage} from '..';

export function createTemplate() {
    return html`
        <${VirResizableImage}
            ${assign(VirResizableImage, {
                imageUrl: 'https://example.com/my-image-url',
                max: {
                    height: 300,
                    width: 600,
                },
                min: {
                    height: 100,
                    width: 200,
                },
            })}
        ></${VirResizableImage}>
    `;
}
