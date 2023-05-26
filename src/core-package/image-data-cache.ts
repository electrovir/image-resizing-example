import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {resizableImageElementTagName} from './element-tag-name';
import {localForage} from './local-forage-shim';

async function openResponseCache() {
    return await caches.open(resizableImageElementTagName);
}

async function getCachedImageFetchResponse(imageRequest: Request): Promise<Response | undefined> {
    const cache = await openResponseCache();
    const matchedResponse = await cache.match(imageRequest);

    return matchedResponse;
}

const persistentImageDataCache = localForage.createInstance({
    /** IndexedDB database name. */
    name: resizableImageElementTagName,
});

async function addCachedImageFetchResponse(
    imageRequest: Request,
    imageResponse: Response,
): Promise<void> {
    const cache = await openResponseCache();
    await cache.put(imageRequest, imageResponse);
}

export type PersistentCachedImageData = {
    ok: boolean;
    contentType: string;
    text: string;
};

export type LoadedImageData = {
    blobUrl: string;
} & PersistentCachedImageData;

const volatileImageDataCache = new Map<string, Promise<LoadedImageData>>();

export async function loadImageData(
    imageUrl: string,
    allowPersistentCache: boolean,
): Promise<LoadedImageData> {
    if (!volatileImageDataCache.has(imageUrl)) {
        const deferredResponsePromise = createDeferredPromiseWrapper<LoadedImageData>();

        /** Do not await anything before this point! This operation must be performed synchronously. */
        volatileImageDataCache.set(imageUrl, deferredResponsePromise.promise);

        try {
            const imageRequest = new Request(imageUrl);

            const cachedResponse = allowPersistentCache
                ? await getCachedImageFetchResponse(imageRequest)
                : undefined;

            const imageResponse = cachedResponse ?? (await fetch(imageRequest));

            const cachedImageData: PersistentCachedImageData | undefined = allowPersistentCache
                ? (await persistentImageDataCache.getItem(imageUrl)) ?? undefined
                : undefined;

            const imageData: PersistentCachedImageData = cachedImageData ?? {
                contentType: imageResponse.headers.get('Content-Type')?.toLowerCase() || '',
                ok: imageResponse.ok,
                text: (await imageResponse.clone().text()) ?? '',
            };

            if (!cachedImageData && allowPersistentCache) {
                try {
                    // don't await this, so that it doesn't block image loading
                    persistentImageDataCache.setItem(imageUrl, imageData);
                } catch (error) {}
            }

            const loadedImageData: LoadedImageData = {
                blobUrl: URL.createObjectURL(await imageResponse.clone().blob()),
                ...imageData,
            };
            if (!cachedResponse && allowPersistentCache) {
                try {
                    // don't await this, so that it doesn't block image loading
                    void addCachedImageFetchResponse(imageRequest, imageResponse);
                } catch (error) {}
            }
            deferredResponsePromise.resolve(loadedImageData);
        } catch (error) {
            deferredResponsePromise.reject(error);
            throw error;
        }
    }

    const cachedResponse = await volatileImageDataCache.get(imageUrl);

    if (!cachedResponse) {
        throw new Error("Stored a cached response but couldn't find it afterwards.");
    }

    return cachedResponse;
}
