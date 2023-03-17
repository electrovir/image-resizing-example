import {ensureError, extractErrorMessage, filterObject, wait} from '@augment-vir/common';
import {
    css,
    defineElement,
    defineElementEvent,
    html,
    onDomCreated,
    renderAsyncState,
} from 'element-vir';
import type {TemplateResult} from 'lit';
import {unsafeCSS} from 'lit';
import {clampDimensions, Dimensions, scaleToConstraints} from './augments/dimensions';
import {handleIframe, handleLoadedImageSize} from './handle-iframe';
import {getImageData, ImageType, ResizableImageData} from './image-data';
import {MutatedClassesEnum} from './mutated-classes';
import {generateIframeDoc} from './resizable-image-frame';
import {defaultResizableImageState} from './resizable-image-state';

const defaultClickCover = html`
    <div class="click-cover"></div>
`;

export type VirResizableImageInputs = {
    imageUrl: string;
    /** The max image size constraints which the image will be resized to fit within. */
    max?: Dimensions | undefined;
    /** The min image size constraints which the image will be resized to fit within. */
    min?: Dimensions | undefined;
    /** For hard-coding the final image size. Setting this can cause distortions. */
    forcedFinalImageSize?: Dimensions | undefined;
    /**
     * This force the image's dimensions instead of trying to automatically detect the image's
     * dimensions.
     */
    forcedOriginalImageSize?: Dimensions | undefined;
    /**
     * String of HTML that will be interpolated into the iframe source code. To run any JS code
     * before the image size calculations happen, create a <script> tag and set the
     * "executeBeforeSizing" variable to a function.
     */
    extraHtml?: string | undefined | TemplateResult;
    /** Query selector to use to determine an html result's size. */
    htmlSizeQuerySelector?: string | undefined;
    /**
     * When set to true, videos will not auto play their video (audio is always programmatically
     * muted).
     */
    blockAutoPlay?: boolean | undefined;
    /** Block interaction with images, even on HTML pages. */
    blockInteraction?: boolean | undefined;
    /** Set to true to disable lazy loading. */
    eagerLoading?: boolean | undefined;
};

const sourceDocKey = 'latest-frame-srcdoc';

export const VirResizableImage = defineElement<VirResizableImageInputs>()({
    tagName: 'vir-resizable-image',
    stateInit: defaultResizableImageState,
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
            position: relative;
            transition: 100ms;
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
            transition: opacity 500ms, visibility 0s 600ms;
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
        updateState({
            imageData: {
                createPromise: async () => {
                    host.classList.remove(MutatedClassesEnum.HideLoading);
                    dispatch(new events.settled(false));
                    host.classList.remove(MutatedClassesEnum.VerticallyCenter);
                    try {
                        return getImageData(inputs.imageUrl, !!inputs.blockAutoPlay);
                    } catch (error) {
                        // try again
                        await wait(1000);
                        try {
                            return getImageData(inputs.imageUrl, !!inputs.blockAutoPlay);
                        } catch (error) {
                            dispatch(new events.errored(ensureError(error)));
                            throw error;
                        }
                    }
                },
                trigger: {
                    ...(filterObject(inputs, (key) => key !== 'extraHtml') as Omit<
                        typeof inputs,
                        'extraHtml'
                    >),
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

        const iframeTemplate = renderAsyncState(
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
                                } catch (error) {
                                    console.error(error);
                                }
                            })}
                        ></iframe>
                    `;
                } else {
                    return html`
                        <iframe
                            loading=${inputs.eagerLoading ? 'eager' : 'lazy'}
                            referrerpolicy="no-referrer"
                            scrolling="no"
                            srcdoc=${generateIframeDoc(
                                resolvedImageData,
                                inputs.extraHtml,
                                inputs.htmlSizeQuerySelector,
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
                                } catch (error) {
                                    console.error(error);
                                }
                            })}
                        ></iframe>
                        <slot name="loaded"></slot>
                    `;
                }
            },
            (error) => {
                dispatch(new events.errored(ensureError(error)));
                return html`
                    <div class="error-wrapper">
                        <slot name="error">${extractErrorMessage(error)}</slot>
                    </div>
                `;
            },
        ) as string | TemplateResult;

        const clickCoverTemplate = renderAsyncState(
            state.imageData,
            defaultClickCover,
            (resolvedImageData) => {
                if (
                    !inputs.blockInteraction &&
                    [
                        ImageType.Html,
                        ImageType.Video,
                        ImageType.Audio,
                        ImageType.Pdf,
                    ].includes(resolvedImageData.imageType)
                ) {
                    /**
                     * In this case the "image" is likely meant to be interactive, so don't block
                     * mouse interactions.
                     */
                    return '';
                } else {
                    return defaultClickCover;
                }
            },
            () => '',
        );

        const frameConstraintStyles =
            state.imageData instanceof Error
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

        return html`
            <div class="loading-wrapper">
                <slot name="loading">Loading...</slot>
            </div>
            <div class="min-size" style=${minSizeStyles}>
                <div class="frame-constraint" style=${frameConstraintStyles}>${iframeTemplate}</div>
            </div>
            ${clickCoverTemplate}
        `;
    },
});
