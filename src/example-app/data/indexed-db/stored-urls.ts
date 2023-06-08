import {isRuntimeTypeOf, isTruthy, makeWritable} from '@augment-vir/common';
import localForage from 'localforage-esm';
import {virRouter} from '../../router/vir-router';

const defaultImageUrls: string[] = [
    'https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png',
];

const storageInstance = localForage.createInstance({
    /** IndexedDB database name. */
    name: 'resizable-image-element-example-storage',
});

const storedUrlsKey = 'stored-urls';

export const storedUrls = {
    async set(urls: ReadonlyArray<string>): Promise<void> {
        const cleanedUrls = sanitizeUrls(urls).map((cleanedUrl) => {
            return cleanedUrl;
        });

        await storageInstance.clear();
        await storageInstance.setItem(storedUrlsKey, cleanedUrls);
    },
    async get(): Promise<ReadonlyArray<string>> {
        const storedImageUrls = await storageInstance.getItem(storedUrlsKey);

        const imageUrls: ReadonlyArray<unknown> = isRuntimeTypeOf(storedImageUrls, 'array')
            ? storedImageUrls
            : [];

        const cleanedUrls = sanitizeUrls(imageUrls);

        return readImageUrlsFromUrl(cleanedUrls.length ? cleanedUrls : defaultImageUrls);
    },
};

function readImageUrlsFromUrl(fallback: ReadonlyArray<string>): string[] {
    try {
        const imageUrls = sanitizeUrls(
            virRouter.getCurrentRawRoutes().search?.imageUrls?.split(',') ?? [],
        );
        return Array.isArray(imageUrls) && imageUrls.length ? imageUrls : makeWritable(fallback);
    } catch (error) {
        return makeWritable(fallback);
    }
}
export function sanitizeUrls(imageUrls: ReadonlyArray<unknown>): string[] {
    return imageUrls
        .map((imageUrl) => {
            if (typeof imageUrl !== 'string') {
                return '';
            }

            return imageUrl.replace(/^"/, '').replace(/"$/, '').trim();
        })
        .filter(isTruthy);
}
