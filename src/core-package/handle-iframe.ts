import {addPx} from '@augment-vir/browser';
import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {
    Dimensions,
    calculateRatio,
    clampDimensions,
    scaleToConstraints,
} from './augments/dimensions';
import {MessageType, iframeMessenger} from './iframe-messenger';
import {MutatedClassesEnum} from './mutated-classes';
import {ImageType, ResizableImageData, isImageTypeTextLike} from './resizable-image-data';

/** Handles slow iframe loading and lazy iframe loading. */
async function waitForLoad(iframeElement: HTMLIFrameElement) {
    const iframeLoadPromise = createDeferredPromiseWrapper();
    iframeElement.onload = () => {
        iframeLoadPromise.resolve();
    };

    try {
        await iframeMessenger.sendMessageToChild({
            message: {
                type: MessageType.Ready,
            },
            iframeElement,
        });
    } catch (error) {
        await iframeLoadPromise.promise;
        await iframeMessenger.sendMessageToChild({
            message: {
                type: MessageType.Ready,
            },
            iframeElement,
        });
    }
}

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
    await waitForLoad(iframeElement);

    if (forcedFinalImageSize) {
        await iframeMessenger.sendMessageToChild({
            message: {
                type: MessageType.ForceSize,
                data: forcedFinalImageSize,
            },
            iframeElement,
        });
    }

    const imageDimensions: Dimensions =
        forcedOriginalImageSize ??
        (
            await iframeMessenger.sendMessageToChild({
                message: {
                    type: MessageType.SendSize,
                },
                iframeElement,
                verifyChildData(size) {
                    return (
                        !isNaN(size.width) && !isNaN(size.height) && !!size.width && !!size.height
                    );
                },
            })
        ).data;

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
     * IframeElement.contentWindow can return undefined here if the element is destroyed while
     * loading is still in progress.
     */
    return iframeElement.contentWindow?.document.documentElement.outerHTML ?? '';
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

    const scalingInputs = {
        min,
        max,
        box: forcedFinalImageSize ?? imageDimensions,
    } as const;

    const newImageSize: Dimensions = isImageTypeTextLike(imageData.imageType)
        ? clampDimensions(scalingInputs)
        : scaleToConstraints(scalingInputs);

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
            await iframeMessenger.sendMessageToChild({
                message: {
                    type: MessageType.SendScalingMethod,
                    data: 'pixelated',
                },
                iframeElement,
            });
        } else {
            await iframeMessenger.sendMessageToChild({
                message: {
                    type: MessageType.SendScalingMethod,
                    data: 'default',
                },
                iframeElement,
            });
        }

        await iframeMessenger.sendMessageToChild({
            message: {
                type: MessageType.SizeDetermined,
                data: newImageSize,
            },
            iframeElement,
        });

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
            await iframeMessenger.sendMessageToChild({
                message: {
                    type: MessageType.SendScale,
                    data: scales,
                },
                iframeElement,
            });
        }
    }
}
