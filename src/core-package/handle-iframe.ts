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
import {messageType} from './message-type';
import {ResizableImageState} from './resizable-image-state';

export type handleIframeInputs = {
    iframe: HTMLIFrameElement;
    updateState: UpdateStateCallback<ResizableImageState>;
    min: Dimensions | undefined;
    max: Dimensions | undefined;
    host: HTMLElement;
    imageData: ImageData;
};

export async function handleIframe(inputs: handleIframeInputs) {
    inputs.iframe.onload = async () => {
        let gotPong = false;
        const startTime = Date.now();
        while (!inputs.iframe.contentWindow) {
            await wait(100);
            if (Date.now() - startTime > 30_000) {
                throw new Error(
                    `Took over 10 seconds for the vir-resizable-image iframe's content window to appear.`,
                );
            }
        }
        const iframeWindow = inputs.iframe.contentWindow;
        iframeWindow.addEventListener('message', (messageEvent) => {
            if (
                messageEvent.data.type === messageType.readyPing ||
                messageEvent.data.type === messageType.setScalingMethod
            ) {
                return;
            } else if (messageEvent.data.type === messageType.readyPong) {
                gotPong = true;
                return;
            } else if (messageEvent.data.type === messageType.detectedSize) {
                const data = JSON.parse(messageEvent.data.data);
                const width = Number(data.width);
                const height = Number(data.height);

                if (!isNaN(width) && !isNaN(height)) {
                    const imageDimensions: Dimensions = {width, height};
                    handleLoadedImageSize({
                        updateState: inputs.updateState,
                        min: inputs.min,
                        max: inputs.max,
                        iframeWindow,
                        imageDimensions,
                        host: inputs.host,
                        imageData: inputs.imageData,
                    });
                } else {
                    console.warn(
                        `Got bad data from vir-resizable-image image iframe: ${JSON.stringify(
                            data,
                        )}`,
                    );
                }
            }
        });
        while (!gotPong) {
            iframeWindow.postMessage({type: messageType.readyPing});
            await wait(100);
        }
    };
}

function handleLoadedImageSize({
    updateState,
    min,
    max,
    iframeWindow,
    imageDimensions,
    host,
    imageData,
}: {
    updateState: UpdateStateCallback<ResizableImageState>;
    min: Dimensions | undefined;
    max: Dimensions | undefined;
    iframeWindow: Window;
    imageDimensions: Dimensions;
    host: HTMLElement;
    imageData: ImageData;
}) {
    const frameConstraintDiv = host.shadowRoot!.querySelector('.frame-constraint');
    if (!(frameConstraintDiv instanceof HTMLElement)) {
        throw new Error(`Could not find frame constraint div.`);
    }

    const newImageSize: Dimensions = scaleToConstraints({
        min,
        max,
        box: imageDimensions,
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
        box: imageDimensions,
    });

    if (ratio > 3) {
        iframeWindow.postMessage({type: messageType.setScalingMethod, data: 'crisp'});
    } else {
        iframeWindow.postMessage({type: messageType.setScalingMethod, data: 'default'});
    }

    if (imageData.imageType === ImageType.Html) {
        iframeWindow.postMessage({
            type: messageType.setScale,
            data: ratio,
        });
    }

    updateState({settled: true});
}
