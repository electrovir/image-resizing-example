import {extractErrorMessage, filterObject, wait} from '@augment-vir/common';
import {css, defineElement, html, onDomCreated, renderAsyncState} from 'element-vir';
import type {TemplateResult} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {clampDimensions, Dimensions} from './augments/dimensions';
import {handleIframe} from './handle-iframe';
import {getImageData, ImageType} from './image-data';
import {generateIframeDoc} from './resizable-image-frame';
import {defaultResizableImageState} from './resizable-image-state';

const defaultClickCover = html`
    <div class="click-cover"></div>
`;

export const VirResizableImage = defineElement<{
    imageUrl: string;
    /** The max image size constraints which the image will be resized to fit within. */
    max?: Dimensions | undefined;
    /** The min image size constraints which the image will be resized to fit within. */
    min?: Dimensions | undefined;
    /** For hard-coding the original image size pre-scaling to fit the given constraints. */
    forcedOriginalImageSize?: Dimensions | undefined;
    /**
     * String of HTML that will be interpolated into the iframe source code. To run any JS code
     * before the image size calculations happen, create a <script> tag and set the
     * "executeBeforeSizing" variable to a function.
     */
    extraHtml?: string | undefined | TemplateResult;
    /** Query selector to use to determine an html result's size. */
    htmlSizeQuerySelector?: string | undefined;
    /** When set to true, videos will not auto play. */
    blockAutoPlay?: boolean | undefined;
}>()({
    tagName: 'vir-resizable-image',
    stateInit: defaultResizableImageState,
    hostClasses: {
        verticallyCenter: ({state}) => state.shouldVerticallyCenter,
    },
    styles: ({hostClassSelectors}) => css`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
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

        iframe {
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }
    `,
    renderCallback: ({state, inputs, updateState, host}) => {
        updateState({
            imageData: {
                createPromise: async () => {
                    updateState({
                        settled: false,
                        shouldVerticallyCenter: false,
                    });
                    return getImageData(inputs.imageUrl, !!inputs.blockAutoPlay).catch(async () => {
                        // try again
                        await wait(1000);
                        return getImageData(inputs.imageUrl, !!inputs.blockAutoPlay);
                    });
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

        const loadingWrapperStyles = minConstraint
            ? css`
                  min-width: ${minConstraint.width}px;
                  min-height: ${minConstraint.height}px;
              `
            : '';

        const iframeTemplate = renderAsyncState(
            state.imageData,
            html`
                <div class="loading-wrapper" style=${loadingWrapperStyles}>
                    <slot name="loading">Loading...</slot>
                </div>
            `,
            (resolvedImageData) => {
                return html`
                    <iframe
                        class=${classMap({
                            'crisp-scaling': state.shouldUseCrispScaling,
                        })}
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
                                    forcedImageSize: inputs.forcedOriginalImageSize,
                                });
                            } catch (error) {
                                console.error(error);
                            }
                        })}
                    ></iframe>
                    <slot name="loaded"></slot>
                `;
            },
            (error) => {
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

        const frameConstraintMinStyles =
            state.imageData instanceof Error
                ? css`
                      max-width: 100%;
                      max-height: 100%;
                  `
                : '';

        return html`
            <div class="frame-constraint" style=${frameConstraintMinStyles}>${iframeTemplate}</div>
            ${clickCoverTemplate}
        `;
    },
});
