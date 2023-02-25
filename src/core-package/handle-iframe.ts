import {addPx} from '@augment-vir/browser';
import {wait} from '@augment-vir/common';
import {UpdateStateCallback} from 'element-vir';
import {
    calculateRatio,
    clampDimensions,
    Dimensions,
    scaleToConstraints,
} from './augments/dimensions';
import {ImageData, ImageType} from './image-data';
import {MessageType, sendPingPongMessage} from './message';
import {ResizableImageState} from './resizable-image-state';

export type handleIframeInputs = {
    updateState: UpdateStateCallback<ResizableImageState>;
    min: Dimensions | undefined;
    max: Dimensions | undefined;
    host: HTMLElement;
    imageData: ImageData;
    forcedImageSize: Dimensions | undefined;
};

function getIframeContentWindow(host: HTMLElement) {
    return host.shadowRoot!.querySelector('iframe')?.contentWindow;
}

const maxContentWindowWaitTime = 60_000;

export async function handleIframe({
    updateState,
    min,
    max,
    host,
    imageData,
    forcedImageSize,
}: handleIframeInputs) {
    const startTime = Date.now();
    while (!getIframeContentWindow(host)) {
        await wait(100);
        if (Date.now() - startTime > maxContentWindowWaitTime) {
            throw new Error(
                `Took over ${Math.floor(
                    maxContentWindowWaitTime / 1000,
                )} seconds for the vir-resizable-image iframe's content window to appear for '${
                    imageData.imageUrl
                }'`,
            );
        }
    }

    await sendPingPongMessage({
        message: {
            type: MessageType.Ready,
        },
        imageUrl: imageData.imageUrl,
        getMessageContext: () => getIframeContentWindow(host) ?? undefined,
    });
    await sendPingPongMessage({
        message: {
            type: MessageType.ForceSize,
            data: forcedImageSize,
        },
        imageUrl: imageData.imageUrl,
        getMessageContext: () => getIframeContentWindow(host) ?? undefined,
    });

    const imageDimensions = await sendPingPongMessage({
        message: {
            type: MessageType.SendSize,
        },
        imageUrl: imageData.imageUrl,
        getMessageContext: () => getIframeContentWindow(host) ?? undefined,
        verifyData: (size) => {
            return !isNaN(size.width) && !isNaN(size.height) && !!size.width && !!size.height;
        },
    });

    await handleLoadedImageSize({
        updateState,
        min,
        max,
        imageDimensions,
        host,
        imageData,
        forcedImageSize,
    });

    updateState({
        settled: true,
    });
}

async function handleLoadedImageSize({
    updateState,
    min,
    max,
    imageDimensions,
    host,
    imageData,
    forcedImageSize,
}: {
    updateState: UpdateStateCallback<ResizableImageState>;
    min: Dimensions | undefined;
    max: Dimensions | undefined;
    imageDimensions: Dimensions;
    host: HTMLElement;
    imageData: ImageData;
    forcedImageSize: Dimensions | undefined;
}) {
    const frameConstraintDiv = host.shadowRoot!.querySelector('.frame-constraint');
    if (!(frameConstraintDiv instanceof HTMLElement)) {
        throw new Error(`Could not find frame constraint div.`);
    }

    const newImageSize: Dimensions = scaleToConstraints({
        min,
        max,
        box: forcedImageSize ?? imageDimensions,
    });

    frameConstraintDiv.style.width = addPx(Math.floor(newImageSize.width));
    frameConstraintDiv.style.height = addPx(Math.floor(newImageSize.height));

    const hostSize: Dimensions = clampDimensions({
        min,
        max,
        box: newImageSize,
    });

    if (newImageSize.height < hostSize.height) {
        updateState({
            shouldVerticallyCenter: true,
        });
    } else {
        updateState({
            shouldVerticallyCenter: false,
        });
    }

    host.style.width = addPx(hostSize.width);
    host.style.height = addPx(hostSize.height);
    const ratio = calculateRatio({
        min,
        max,
        box: forcedImageSize ?? imageDimensions,
    });

    if (ratio > 3) {
        await sendPingPongMessage({
            message: {
                type: MessageType.SendScalingMethod,
                data: 'crisp',
            },
            imageUrl: imageData.imageUrl,
            getMessageContext: () => getIframeContentWindow(host) ?? undefined,
        });
    } else {
        await sendPingPongMessage({
            message: {
                type: MessageType.SendScalingMethod,
                data: 'default',
            },
            imageUrl: imageData.imageUrl,
            getMessageContext: () => getIframeContentWindow(host) ?? undefined,
        });
    }

    if (imageData.imageType === ImageType.Html) {
        const forcedScales: Dimensions = forcedImageSize
            ? {
                  width: forcedImageSize.width / imageDimensions.width,
                  height: forcedImageSize.height / imageDimensions.height,
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
            getMessageContext: () => getIframeContentWindow(host) ?? undefined,
        });
    }
}
