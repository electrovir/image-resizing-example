import {asyncState} from 'element-vir';
import {ImageData} from './image-data';

export const defaultResizableImageState = {
    imageData: asyncState<ImageData>(),
};

export type ResizableImageState = typeof defaultResizableImageState;
