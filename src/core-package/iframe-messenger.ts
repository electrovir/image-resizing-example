import {createIframeMessenger, MessageDirectionEnum} from 'interlocking-iframe-messenger';
import {Dimensions} from './augments/dimensions';

/**
 * These ping and pong messages are used to prevent race conditions between loading the iframe,
 * listening to its messages, and posting messages, both inside of the iframe and outside of it.
 */
export enum MessageType {
    Ready = 'ready',
    SendSize = 'send-size',
    SendScale = 'set-scale',
    SendScalingMethod = 'set-scaling-method',
    ForceSize = 'force-size',
}

export type MessageData = {
    [MessageType.Ready]: {
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
};

export const iframeMessenger = createIframeMessenger<MessageData>({
    allowedOrigins: [window.location.origin],
});
