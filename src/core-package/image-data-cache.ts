import {createDeferredPromiseWrapper} from '@augment-vir/common';

async function openCache() {
    return await caches.open('vir-resizable-image-cache');
}

async function getCachedImageFetchResponse(imageRequest: Request): Promise<Response | undefined> {
    const cache = await openCache();
    const matchedResponse = await cache.match(imageRequest);

    return matchedResponse;
}

async function addCachedImageFetchResponse(
    imageRequest: Request,
    imageResponse: Response,
): Promise<void> {
    const cache = await openCache();
    await cache.put(imageRequest, imageResponse);
}

export type LoadedImageData = {
    response: Response;
    blobUrl: string;
};

const volatileImageDataCache = new Map<
    string,
    Promise<{
        response: Response;
        blobUrl: string;
    }>
>();

export async function loadImageData(
    imageUrl: string,
    allowPersistentCache: boolean,
): Promise<LoadedImageData> {
    if (!volatileImageDataCache.has(imageUrl)) {
        const deferredResponsePromise = createDeferredPromiseWrapper<LoadedImageData>();

        volatileImageDataCache.set(imageUrl, deferredResponsePromise.promise);

        try {
            const imageRequest = new Request(imageUrl);

            const cachedResponse = allowPersistentCache
                ? await getCachedImageFetchResponse(imageRequest)
                : undefined;

            const imageResponse = cachedResponse ?? (await fetch(imageRequest));

            const loadedImageData: LoadedImageData = {
                blobUrl: URL.createObjectURL(await imageResponse.clone().blob()),
                response: imageResponse,
            };
            if (!cachedResponse && allowPersistentCache) {
                // don't await this, so that it doesn't block image loading
                void addCachedImageFetchResponse(imageRequest, imageResponse);
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

    return {
        blobUrl: cachedResponse.blobUrl,
        response: cachedResponse.response.clone(),
    };
}
