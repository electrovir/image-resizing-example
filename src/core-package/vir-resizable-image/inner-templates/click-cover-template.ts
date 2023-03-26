import {RenderPromiseInput, html} from 'element-vir';
import {ImageType, ResizableImageData} from '../../resizable-image-data';
import {VirResizableImageInputs} from '../vir-resizable-image-inputs';

const defaultClickCover = html`
    <div class="click-cover"></div>
`;

export function renderClickCoverTemplate(
    {promise, resolved}: RenderPromiseInput<ResizableImageData>,
    inputs: Pick<VirResizableImageInputs, 'blockInteraction'>,
) {
    if (resolved) {
        if (
            !inputs.blockInteraction &&
            [
                ImageType.Html,
                ImageType.Video,
                ImageType.Audio,
                ImageType.Pdf,
            ].includes(resolved.imageType)
        ) {
            /**
             * In this case the "image" is likely meant to be interactive, so don't block mouse
             * interactions.
             */
            return '';
        } else {
            return defaultClickCover;
        }
    } else if (promise) {
        return defaultClickCover;
    } else {
        return '';
    }
}
