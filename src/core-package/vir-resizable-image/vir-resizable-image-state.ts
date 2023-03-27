import {asyncState} from 'element-vir';
import {ResizableImageData} from '../resizable-image-data';

export const defaultResizableImageState = {
    imageData: asyncState<ResizableImageData>(),
    error: undefined as Error | undefined,
};

export type ResizableImageState = typeof defaultResizableImageState;
