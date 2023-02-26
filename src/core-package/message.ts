import {ensureError, wait} from '@augment-vir/common';
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
        [MessageDirection.FromParent]: undefined;
        [MessageDirection.FromChild]: undefined;
    };
    [MessageType.SendSize]: {
        [MessageDirection.FromParent]: undefined;
        [MessageDirection.FromChild]: Dimensions;
    };
    [MessageType.SendScale]: {
        [MessageDirection.FromParent]: Dimensions;
        [MessageDirection.FromChild]: undefined;
    };
    [MessageType.SendScalingMethod]: {
        [MessageDirection.FromParent]: 'pixelated' | 'default';
        [MessageDirection.FromChild]: undefined;
    };
    [MessageType.ForceSize]: {
        [MessageDirection.FromParent]: Dimensions | undefined;
        [MessageDirection.FromChild]: undefined;
    };
};

export enum MessageDirection {
    FromParent = 'from-parent',
    FromChild = 'from-child',
}

export type Message<
    MessageTypeGeneric extends MessageType,
    MessageDirectionGeneric extends MessageDirection,
> = {
    type: MessageTypeGeneric;
    direction: MessageDirectionGeneric;
} & (undefined extends MessageData[MessageTypeGeneric][MessageDirectionGeneric]
    ? {data?: MessageData[MessageTypeGeneric][MessageDirectionGeneric]}
    : {data: MessageData[MessageTypeGeneric][MessageDirectionGeneric]});

const maxTryCount = 35;

function isMessageKind<
    MessageTypeGeneric extends MessageType,
    MessageDirectionGeneric extends MessageDirection,
>(
    type: MessageTypeGeneric,
    direction: MessageDirectionGeneric,
    message: Readonly<Message<MessageType, MessageDirection>>,
): message is Message<MessageTypeGeneric, MessageDirectionGeneric> {
    return message.type === type && message.direction === direction;
}

export type SendPingPongMessageInputs<MessageTypeGeneric extends MessageType> = {
    getMessageContext: () => Window | undefined;
    imageUrl: string;
    message: Omit<
        Message<
            MessageTypeGeneric,
            /**
             * Always use FromParent here because the child doesn't have access to this TypeScript
             * code, so we can't share this function with it :'(
             */
            MessageDirection.FromParent
        >,
        'direction'
    >;
} & (Message<MessageTypeGeneric, MessageDirection.FromChild>['data'] extends undefined
    ? {verifyData?: undefined}
    : {
          verifyData: (
              data: Readonly<Message<MessageTypeGeneric, MessageDirection.FromChild>['data']>,
          ) => boolean;
      });

export async function sendPingPongMessage<MessageTypeGeneric extends MessageType>({
    getMessageContext,
    message: messageToSend,
    verifyData,
    imageUrl,
}: SendPingPongMessageInputs<MessageTypeGeneric>): Promise<
    MessageData[MessageTypeGeneric][MessageDirection.FromChild]
> {
    let tryCount = 0;
    let validResponseReceived = false;
    let responseMessage: Message<any, any> | undefined = undefined as Message<any, any> | undefined;
    let listenerError: Error | undefined;
    let messagePosted = false;
    const fullMessageToSend: Omit<
        Message<MessageTypeGeneric, MessageDirection.FromParent>,
        'direction'
    > & {direction: MessageDirection.FromParent} = {
        ...messageToSend,
        direction: MessageDirection.FromParent,
    };

    const expectedMessageType = messageToSend.type;

    function responseListener(event: MessageEvent<any>) {
        try {
            const receivedMessage = event.data;

            if (receivedMessage.direction !== MessageDirection.FromChild) {
                return;
            }

            if (
                receivedMessage &&
                messagePosted &&
                isMessageKind(expectedMessageType, MessageDirection.FromChild, receivedMessage)
            ) {
                let isDataValid = false;
                try {
                    isDataValid = verifyData ? verifyData(receivedMessage.data as any) : true;
                } catch (error) {}

                if (!isDataValid) {
                    return;
                }

                validResponseReceived = true;
                responseMessage = receivedMessage;
            }
        } catch (error) {
            listenerError = ensureError(error);
        }
    }

    let previousContext = getMessageContext();
    previousContext?.addEventListener('message', responseListener);

    const startTime = Date.now();

    while (!validResponseReceived && tryCount < maxTryCount && !listenerError) {
        const waitDuration = Math.min(Math.floor(Math.pow(tryCount, 1.5)) * 100, 5000);
        await wait(waitDuration);
        const newContext = getMessageContext();

        if (newContext) {
            previousContext?.removeEventListener('message', responseListener);
            newContext.addEventListener('message', responseListener);
            if (newContext !== previousContext) {
                previousContext = newContext;
            }
            messagePosted = true;
            newContext.postMessage(fullMessageToSend);
        }
        tryCount++;
    }
    const attemptDuration = Date.now() - startTime;

    if (listenerError) {
        console.error({listenerError, imageUrl, messageToSend});
        throw listenerError;
    }

    if (!validResponseReceived) {
        throw new Error(
            `Failed to receive response from the iframe for message '${
                messageToSend.type
            }' after '${Math.floor(attemptDuration / 1000)}' seconds for '${imageUrl}'`,
        );
    }

    return responseMessage?.data;
}
