import {html} from 'element-vir';
import {VirResizableImage} from '..';

export function createTemplate() {
    return html`
        <${VirResizableImage.assign({
            imageUrl: 'https://example.com/my-image-url',
        })}>
            <div slot="loading">My custom loading</div>
        </${VirResizableImage}>
    `;
}
