import {wait, wrapPromiseInTimeout} from '@augment-vir/common';
import {asyncProp} from 'element-vir';
import {ResizableImageData, getImageData} from '../image-data';
import {SerializableImageInputs, VirResizableImageInputs} from './vir-resizable-image-inputs';

export const defaultResizableImageState = {
    imageData: asyncProp({
        async updateCallback(
            inputs: SerializableImageInputs & {
                timeoutMs: number;
            },
            extraInputs: {
                updateTriggered: () => void;
                textTransformer: VirResizableImageInputs['textTransformer'];
            },
        ): Promise<ResizableImageData> {
            extraInputs.updateTriggered();
            if (!inputs.imageUrl) {
                /**
                 * Return a promise that doesn't resolve while the imageUrl is empty so that we
                 * think we're in the loading state.
                 */
                return new Promise<ResizableImageData>(() => {});
            }

            const imageDataInputs: Parameters<typeof getImageData>[0] = {
                imageUrl: inputs.imageUrl,
                blockAutoPlay: !!inputs.blockAutoPlay,
                textTransformer: extraInputs.textTransformer,
                allowPersistentCache: !inputs.blockPersistentCache,
                removeConsoleLogs: !inputs.allowConsoleLogs,
            };

            let result: undefined | ResizableImageData;

            try {
                result = await wrapPromiseInTimeout(
                    inputs.timeoutMs,
                    getImageData(imageDataInputs),
                );
            } catch (error) {
                // try again
                await wait(1000);
                try {
                    result = await getImageData(imageDataInputs);
                } catch (error) {
                    throw error;
                }
            }

            if (result) {
                return result;
            } else {
                const error = new Error('no image data result');
                throw error;
            }
        },
    }),
    error: undefined as Error | undefined,
};

export type ResizableImageState = typeof defaultResizableImageState;
