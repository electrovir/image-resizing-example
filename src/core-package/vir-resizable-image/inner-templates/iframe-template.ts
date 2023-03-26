import {ensureError, extractErrorMessage} from '@augment-vir/common';
import {RenderPromiseInput, html, onDomCreated} from 'element-vir';
import {IframeDisconnectedError} from 'interlocking-iframe-messenger';
import {Dimensions} from '../../augments/dimensions';
import {handleIframe, handleLoadedImageSize} from '../../iframe/handle-iframe';
import {generateIframeDoc} from '../../iframe/resizable-image-frame';
import {ImageType, ResizableImageData} from '../../resizable-image-data';
import {MutatedClassesEnum} from '../mutated-classes';
import {VirResizableImageInputs} from '../vir-resizable-image-inputs';

export function renderIframeTemplate(
    {error, promise, resolved}: RenderPromiseInput<ResizableImageData>,
    {
        forcedFinalImageSize,
        eagerLoading,
        extraHtml,
        htmlSizeQuerySelector,
    }: Pick<
        VirResizableImageInputs,
        'forcedFinalImageSize' | 'eagerLoading' | 'extraHtml' | 'htmlSizeQuerySelector'
    >,
    {
        dispatch,
        events,
        maxConstraint,
        minConstraint,
        host,
        timeoutMs,
        sourceDocKey,
        clampedForcedOriginalImageSize,
        abortController,
    }: {
        dispatch: (event: Event) => void;
        events: {
            errored: new (input: Error) => Event;
            imageDataCalculated: new (input: ResizableImageData) => Event;
            settled: new (input: boolean) => Event;
        };
        maxConstraint: Dimensions | undefined;
        minConstraint: Dimensions | undefined;
        host: HTMLElement;
        timeoutMs: number;
        sourceDocKey: string;
        clampedForcedOriginalImageSize: Dimensions | undefined;
        abortController: AbortController;
    },
) {
    if (error) {
        dispatch(new events.errored(ensureError(error)));
        return html`
            <div class="error-wrapper">
                <slot name="error">${extractErrorMessage(error)}</slot>
            </div>
        `;
    } else if (promise) {
        return '';
    } else {
        const resolvedImageData = resolved;
        dispatch(new events.imageDataCalculated(resolvedImageData));
        if (resolvedImageData.imageType === ImageType.Pdf) {
            return html`
                <iframe
                    src=${resolvedImageData.imageUrl}
                    ${onDomCreated(async (element) => {
                        try {
                            await handleLoadedImageSize({
                                forcedFinalImageSize: forcedFinalImageSize,
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
                             * Store the frame source so we can set it to the iframe if this element
                             * is ever detached from the DOM. Do not save this data through a state
                             * update, as that will cause this element to re-render and make the
                             * image blink.
                             */
                            (host as any)[sourceDocKey] = '';
                            dispatch(new events.settled(true));
                            host.classList.add(MutatedClassesEnum.HideLoading);
                        } catch (error) {
                            if (error instanceof IframeDisconnectedError) {
                                /**
                                 * In this case the iframe was removed so this element itself was
                                 * removed so we just want to abort without bothering the user.
                                 */
                                abortController.abort();
                                return;
                            } else {
                                console.error(error);
                            }
                        }
                    })}
                ></iframe>
            `;
        } else {
            return html`
                <iframe
                    loading=${eagerLoading ? 'eager' : 'lazy'}
                    referrerpolicy="no-referrer"
                    scrolling="no"
                    srcdoc=${generateIframeDoc(resolvedImageData, extraHtml, htmlSizeQuerySelector)}
                    ${onDomCreated(async (element) => {
                        try {
                            const latestFrameSource = await handleIframe({
                                min: minConstraint,
                                max: maxConstraint,
                                host,
                                iframeElement: element as HTMLIFrameElement,
                                imageData: resolvedImageData,
                                forcedFinalImageSize: forcedFinalImageSize,
                                forcedOriginalImageSize: clampedForcedOriginalImageSize,
                                timeoutMs,
                            });

                            /**
                             * Store the frame source so we can set it to the iframe if this element
                             * is ever detached from the DOM. Do not save this data through a state
                             * update, as that will cause this element to re-render and make the
                             * image blink.
                             */
                            (host as any)[sourceDocKey] = latestFrameSource;
                            dispatch(new events.settled(true));
                            host.classList.add(MutatedClassesEnum.HideLoading);
                        } catch (error) {
                            if (error instanceof IframeDisconnectedError) {
                                /**
                                 * In this case the iframe was removed so this element itself was
                                 * removed so we just want to abort without bothering the user.
                                 */
                                return;
                            } else {
                                console.error(error);
                            }
                        }
                    })}
                ></iframe>
                <slot name="loaded"></slot>
            `;
        }
    }
}
