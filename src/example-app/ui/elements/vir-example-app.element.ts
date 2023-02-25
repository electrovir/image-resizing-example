import {addPx} from '@augment-vir/browser';
import {areJsonEqual, capitalizeFirstLetter, wait} from '@augment-vir/common';
import {assign, AsyncState, asyncState, css, html, listen, renderAsyncState} from 'element-vir';
import {DimensionConstraints, Dimensions, VirResizableImage} from '../../..';
import {sanitizeUrls, storedUrls} from '../../data/indexed-db/stored-urls';
import {virRouter} from '../../router/vir-router';
import {defineVirElementNoInputs} from './define-vir-element';
import {VirUrlInput} from './vir-url-input.element';

const defaultConstraints: DimensionConstraints = {
    max: {
        width: 300,
        height: 600,
    },
    min: {
        width: 300,
        height: 150,
    },
};

export const VirExampleApp = defineVirElementNoInputs({
    tagName: 'vir-example-app',
    stateInit: {
        showConstraints: true,
        imageUrls: asyncState(storedUrls.get()),
        constraints: undefined as DimensionConstraints | undefined,
        router: virRouter,
        urlUpdateDebounce: {promise: undefined, lastSearch: undefined} as {
            promise: Promise<void> | undefined;
            lastSearch: Record<string, string> | undefined;
        },
    },
    hostClasses: {
        showConstraints: ({state}) => state.showConstraints,
    },
    styles: ({hostClassSelectors}) => css`
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

        .images-container {
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
            flex-direction: column;
            gap: 8px;
        }

        .constraint-controls {
            display: flex;
            gap: 8px;
        }

        input {
            font: inherit;
        }

        .constraint-wrapper {
            border: 2px solid transparent;
            flex-shrink: 0;
            position: relative;
        }

        ${hostClassSelectors.showConstraints} .constraint-wrapper.max {
            border-color: red;
        }

        ${hostClassSelectors.showConstraints} .constraint-wrapper.min {
            border-color: lime;
        }

        ${hostClassSelectors.showConstraints} ${VirResizableImage} {
            border-color: blue;
        }

        ${VirResizableImage} {
            border: 1px solid transparent;
            background-color: rgb(241, 241, 241);
            border-radius: 8px;
            flex-shrink: 0;
        }

        .constraint-wrapper.max {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .constraint-wrapper.min {
            pointer-events: none;
        }

        .constraint-wrapper .min-wrapper {
            position: absolute;
            pointer-events: none;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .constraint-wrapper a {
            cursor: pointer;
        }
    `,
    renderCallback: ({state, updateState}) => {
        if (!state.constraints) {
            const searchParams = state.router.getCurrentRawRoutes().search;

            updateState({
                constraints: {
                    min: {
                        width: Number(searchParams?.minW) || defaultConstraints.min.width,
                        height: Number(searchParams?.minH) || defaultConstraints.min.height,
                    },
                    max: {
                        width: Number(searchParams?.maxW) || defaultConstraints.max.width,
                        height: Number(searchParams?.maxH) || defaultConstraints.max.height,
                    },
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
                minW: String(ensuredConstraints.min.width),
                minH: String(ensuredConstraints.min.height),
                maxW: String(ensuredConstraints.max.width),
                maxH: String(ensuredConstraints.max.height),
                ...(ensuredImageUrls.length ? {imageUrls: ensuredImageUrls.join(',')} : {}),
            };
        }

        function updateConstraints(
            inputElement: HTMLInputElement,
            boundary: 'min' | 'max',
            axis: keyof Dimensions,
        ) {
            updateState({
                constraints: {
                    ...ensuredConstraints,
                    [boundary]: {
                        ...ensuredConstraints[boundary],
                        [axis]: Number(inputElement.value) || 0,
                    },
                },
            });
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
            <p>Add more image URLs to the input below:</p>
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
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${state.showConstraints}
                        ${listen('input', (event) => {
                            const checkbox = event.currentTarget as HTMLInputElement;
                            updateState({
                                showConstraints: !!checkbox.checked,
                            });
                        })}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${(
                    [
                        'min',
                        'max',
                    ] as const
                ).map((boundary) => {
                    const inputs = (
                        [
                            'height',
                            'width',
                        ] as const
                    ).map((axis) => {
                        const label = [
                            capitalizeFirstLetter(boundary),
                            capitalizeFirstLetter(axis),
                        ].join(' ');
                        const value = ensuredConstraints[boundary][axis];

                        return html`
                            <label>
                                ${label}
                                <br />
                                ${addPx(value)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${value}
                                    ${listen('input', (event) => {
                                        updateConstraints(
                                            event.currentTarget as HTMLInputElement,
                                            boundary,
                                            axis,
                                        );
                                    })}
                                />
                            </label>
                        `;
                    });

                    return html`
                        <div class="constraint-controls">${inputs}</div>
                    `;
                })}
            </p>
            <div class="images-container">${renderImages(ensuredConstraints, state.imageUrls)}</div>
        `;
    },
});

function renderImages(
    constraints: DimensionConstraints,
    imageUrls: AsyncState<ReadonlyArray<string>>,
) {
    return renderAsyncState(imageUrls, 'Loading...', (resolvedImageUrls) => {
        return sanitizeUrls(resolvedImageUrls).map((imageUrl) => {
            const maxStyle = `
                height: ${addPx(constraints.max.height)};
                max-height: ${addPx(constraints.max.height)};
                width: ${addPx(constraints.max.width)};
                max-width: ${addPx(constraints.max.width)}`;
            const minStyle = `height: ${addPx(constraints.min.height)}; width: ${addPx(
                constraints.min.width,
            )}`;
            return html`
                <div class="constraint-wrapper max" style=${maxStyle}>
                    <a target="_blank" rel="noopener noreferrer" href=${imageUrl}>
                        <${VirResizableImage}
                            ${assign(VirResizableImage, {
                                imageUrl,
                                max: constraints.max,
                                min: constraints.min,
                            })}
                        ></${VirResizableImage}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${minStyle}></div>
                    </div>
                </div>
            `;
        });
    });
}
