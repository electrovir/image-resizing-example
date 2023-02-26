import {asyncState} from 'element-vir';
import {ImageData} from './image-data';

export const defaultResizableImageState = {
    imageData: asyncState<ImageData>(),
    shouldVerticallyCenter: false,
    settled: false,
};

export type ResizableImageState = typeof defaultResizableImageState;
