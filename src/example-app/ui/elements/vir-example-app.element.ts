import {extractEventTarget} from '@augment-vir/browser';
import {addPx, areJsonEqual, capitalizeFirstLetter, wait} from '@augment-vir/common';
import {AsyncObservableProperty, asyncProp, css, html, listen, renderAsync} from 'element-vir';
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
    stateInitStatic: {
        showConstraints: true,
        imageUrls: asyncProp({defaultValue: storedUrls.get()}),
        constraints: undefined as DimensionConstraints | undefined,
        router: virRouter,
        urlUpdateDebounce: {promise: undefined, lastSearch: undefined} as {
            promise: Promise<void> | undefined;
            lastSearch: Record<string, string> | undefined;
        },
        allowScrolling: false,
    },
    hostClasses: {
        'vir-example-app-show-constraints': ({state}) => state.showConstraints,
    },
    styles: ({hostClasses}) => css`
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

        ${hostClasses['vir-example-app-show-constraints'].selector} .constraint-wrapper.max {
            border-color: red;
        }

        ${hostClasses['vir-example-app-show-constraints'].selector} .constraint-wrapper.min {
            border-color: lime;
        }

        ${hostClasses['vir-example-app-show-constraints'].selector} ${VirResizableImage} {
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
            <${VirUrlInput.assign({
                urls: ensuredImageUrls,
            })}
                ${listen(VirUrlInput.events.urlsChange, (event) => {
                    const newUrls = event.detail;
                    storedUrls.set(newUrls);
                    state.imageUrls.setResolvedValue(event.detail);
                })}
            ></${VirUrlInput}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${state.showConstraints}
                        ${listen('input', (event) => {
                            const checkbox = extractEventTarget(event, HTMLInputElement);
                            updateState({
                                showConstraints: !!checkbox.checked,
                            });
                        })}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${state.allowScrolling}
                        ${listen('input', (event) => {
                            const checkbox = extractEventTarget(event, HTMLInputElement);
                            updateState({
                                allowScrolling: !!checkbox.checked,
                            });
                        })}
                    />
                    Allow text scrolling
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
                                            extractEventTarget(event, HTMLInputElement),
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
            <div class="images-container">
                ${renderImages(ensuredConstraints, state.imageUrls, state.allowScrolling)}
            </div>
        `;
    },
});

function renderImages(
    constraints: DimensionConstraints,
    imageUrls: AsyncObservableProperty<readonly string[], {}, undefined>,
    allowScrolling: boolean | undefined,
) {
    return renderAsync(imageUrls, 'Loading...', (resolvedImageUrls) => {
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
                        <${VirResizableImage.assign({
                            imageUrl,
                            max: constraints.max,
                            min: constraints.min,
                            allowScrolling,
                        })}></${VirResizableImage}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${minStyle}></div>
                    </div>
                </div>
            `;
        });
    });
}
