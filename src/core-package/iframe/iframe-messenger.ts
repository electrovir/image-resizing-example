import {createIframeMessenger, MessageDirectionEnum} from 'interlocking-iframe-messenger';
import {Dimensions} from '../augments/dimensions';

/**
 * These ping and pong messages are used to prevent race conditions between loading the iframe,
 * listening to its messages, and posting messages, both inside of the iframe and outside of it.
 */
export enum MessageType {
    /** Ready to receive further messages that is. */
    FrameReady = 'frame-ready',
    SendSize = 'send-size',
    SendScale = 'set-scale',
    SendScalingMethod = 'set-scaling-method',
    ForceSize = 'force-size',
    SizeDetermined = 'size-determined',
    ImageElementLoaded = 'image-element-loaded',
}

export type MessageData = {
    [MessageType.FrameReady]: {
        [MessageDirectionEnum.FromParent]: undefined;
        [MessageDirectionEnum.FromChild]: undefined;
    };
    [MessageType.SendSize]: {
        [MessageDirectionEnum.FromParent]: undefined;
        [MessageDirectionEnum.FromChild]: Dimensions;
    };
    [MessageType.SendScale]: {
        [MessageDirectionEnum.FromParent]: Dimensions;
        [MessageDirectionEnum.FromChild]: undefined;
    };
    [MessageType.SendScalingMethod]: {
        [MessageDirectionEnum.FromParent]: 'pixelated' | 'default';
        [MessageDirectionEnum.FromChild]: undefined;
    };
    [MessageType.ForceSize]: {
        [MessageDirectionEnum.FromParent]: Dimensions | undefined;
        [MessageDirectionEnum.FromChild]: undefined;
    };
    [MessageType.SizeDetermined]: {
        [MessageDirectionEnum.FromParent]: Dimensions;
        [MessageDirectionEnum.FromChild]: undefined;
    };
    [MessageType.ImageElementLoaded]: {
        [MessageDirectionEnum.FromParent]: undefined;
        [MessageDirectionEnum.FromChild]: undefined;
    };
};

export const iframeMessenger = createIframeMessenger<MessageData>({});
