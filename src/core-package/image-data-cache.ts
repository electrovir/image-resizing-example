import {createDeferredPromiseWrapper} from '@augment-vir/common';

export type ImageResponse = {
    response: Response;
    blobUrl: string;
};

const imageDataCache = new Map<
    string,
    Promise<{
        response: Response;
        blobUrl: string;
    }>
>();

export async function loadImageData(imageUrl: string): Promise<ImageResponse> {
    if (!imageDataCache.has(imageUrl)) {
        const deferredResponsePromise = createDeferredPromiseWrapper<ImageResponse>();

        imageDataCache.set(imageUrl, deferredResponsePromise.promise);

        try {
            const fetchResponse = await fetch(imageUrl);
            const imageResponse: ImageResponse = {
                blobUrl: URL.createObjectURL(await fetchResponse.clone().blob()),
                response: fetchResponse,
            };
            deferredResponsePromise.resolve(imageResponse);
        } catch (error) {
            deferredResponsePromise.reject(error);
            throw error;
        }
    }

    const cachedResponse = await imageDataCache.get(imageUrl);

    if (!cachedResponse) {
        throw new Error("Stored a cached response but couldn't find it afterwards.");
    }

    return {
        blobUrl: cachedResponse.blobUrl,
        response: cachedResponse.response.clone(),
    };
}
