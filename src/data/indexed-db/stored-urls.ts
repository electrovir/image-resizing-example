import Dexie, {Table} from 'dexie';

const defaultUrls = [
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
        await database.storedUrls.bulkPut(
            urls.map((url, index) => {
                return {index, url};
            }),
        );
    },
    async get(): Promise<ReadonlyArray<string>> {
        const savedData = await database.storedUrls.toArray();

        console.log({savedData});

        return savedData.length ? savedData.map((entry) => entry.url) : defaultUrls;
    },
};
