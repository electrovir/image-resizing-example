import {ensureError} from '@augment-vir/common';
import {
    css,
    defineElement,
    defineElementEvent,
    html,
    onDomCreated,
    renderAsync,
    renderIf,
} from 'element-vir';
import {IframeDisconnectedError} from 'interlocking-iframe-messenger';
import type {TemplateResult} from 'lit';
import {unsafeCSS} from 'lit';
import {Dimensions, clampDimensions, scaleToConstraints} from '../augments/dimensions';
import {resizableImageElementTagName} from '../element-tag-name';
import {handleIframe, handleLoadedImageSize} from '../iframe/handle-iframe';
import {generateIframeDoc} from '../iframe/resizable-image-frame';
import {ImageType, ResizableImageData} from '../image-data';
import {shouldAllowInteraction} from './image-interactions';
import {MutatedClassesEnum} from './mutated-classes';
import {VirResizableImageInputs, defaultTimeoutMs} from './vir-resizable-image-inputs';
import {defaultResizableImageState} from './vir-resizable-image-state';

export const VirResizableImage = defineElement<VirResizableImageInputs>()({
    tagName: resizableImageElementTagName,
    stateInitStatic: defaultResizableImageState,
    events: {
        settled: defineElementEvent<boolean>(),
        imageDataCalculated: defineElementEvent<ResizableImageData>(),
        errored: defineElementEvent<Error>(),
    },
    styles: css`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${unsafeCSS(MutatedClassesEnum.VerticallyCenter)}) {
            align-items: center;
        }

        .click-cover {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 100;
        }

        * {
            flex-shrink: 0;
        }

        .frame-constraint {
            /*
                Make the frame constraint initially fit to the .min-size wrapper.
            */
            width: 100%;
            height: 100%;

            position: relative;
            z-index: 100;
        }

        .error-wrapper,
        .loading-wrapper {
            min-width: calc(100% + 2px);
            min-height: calc(100% + 2px);
            max-width: calc(100% + 2px);
            max-height: calc(100% + 2px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-break: break-word;
        }

        .loading-wrapper {
            position: absolute;
            z-index: 200;
            background-color: inherit;
            opacity: 1;
            pointer-events: none;
        }

        :host(.${unsafeCSS(MutatedClassesEnum.HideLoading)}) .loading-wrapper,
        :host(.${unsafeCSS(MutatedClassesEnum.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: opacity 100ms, visibility 0s 200ms;
        }

        :host(.${unsafeCSS(MutatedClassesEnum.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${unsafeCSS(MutatedClassesEnum.HideLoading)}) iframe {
            /**
             * While showing the actual image.
             */
            opacity: 1;
        }

        iframe {
            opacity: 0;
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }

        .min-size {
            display: flex;
            justify-content: center;
        }
    `,
    cleanupCallback({host}) {
        const iframe = host.shadowRoot!.querySelector('iframe');

        const latestSourceDoc = (host as any)[sourceDocKey];

        if (iframe && latestSourceDoc) {
            iframe.srcdoc = latestSourceDoc;
        }
    },
    renderCallback({state, inputs, updateState, host, dispatch, events}) {
        const timeoutMs = inputs.timeoutMs ?? defaultTimeoutMs;

        updateState({
            imageData: {
                serializableTrigger: {
                    ...inputs,
                    timeoutMs,
                    updateTriggered() {
                        if (state.error) {
                            updateState({error: undefined});
                        }
                        host.classList.remove(MutatedClassesEnum.HideLoading);
                        dispatch(new events.settled(false));
                        host.classList.remove(MutatedClassesEnum.VerticallyCenter);
                    },
                },
            },
        });

        const minConstraint =
            inputs.min && inputs.max
                ? clampDimensions({box: inputs.min, max: inputs.max})
                : inputs.min;
        const maxConstraint = inputs.max;

        const clampedForcedOriginalImageSize: Dimensions | undefined =
            inputs.forcedOriginalImageSize
                ? scaleToConstraints({
                      min: minConstraint,
                      max: maxConstraint,
                      box: inputs.forcedOriginalImageSize,
                  })
                : undefined;

        const iframeTemplate = renderAsync(
            state.imageData,
            '',
            (resolvedImageData) => {
                dispatch(new events.imageDataCalculated(resolvedImageData));
                if (resolvedImageData.imageType === ImageType.Pdf) {
                    return html`
                        <iframe
                            src=${resolvedImageData.imageUrl}
                            ${onDomCreated(async (element) => {
                                try {
                                    await handleLoadedImageSize({
                                        forcedFinalImageSize: inputs.forcedFinalImageSize,
                                        host,
                                        iframeElement: element as HTMLIFrameElement,
                                        imageData: resolvedImageData,
                                        imageDimensions: maxConstraint ?? {
                                            width: 500,
                                            height: 500,
                                        },
                                        max: maxConstraint,
                                        min: minConstraint,
                                        sendSizeMessage: false,
                                        timeoutMs,
                                    });

                                    /**
                                     * Store the frame source so we can set it to the iframe if this
                                     * element is ever detached from the DOM. Do not save this data
                                     * through a state update, as that will cause this element to
                                     * re-render and make the image blink.
                                     */
                                    (host as any)[sourceDocKey] = '';
                                    dispatch(new events.settled(true));
                                    host.classList.add(MutatedClassesEnum.HideLoading);
                                } catch (caught) {
                                    const error = ensureError(caught);
                                    if (error instanceof IframeDisconnectedError) {
                                        /**
                                         * In this case the iframe was removed so this element
                                         * itself was removed so we just want to abort without
                                         * bothering the user.
                                         */
                                        return;
                                    } else {
                                        console.error(error);
                                        updateState({error});
                                        dispatch(new events.errored(error));
                                    }
                                }
                            })}
                        ></iframe>
                    `;
                } else {
                    const allowScrolling =
                        shouldAllowInteraction({
                            allowScrolling: inputs.allowScrolling,
                            blockInteractionInput: inputs.blockInteraction,
                            imageType: resolvedImageData.imageType,
                        }) && !!inputs.allowScrolling;

                    return html`
                        <iframe
                            loading=${inputs.eagerLoading ? 'eager' : 'lazy'}
                            referrerpolicy="no-referrer"
                            srcdoc=${generateIframeDoc(
                                resolvedImageData,
                                inputs.extraHtml,
                                inputs.htmlSizeQuerySelector,
                                allowScrolling,
                            )}
                            ${onDomCreated(async (element) => {
                                try {
                                    const latestFrameSource = await handleIframe({
                                        min: minConstraint,
                                        max: maxConstraint,
                                        host,
                                        iframeElement: element as HTMLIFrameElement,
                                        imageData: resolvedImageData,
                                        forcedFinalImageSize: inputs.forcedFinalImageSize,
                                        forcedOriginalImageSize: clampedForcedOriginalImageSize,
                                        timeoutMs,
                                    });

                                    /**
                                     * Store the frame source so we can set it to the iframe if this
                                     * element is ever detached from the DOM. Do not save this data
                                     * through a state update, as that will cause this element to
                                     * re-render and make the image blink.
                                     */
                                    (host as any)[sourceDocKey] = latestFrameSource;
                                    dispatch(new events.settled(true));
                                    host.classList.add(MutatedClassesEnum.HideLoading);
                                } catch (caught) {
                                    const error = ensureError(caught);
                                    if (error instanceof IframeDisconnectedError) {
                                        /**
                                         * In this case the iframe was removed so this element
                                         * itself was removed so we just want to abort without
                                         * bothering the user.
                                         */
                                        return;
                                    } else {
                                        console.error(error);
                                        updateState({error});
                                        dispatch(new events.errored(error));
                                    }
                                }
                            })}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `;
                }
            },
            (error) => {
                updateState({error});
                dispatch(new events.errored(ensureError(error)));
            },
        ) as string | TemplateResult;

        const clickCoverTemplate = renderAsync(
            state.imageData,
            defaultClickCover,
            (resolvedImageData) => {
                const isInteractionAllowed = shouldAllowInteraction({
                    allowScrolling: inputs.allowScrolling,
                    blockInteractionInput: inputs.blockInteraction,
                    imageType: resolvedImageData.imageType,
                });

                if (isInteractionAllowed) {
                    return '';
                } else {
                    return defaultClickCover;
                }
            },
            () => '',
        );

        const error: Error | undefined =
            state.imageData instanceof Error ? state.imageData : state.error;

        const frameConstraintStyles = error
            ? css`
                  max-width: 100%;
                  max-height: 100%;
              `
            : clampedForcedOriginalImageSize
            ? css`
                  width: ${clampedForcedOriginalImageSize.width}px;
                  height: ${clampedForcedOriginalImageSize.height}px;
              `
            : '';

        const minSizeStyles = css`
            width: ${minConstraint?.width ?? 250}px;
            height: ${minConstraint?.height ?? 250}px;
        `;

        const iframeWithConstraintTemplate = html`
            <div class="frame-constraint" style=${frameConstraintStyles}>${iframeTemplate}</div>
        `;

        return html`
            ${renderIf(
                !error,
                html`
                    <div class="loading-wrapper">
                        <slot name="loading">Loading...</slot>
                    </div>
                `,
            )}
            <div class="min-size" style=${minSizeStyles}>
                ${renderIf(
                    !!error,
                    html`
                        <div class="error-wrapper">
                            <slot name="error">Error: ${error?.message}</slot>
                        </div>
                    `,
                    iframeWithConstraintTemplate,
                )}
            </div>
            ${clickCoverTemplate}
        `;
    },
});

const defaultClickCover = html`
    <div class="click-cover"></div>
`;

const sourceDocKey = 'latest-frame-srcdoc';
