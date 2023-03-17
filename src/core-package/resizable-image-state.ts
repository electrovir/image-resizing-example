import {asyncState} from 'element-vir';
import {ResizableImageData} from './resizable-image-data';

export const defaultResizableImageState = {
    imageData: asyncState<ResizableImageData>(),
};

export type ResizableImageState = typeof defaultResizableImageState;
