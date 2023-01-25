import {isTruthy} from '@augment-vir/common';
import Dexie, {Table} from 'dexie';
import {virRouter} from '../../router/vir-router';

const defaultImageUrls: string[] = [
    'https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png',
];

/**
 * This should really be simple enough for localStorage, but Safari sometimes doesn't persist
 * localStorage on localhost.
 */

const databaseName = 'image-resizing-example-storage';
class StoredUrlsDatabase extends Dexie {
    public storedUrls!: Table<{url: string; index: number}, number>;

    public constructor() {
        super(databaseName);
        this.version(1).stores({
            /** & designates the unique key: https://dexie.org/docs/Version/Version.stores() */
            storedUrls: '&index',
        });
    }
}

const database = new StoredUrlsDatabase();

export const storedUrls = {
    async set(urls: ReadonlyArray<string>): Promise<void> {
        const cleanedUrls = sanitizeUrls(urls).map((url, index) => {
            return {index, url};
        });

        await database.storedUrls.clear();
        await database.storedUrls.bulkPut(cleanedUrls);
    },
    async get(): Promise<ReadonlyArray<string>> {
        const savedData = await database.storedUrls.toArray();

        const imageUrls = savedData.map((entry) => entry.url);
        const cleanedUrls = sanitizeUrls(imageUrls);

        return cleanedUrls.length ? cleanedUrls : readImageUrlsFromUrl();
    },
};

function readImageUrlsFromUrl(): string[] {
    try {
        const imageUrls = sanitizeUrls(
            virRouter.getCurrentRawRoutes().search?.imageUrls?.split(',') ?? [],
        );
        return Array.isArray(imageUrls) && imageUrls.length ? imageUrls : defaultImageUrls;
    } catch (error) {
        return defaultImageUrls;
    }
}
export function sanitizeUrls(imageUrls: ReadonlyArray<string>): string[] {
    return imageUrls
        .map((imageUrl) => imageUrl.replace(/^"/, '').replace(/"$/, '').trim())
        .filter(isTruthy);
}
