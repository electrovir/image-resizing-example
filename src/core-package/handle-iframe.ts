import {addPx} from '@augment-vir/browser';
import {createDeferredPromiseWrapper, wait} from '@augment-vir/common';
import {
    Dimensions,
    calculateRatio,
    clampDimensions,
    scaleToConstraints,
} from './augments/dimensions';
import {makeAttemptWaitDuration} from './augments/duration';
import {ImageType, ResizableImageData} from './image-data';
import {MessageType, sendPingPongMessage} from './message';
import {MutatedClassesEnum} from './mutated-classes';

function getIframeContentWindow(iframeElement: HTMLIFrameElement) {
    return iframeElement.contentWindow;
}

const maxContentWindowWaitTime = 10_000;

export async function handleIframe({
    min,
    max,
    host,
    iframeElement,
    imageData,
    forcedFinalImageSize,
    forcedOriginalImageSize,
}: {
    min: Dimensions | undefined;
    max: Dimensions | undefined;
    host: HTMLElement;
    iframeElement: HTMLIFrameElement;
    imageData: ResizableImageData;
    forcedFinalImageSize: Dimensions | undefined;
    forcedOriginalImageSize: Dimensions | undefined;
}): Promise<string> {
    const startTime = Date.now();
    const iframeLoadPromise = createDeferredPromiseWrapper();
    iframeElement.onload = () => {
        iframeLoadPromise.resolve();
    };

    let trialAttempt = 0;
    let waitDuration = 0;
    while (!getIframeContentWindow(iframeElement) && waitDuration <= maxContentWindowWaitTime) {
        await wait(makeAttemptWaitDuration(trialAttempt));
        waitDuration = Date.now() - startTime;
        trialAttempt++;
    }
    if (waitDuration > maxContentWindowWaitTime) {
        await iframeLoadPromise.promise;
    }

    await sendPingPongMessage({
        message: {
            type: MessageType.Ready,
        },
        imageUrl: imageData.imageUrl,
        getMessageContext: () => getIframeContentWindow(iframeElement) ?? undefined,
    });

    if (forcedFinalImageSize) {
        await sendPingPongMessage({
            message: {
                type: MessageType.ForceSize,
                data: forcedFinalImageSize,
            },
            imageUrl: imageData.imageUrl,
            getMessageContext: () => getIframeContentWindow(iframeElement) ?? undefined,
        });
    }

    const imageDimensions =
        forcedOriginalImageSize ??
        (await sendPingPongMessage({
            message: {
                type: MessageType.SendSize,
            },
            imageUrl: imageData.imageUrl,
            getMessageContext: () => getIframeContentWindow(iframeElement) ?? undefined,
            verifyData: (size) => {
                return !isNaN(size.width) && !isNaN(size.height) && !!size.width && !!size.height;
            },
        }));

    await handleLoadedImageSize({
        min,
        max,
        imageDimensions,
        host,
        iframeElement,
        imageData,
        forcedFinalImageSize,
        sendSizeMessage: true,
    });

    /**
     * GetIframeContentWindow(iframeElement) can return undefined here if the element is destroyed
     * while loading is still in progress.
     */
    return getIframeContentWindow(iframeElement)?.document.documentElement.outerHTML ?? '';
}

export async function handleLoadedImageSize({
    min,
    max,
    imageDimensions,
    host,
    iframeElement,
    imageData,
    forcedFinalImageSize,
    sendSizeMessage,
}: {
    min: Dimensions | undefined;
    max: Dimensions | undefined;
    imageDimensions: Dimensions;
    host: HTMLElement;
    iframeElement: HTMLIFrameElement;
    imageData: ResizableImageData;
    forcedFinalImageSize: Dimensions | undefined;
    sendSizeMessage: boolean;
}) {
    const frameConstraintDiv = host.shadowRoot!.querySelector('.frame-constraint');
    if (!(frameConstraintDiv instanceof HTMLElement)) {
        throw new Error(`Could not find frame constraint div.`);
    }

    const newImageSize: Dimensions = scaleToConstraints({
        min,
        max,
        box: forcedFinalImageSize ?? imageDimensions,
    });

    frameConstraintDiv.style.width = addPx(Math.floor(newImageSize.width));
    frameConstraintDiv.style.height = addPx(Math.floor(newImageSize.height));

    const hostSize: Dimensions = clampDimensions({
        min,
        max,
        box: newImageSize,
    });

    if (newImageSize.height < hostSize.height) {
        host.classList.add(MutatedClassesEnum.VerticallyCenter);
    } else {
        host.classList.remove(MutatedClassesEnum.VerticallyCenter);
    }

    host.style.width = addPx(hostSize.width);
    host.style.height = addPx(hostSize.height);
    const ratio = calculateRatio({
        min,
        max,
        box: forcedFinalImageSize ?? imageDimensions,
    });

    if (sendSizeMessage) {
        if (ratio > 3) {
            await sendPingPongMessage({
                message: {
                    type: MessageType.SendScalingMethod,
                    data: 'pixelated',
                },
                imageUrl: imageData.imageUrl,
                getMessageContext: () => getIframeContentWindow(iframeElement) ?? undefined,
            });
        } else {
            await sendPingPongMessage({
                message: {
                    type: MessageType.SendScalingMethod,
                    data: 'default',
                },
                imageUrl: imageData.imageUrl,
                getMessageContext: () => getIframeContentWindow(iframeElement) ?? undefined,
            });
        }

        if (imageData.imageType === ImageType.Html) {
            const forcedScales: Dimensions = forcedFinalImageSize
                ? {
                      width: forcedFinalImageSize.width / imageDimensions.width,
                      height: forcedFinalImageSize.height / imageDimensions.height,
                  }
                : {
                      width: 1,
                      height: 1,
                  };
            const scales: Dimensions = {
                width: ratio * forcedScales.width,
                height: ratio * forcedScales.height,
            };
            await sendPingPongMessage({
                message: {
                    type: MessageType.SendScale,
                    data: scales,
                },
                imageUrl: imageData.imageUrl,
                getMessageContext: () => getIframeContentWindow(iframeElement) ?? undefined,
            });
        }
    }
}
