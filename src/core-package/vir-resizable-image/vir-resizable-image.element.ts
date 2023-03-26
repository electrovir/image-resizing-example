import {omitObjectKeys, wait, wrapPromiseInTimeout} from '@augment-vir/common';
import {createCachedPromise} from '@electrovir/cached-promise';
import {
    css,
    defineElement,
    defineElementEvent,
    html,
    renderCachedPromise,
    renderIf,
} from 'element-vir';
import {unsafeCSS} from 'lit';
import {Dimensions, clampDimensions, scaleToConstraints} from '../augments/dimensions';
import {ResizableImageData, getImageData} from '../resizable-image-data';
import {renderClickCoverTemplate} from './inner-templates/click-cover-template';
import {renderIframeTemplate} from './inner-templates/iframe-template';
import {MutatedClassesEnum} from './mutated-classes';
import {sourceDocKey} from './stored-source-doc-key';
import {
    VirResizableImageInputs,
    defaultTimeoutMs,
    nonSerializableKeys,
} from './vir-resizable-image-inputs';

export const VirResizableImage = defineElement<VirResizableImageInputs>()({
    tagName: 'vir-resizable-image',
    stateInit: {
        imageDataPromise: createCachedPromise<ResizableImageData>(),
    },
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
    renderCallback({state, inputs, host, dispatch, events}) {
        const timeoutMs = inputs.timeoutMs ?? defaultTimeoutMs;

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

        const minSizeStyles = css`
            width: ${minConstraint?.width ?? 250}px;
            height: ${minConstraint?.height ?? 250}px;
        `;

        const abortController: AbortController = new AbortController();

        return renderCachedPromise({
            cachedPromise: state.imageDataPromise,
            async createPromise() {
                host.classList.remove(MutatedClassesEnum.HideLoading);
                dispatch(new events.settled(false));
                host.classList.remove(MutatedClassesEnum.VerticallyCenter);
                const imageDataInputs = {
                    imageUrl: inputs.imageUrl,
                    blockAutoPlay: !!inputs.blockAutoPlay,
                    textTransformer: inputs.textTransformer,
                };

                try {
                    return await wrapPromiseInTimeout(
                        timeoutMs,
                        getImageData(imageDataInputs, abortController.signal),
                    );
                } catch (error) {
                    // try one more time
                    await wait(2_000);
                    return await wrapPromiseInTimeout(
                        timeoutMs,
                        getImageData(imageDataInputs, abortController.signal),
                    );
                }
            },
            triggers: {
                ...omitObjectKeys(inputs, nonSerializableKeys),
            },
            render(renderParams) {
                if (renderParams.error) {
                    console.error(renderParams.error);
                }
                const iframeTemplate = renderIframeTemplate(renderParams, inputs, {
                    clampedForcedOriginalImageSize,
                    dispatch,
                    events,
                    host,
                    maxConstraint,
                    minConstraint,
                    sourceDocKey,
                    timeoutMs,
                    abortController,
                });

                const clickCoverTemplate = renderClickCoverTemplate(renderParams, inputs);

                const frameConstraintStyles = renderParams.error
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

                const frameConstraintTemplate = html`
                    <div class="frame-constraint" style=${frameConstraintStyles}>
                        ${iframeTemplate}
                    </div>
                `;

                return html`
                    ${renderIf(
                        !renderParams.error,
                        html`
                            <div class="loading-wrapper">
                                <slot name="loading">Loading...</slot>
                            </div>
                        `,
                    )}

                    <div class="min-size" style=${minSizeStyles}>
                        ${renderIf(
                            !renderParams.error,
                            frameConstraintTemplate,
                            html`
                                <div class="error-wrapper">
                                    <slot name="error">Error: ${renderParams.error?.message}</slot>
                                </div>
                            `,
                        )}
                    </div>
                    ${clickCoverTemplate}
                `;
            },
        });
    },
});
