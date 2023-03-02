import {asyncState} from 'element-vir';
import {ImageData} from './image-data';

export const defaultResizableImageState = {
    imageData: asyncState<ImageData>(),
    shouldVerticallyCenter: false,
    settled: false,
    /**
     * Storing the full frame HTMLl string allows the frame to preserve its state across DOM
     * detachments and re-attachments.
     */
    frameFullHtml: undefined as
        | undefined
        | {
              imageUrl: string;
              html: string;
          },
};

export type ResizableImageState = typeof defaultResizableImageState;
