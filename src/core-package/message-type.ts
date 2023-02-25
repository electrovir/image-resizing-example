/**
 * These ping and pong messages are used to prevent race conditions between loading the iframe,
 * listening to its messages, and posting messages, both inside of the iframe and outside of it.
 */
export const messageType = {
    readyPing: 'ready-ping',
    readyPong: 'ready-pong',
    detectedSize: 'detected-size',
    setScale: 'set-scale',
    setScalingMethod: 'set-scaling-method',
};
