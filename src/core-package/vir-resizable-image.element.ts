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
import {classMap} from 'lit/directives/class-map.js';
import {clampDimensions, Dimensions, scaleToConstraints} from './augments/dimensions';
import {handleIframe} from './handle-iframe';
import {getImageData, ImageType} from './image-data';
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
};

export const VirResizableImage = defineElement<VirResizableImageInputs>()({
    tagName: 'vir-resizable-image',
    stateInit: defaultResizableImageState,
    hostClasses: {
        verticallyCenter: ({state}) => state.shouldVerticallyCenter,
    },
    events: {
        settled: defineElementEvent<boolean>(),
        errored: defineElementEvent<Error>(),
    },
    styles: ({hostClassSelectors}) => css`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        ${hostClassSelectors.verticallyCenter} {
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
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
            max-height: 100%;
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

        .hide-loading-wrapper {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: 500ms;
            opacity: 0;
        }

        iframe {
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }
    `,
    renderCallback: ({state, inputs, updateState, host, dispatch, events}) => {
        function setSettled(value: boolean) {
            updateState({settled: value});
            dispatch(new events.settled(value));
        }

        updateState({
            imageData: {
                createPromise: async () => {
                    setSettled(false);
                    updateState({
                        shouldVerticallyCenter: false,
                    });
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
                if (inputs.forcedOriginalImageSize) {
                }

                return html`
                    <iframe
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        scrolling="no"
                        srcdoc=${generateIframeDoc(
                            resolvedImageData,
                            inputs.extraHtml,
                            inputs.htmlSizeQuerySelector,
                        )}
                        ${onDomCreated(async () => {
                            try {
                                await handleIframe({
                                    updateState,
                                    min: minConstraint,
                                    max: maxConstraint,
                                    host,
                                    imageData: resolvedImageData,
                                    forcedFinalImageSize: inputs.forcedFinalImageSize,
                                    forcedOriginalImageSize: clampedForcedOriginalImageSize,
                                });
                                setSettled(true);
                            } catch (error) {
                                console.error(error);
                            }
                        })}
                    ></iframe>
                    <slot name="loaded"></slot>
                `;
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
                    [
                        ImageType.Html,
                        ImageType.Video,
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

        return html`
            <div
                class=${classMap({
                    'loading-wrapper': true,
                    'hide-loading-wrapper': state.settled,
                })}
            >
                <slot name="loading">Loading...</slot>
            </div>
            <div class="frame-constraint" style=${frameConstraintStyles}>${iframeTemplate}</div>
            ${clickCoverTemplate}
        `;
    },
});
