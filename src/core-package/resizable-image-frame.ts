import {collapseWhiteSpace} from '@augment-vir/common';
import {convertTemplateToString} from '@augment-vir/element-vir';
import {html} from 'element-vir';
import {TemplateResult} from 'lit';
import {ImageData} from './image-data';
import {MessageDirection, MessageType} from './message';

export function generateIframeDoc(
    imageData: ImageData,
    extraHtml: string | TemplateResult | undefined,
    htmlSizeQuerySelector: string | undefined,
): string {
    const placeholder = Math.random();

    const communicationScript = html`
        <script>
            const imageType = '${imageData.imageType}';
            let forcedSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(/s*\\d+\\s+\\d+\\s+(\\d+)\\s+(\\d+)\\s*/);
                const viewBoxWidth = Number(viewBoxDimensions?.[1]);
                const viewBoxHeight = Number(viewBoxDimensions?.[2]);
                const width =
                    Number(svgElement.getAttribute('width')?.replace(/px$/, '')) || viewBoxWidth;
                const height =
                    Number(svgElement.getAttribute('height')?.replace(/px$/, '')) || viewBoxHeight;

                if (isNaN(width) || isNaN(height)) {
                    return undefined;
                } else {
                    return {width, height};
                }
            }

            function extractHtmlSize(element) {
                if (!element) {
                    throw new Error('No element found to extract size from.');
                }

                let size;
                const rawWidth = window.getComputedStyle(element).width;
                const rawHeight = window.getComputedStyle(element).height;
                const width = Number(rawWidth.replace(/px$/, ''));
                const height = Number(rawHeight.replace(/px$/, ''));

                if (width && height) {
                    size = {height, width};
                }

                if (size) {
                    if (!size.height || !size.width) {
                        throw new Error(
                            'Got invalid html size for ' +
                                imageData.imageUrl +
                                JSON.stringify(size),
                        );
                    }
                    return size;
                } else {
                    return extractHtmlSize(element.nextElementSibling);
                }
            }

            function getHtmlSize(element = document.body) {
                const query = '${htmlSizeQuerySelector ?? ''}' || 'body > *';
                const size = extractHtmlSize(document.querySelector(query));

                return size;
            }

            function getSvgSize() {
                if (forcedSize) {
                    const elements = document.body.querySelectorAll('*');
                    elements.forEach((element) =>
                        element.setAttribute('preserveAspectRatio', 'none'),
                    );
                }

                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = forcedSize ?? extractSvgSize(svgElement);

                if (!svgElement.getAttribute('viewBox')) {
                    svgElement.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                }
                svgElement.removeAttribute('width');
                svgElement.removeAttribute('height');
                svgElement.style.removeProperty('width');
                svgElement.style.removeProperty('height');

                return {width, height};
            }

            function getVideoSize() {
                const video = document.querySelector('video');

                const size = {
                    width: video.videoWidth,
                    height: video.videoHeight,
                };

                return size;
            }

            function getImageSize() {
                const image = document.querySelector('img');

                const size = {
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                return size;
            }

            const sizeGrabbers = {
                svg: getSvgSize,
                html: getHtmlSize,
                image: getImageSize,
                video: getVideoSize,
            };

            function getSize() {
                return sizeGrabbers[imageType]();
            }

            globalThis.addEventListener('message', async (messageEvent) => {
                const message = messageEvent.data;

                if (message.direction === '${MessageDirection.FromChild}') {
                    return;
                }

                function sendMessageToParent(data) {
                    const messageForParent = {
                        type: message.type,
                        direction: '${MessageDirection.FromChild}',
                        data,
                    };
                    globalThis.postMessage(messageForParent);
                }

                switch (message.type) {
                    case '${MessageType.Ready}': {
                        if (!!document.querySelector('body')) {
                            sendMessageToParent();
                        }
                        return;
                    }
                    case '${MessageType.SendScale}': {
                        const scaleDimensions = message.data;

                        document
                            .querySelector('body')
                            .style.setProperty(
                                'transform',
                                'scaleX(' +
                                    scaleDimensions.width +
                                    ') scaleY(' +
                                    scaleDimensions.height +
                                    ')',
                            );
                        return sendMessageToParent();
                    }
                    case '${MessageType.SendScalingMethod}': {
                        if (message.data === 'crisp') {
                            document.body.classList.add('crisp');
                        } else {
                            document.body.classList.remove('crisp');
                        }
                        return sendMessageToParent();
                    }
                    case '${MessageType.SendSize}': {
                        try {
                            await executeBeforeSizing();
                            const size = getSize();

                            sendMessageToParent(size);
                        } catch (error) {}
                        return;
                    }
                    case '${MessageType.ForceSize}': {
                        try {
                            forcedSize = message.data;
                            getSize();
                            sendMessageToParent();
                        } catch (error) {}
                        return;
                    }
                }
            });

            function muteEverything() {
                const videoElements = Array.from(document?.body?.querySelectorAll('video') ?? []);
                const audioElements = Array.from(document?.body?.querySelectorAll('audio') ?? []);
                [
                    ...videoElements,
                    ...audioElements,
                ].forEach((videoElement) => {
                    videoElement.setAttribute('muted', true);
                    videoElement.muted = true;
                });
            }

            try {
                muteEverything();
                const mutationObserver = new MutationObserver(muteEverything);
                mutationObserver.observe(document, {childList: true, subtree: true});
            } catch (error) {
                console.error(error);
            }
        </script>
    `;

    const htmlTemplate = html`
        <!DOCTYPE html>
        <html class="image-type-${imageData.imageType.toLowerCase()}">
            <head>
                <style>
                    body,
                    html {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    html {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    html.image-type-image img,
                    html.image-type-svg svg,
                    html.image-type-video video {
                        max-width: 100vw;
                        max-height: 100vh;
                        width: 100vw;
                        height: 100vh;
                        display: block;
                    }

                    .crisp {
                        image-rendering: crisp-edges;
                    }
                </style>
                <script>
                    var executeBeforeSizing = () => {
                        return undefined;
                    };
                </script>
            </head>
            <body>
                ${placeholder} ${extraHtml ?? ''} ${communicationScript}
            </body>
        </html>
    `;

    const htmlString = collapseWhiteSpace(convertTemplateToString(htmlTemplate)).replace(
        String(placeholder),
        `\n${imageData.templateString}\n`,
    );

    return htmlString;
}
