import {areJsonEqual, wait} from '@augment-vir/common';
import {assign, AsyncState, asyncState, css, html, listen, renderAsyncState} from 'element-vir';
import {addPx} from '../../augments/pixel';
import {MaxDimensions} from '../../data/dimensions';
import {sanitizeUrls, storedUrls} from '../../data/indexed-db/stored-urls';
import {virRouter} from '../../router/vir-router';
import {defineVirElementNoInputs} from '../define-vir-element';
import {VirResizableImage} from './vir-resizable-image.element';
import {VirUrlInput} from './vir-url-input.element';

const defaultConstraints: MaxDimensions = {maxWidth: 100, maxHeight: 200};

export const VirApp = defineVirElementNoInputs({
    tagName: 'vir-app',
    stateInit: {
        imageUrls: asyncState(storedUrls.get()),
        constraints: undefined as MaxDimensions | undefined,
        router: virRouter,
        urlUpdateDebounce: {promise: undefined, lastSearch: undefined} as {
            promise: Promise<void> | undefined;
            lastSearch: Record<string, string> | undefined;
        },
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 16px;
        }

        .all-image-containers {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        ${VirResizableImage} {
            border: 5px solid red;
            background-color: rgb(241, 241, 241);
            border-radius: 8px;
        }

        .images-container {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .images-container > * {
            flex-shrink: 0;
        }

        label {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            font: inherit;
            font-size: 1.4em;
        }

        p {
            display: flex;
            gap: 8px;
        }

        input {
            font: inherit;
        }
    `,
    renderCallback: ({state, updateState}) => {
        if (!state.constraints) {
            updateState({
                constraints: {
                    maxWidth:
                        Number(state.router.getCurrentRawRoutes().search?.width) ||
                        defaultConstraints.maxWidth,
                    maxHeight:
                        Number(state.router.getCurrentRawRoutes().search?.height) ||
                        defaultConstraints.maxHeight,
                },
            });
        }

        const ensuredConstraints = state.constraints ?? defaultConstraints;
        const ensuredImageUrls: ReadonlyArray<string> = Array.isArray(state.imageUrls)
            ? state.imageUrls
            : [];

        function generateNewSearch() {
            return {
                ...state.router.getCurrentRawRoutes().search,
                width: String(ensuredConstraints.maxWidth),
                height: String(ensuredConstraints.maxHeight),
                ...(ensuredImageUrls.length ? {imageUrls: ensuredImageUrls.join(',')} : {}),
            };
        }

        if (
            !state.urlUpdateDebounce.promise &&
            (!state.urlUpdateDebounce.lastSearch ||
                !areJsonEqual(generateNewSearch(), state.urlUpdateDebounce.lastSearch))
        ) {
            updateState({
                urlUpdateDebounce: {
                    promise: wait(1000).then(() => {
                        const newSearch = generateNewSearch();

                        try {
                            // throttle the url updates so we don't get browser warnings:
                            // SecurityError: Attempt to use history.replaceState() more than 100 times per 30 seconds
                            state.router.setRoutes(
                                {
                                    search: newSearch,
                                },
                                true,
                            );
                        } catch (error) {
                            console.warn(error);
                        }

                        updateState({
                            urlUpdateDebounce: {
                                promise: undefined,
                                lastSearch: newSearch,
                            },
                        });
                    }),
                    lastSearch: generateNewSearch(),
                },
            });
        }

        return html`
            <${VirUrlInput}
                ${assign(VirUrlInput, {
                    urls: ensuredImageUrls,
                })}
                ${listen(VirUrlInput.events.urlsChange, (event) => {
                    const newUrls = event.detail;
                    storedUrls.set(newUrls);
                    updateState({
                        imageUrls: {
                            resolvedValue: event.detail,
                        },
                    });
                })}
            ></${VirUrlInput}>
            <p>
                <label>
                    Max Width
                    <br>
                    ${addPx(ensuredConstraints.maxWidth)}
                    <br>
                    <input type="range" max="1000" min="20" .value=${
                        ensuredConstraints.maxWidth
                    } ${listen('input', (event) => {
            const inputElement = event.currentTarget as HTMLInputElement;
            updateState({
                constraints: {
                    ...ensuredConstraints,
                    maxWidth: Number(inputElement.value) || 0,
                },
            });
        })}/>
                </label>
                <label>
                    Max Height
                    <br>
                    ${addPx(ensuredConstraints.maxHeight)}
                    <br>
                    <input type="range" max="1000" min="20" .value=${
                        ensuredConstraints.maxHeight
                    } ${listen('input', (event) => {
            const inputElement = event.currentTarget as HTMLInputElement;
            updateState({
                constraints: {
                    ...ensuredConstraints,
                    maxHeight: Number(inputElement.value) || 0,
                },
            });
        })}/>
                </label>
            </p>
            <div class="images-container">
                ${renderImages(ensuredConstraints, state.imageUrls)}
            </div>
        `;
    },
});

function renderImages(maxDimensions: MaxDimensions, imageUrls: AsyncState<ReadonlyArray<string>>) {
    return renderAsyncState(imageUrls, 'Loading...', (resolvedImageUrls) => {
        return sanitizeUrls(resolvedImageUrls).map((imageUrl) => {
            return html`
                <${VirResizableImage}
                    ${assign(VirResizableImage, {imageUrl, maxDimensions})}
                ></${VirResizableImage}>
            `;
        });
    });
}
