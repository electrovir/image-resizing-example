import {asyncState} from 'element-vir';
import {ResizableImageData} from './image-data';

export const defaultResizableImageState = {
    imageData: asyncState<ResizableImageData>(),
};

export type ResizableImageState = typeof defaultResizableImageState;
