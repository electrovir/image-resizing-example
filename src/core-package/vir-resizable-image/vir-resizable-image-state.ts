import {asyncProp} from 'element-vir';
import {ResizableImageData} from '../image-data';

export const defaultResizableImageState = {
    imageData: asyncProp<ResizableImageData>(),
    error: undefined as Error | undefined,
};

export type ResizableImageState = typeof defaultResizableImageState;
