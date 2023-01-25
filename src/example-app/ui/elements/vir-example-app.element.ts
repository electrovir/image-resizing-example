import {addPx} from '@augment-vir/browser';
import {areJsonEqual, wait} from '@augment-vir/common';
import {assign, AsyncState, asyncState, css, html, listen, renderAsyncState} from 'element-vir';
import {MaxDimensions, VirResizableImage} from '../../..';
import {sanitizeUrls, storedUrls} from '../../data/indexed-db/stored-urls';
import {virRouter} from '../../router/vir-router';
import {defineVirElementNoInputs} from './define-vir-element';
import {VirUrlInput} from './vir-url-input.element';

const defaultConstraints: MaxDimensions = {maxWidth: 100, maxHeight: 200};

export const VirExampleApp = defineVirElementNoInputs({
    tagName: 'vir-example-app',
    stateInit: {
        imageUrls: asyncState(storedUrls.get()),
        constraints: undefined as MaxDimensions | undefined,
        router: virRouter,
        urlUpdateDebounce: {promise: undefined, lastSearch: undefined} as {
            promise: Promise<void> | undefined;
            lastSearch: Record<string, string> | undefined;
        },
        forceImageGrow: false,
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
            gap: 4px;
        }

        .inline-label {
            flex-direction: row;
            align-items: center;
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
            const searchParams = state.router.getCurrentRawRoutes().search;

            updateState({
                constraints: {
                    maxWidth: Number(searchParams?.width) || defaultConstraints.maxWidth,
                    maxHeight: Number(searchParams?.height) || defaultConstraints.maxHeight,
                },
                forceImageGrow:
                    searchParams?.full == undefined ? false : searchParams?.full === '1',
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
                full: state.forceImageGrow ? '1' : '0',
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
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>
                Add more image URLs to the input below:
            </p>
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
                    <input
                        type="range"
                        max="1000"
                        min="20"
                        .value=${ensuredConstraints.maxWidth}
                        ${listen('input', (event) => {
                            const inputElement = event.currentTarget as HTMLInputElement;
                            updateState({
                                constraints: {
                                    ...ensuredConstraints,
                                    maxWidth: Number(inputElement.value) || 0,
                                },
                            });
                        })}
                    />
                </label>
                <label>
                    Max Height
                    <br>
                    ${addPx(ensuredConstraints.maxHeight)}
                    <br>
                    <input
                        type="range"
                        max="1000"
                        min="20"
                        .value=${ensuredConstraints.maxHeight}
                        ${listen('input', (event) => {
                            const inputElement = event.currentTarget as HTMLInputElement;
                            updateState({
                                constraints: {
                                    ...ensuredConstraints,
                                    maxHeight: Number(inputElement.value) || 0,
                                },
                            });
                        })}
                    />
                </label>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${state.forceImageGrow}
                        ${listen('input', () => {
                            updateState({
                                forceImageGrow: !state.forceImageGrow,
                            });
                        })}
                    />
                    Force image grow
                </label>
            </p>
            <div class="images-container">
                ${renderImages(ensuredConstraints, state.imageUrls, state.forceImageGrow)}
            </div>
        `;
    },
});

function renderImages(
    maxDimensions: MaxDimensions,
    imageUrls: AsyncState<ReadonlyArray<string>>,
    forceImageGrow: boolean,
) {
    return renderAsyncState(imageUrls, 'Loading...', (resolvedImageUrls) => {
        return sanitizeUrls(resolvedImageUrls).map((imageUrl) => {
            return html`
                <${VirResizableImage}
                    ${assign(VirResizableImage, {imageUrl, maxDimensions, forceImageGrow})}
                ></${VirResizableImage}>
            `;
        });
    });
}
