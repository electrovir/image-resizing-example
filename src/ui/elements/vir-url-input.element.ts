import {css, defineElementEvent, html, listen} from 'element-vir';
import {defineVirElement} from '../define-vir-element';

export const VirUrlInput = defineVirElement<{urls: ReadonlyArray<string>}>()({
    tagName: 'vir-url-input',
    events: {
        urlsChange: defineElementEvent<string[]>(),
    },
    styles: css`
        :host {
            display: block;
            padding: 8px;
        }

        textarea {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            max-height: 100%;
            height: 150px;
            font: inherit;
            outline: none;
            border: 2px solid #ccc;
            border-radius: 4px;

            white-space: pre;
            overflow-wrap: normal;
            overflow-x: scroll;
            padding: 8px;
        }

        textarea:focus {
            border-color: blue;
        }
    `,
    renderCallback: ({inputs, dispatch, events, host}) => {
        const textAreaElement = host.shadowRoot.querySelector(
            'textarea',
        ) as HTMLTextAreaElement | null;

        const urlsString = inputs.urls.join('\n');
        const urlsStringWithNewLine = urlsString + '\n';

        if (textAreaElement && textAreaElement?.value !== urlsString) {
            textAreaElement.value = urlsString;
        }

        return html`
            <textarea
                ${listen('input', (event) => {
                    const textAreaElement = event.currentTarget as HTMLTextAreaElement;

                    const newUrls = textAreaElement.value
                        .split('\n')
                        .map((line) => line.trim().replace(/,+$/, ''));
                    console.log({newUrls});
                    dispatch(new events.urlsChange(newUrls));
                })}
                ${listen('blur', () => {
                    if (textAreaElement) {
                        textAreaElement.value = urlsStringWithNewLine;
                    }
                })}
                .value=${textAreaElement
                    ? textAreaElement.matches(':focus')
                        ? urlsString
                        : urlsStringWithNewLine
                    : urlsStringWithNewLine}
            ></textarea>
        `;
    },
});
