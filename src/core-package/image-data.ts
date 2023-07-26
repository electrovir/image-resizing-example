import {convertTemplateToString, html} from 'element-vir';
import {isJson} from './augments/json';
import {LoadedImageData, loadImageData} from './image-data-cache';

export enum ImageType {
    Html = 'html',
    Text = 'text',
    Json = 'json',
    Svg = 'svg',
    Image = 'image',
    Video = 'video',
    Audio = 'audio',
    Pdf = 'pdf',
}

export type ResizableImageData = {
    templateString: string;
    imageType: ImageType;
    imageUrl: string;
};

const textLikeImageTypes: ReadonlyArray<ImageType> = [
    ImageType.Text,
    ImageType.Json,
];

const audioLikeImageTypes: ReadonlyArray<ImageType> = [
    ImageType.Audio,
];

export function isImageTypeTextLike(imageType: ImageType): boolean {
    return textLikeImageTypes.includes(imageType);
}

export function isImageTypeAudioLike(imageType: ImageType): boolean {
    return audioLikeImageTypes.includes(imageType);
}

async function determineImageType(contentType: string, imageText: string): Promise<ImageType> {
    if (contentType.includes('video')) {
        return ImageType.Video;
    } else if (contentType.includes('svg') || imageText.includes('<svg')) {
        return ImageType.Svg;
    } else if (contentType.includes('html') || imageText.includes('<html')) {
        return ImageType.Html;
    } else if (isJson(imageText)) {
        return ImageType.Json;
    } else if (
        contentType.includes('json') ||
        contentType.includes('yaml') ||
        contentType.includes('yml') ||
        contentType.includes('pgp-signature') ||
        contentType.includes('text') ||
        contentType.includes('txt')
    ) {
        return ImageType.Text;
    } else if (contentType.includes('audio')) {
        return ImageType.Audio;
    } else if (contentType.includes('pdf')) {
        return ImageType.Pdf;
    } else {
        return ImageType.Image;
    }
}

function generateTemplateString({
    imageType,
    imageText,
    imageUrl,
    blockAutoPlay,
}: {
    imageType: ImageType;
    imageText: string;
    imageUrl: string;
    blockAutoPlay: boolean;
}): string {
    if (imageType === ImageType.Image) {
        return convertTemplateToString(html`
            <img src=${imageUrl} />
        `);
    } else if (imageType === ImageType.Video) {
        return convertTemplateToString(html`
            <video
                ${blockAutoPlay ? '' : 'autoplay'}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${imageUrl} />
            </video>
        `);
    } else if (imageType === ImageType.Text || imageType === ImageType.Json) {
        return convertTemplateToString(
            html`
                <div class="text-wrapper">
                    <p class="text">
                        ${imageText
                            .replace(/\n/g, '<br />')
                            .replace(/    /g, '<span class="spacer"></span>')}
                    </p>
                </div>
            `,
        );
    } else if (imageType === ImageType.Audio) {
        return convertTemplateToString(
            html`
                <audio controls src=${imageUrl}></audio>
            `,
        );
    } else {
        return imageText;
    }
}

function formatText(text: string, imageType: ImageType, removeConsoleLogs: boolean) {
    if (imageType === ImageType.Json) {
        try {
            return JSON.stringify(JSON.parse(text), null, 4);
        } catch (error) {}
    } else if (imageType === ImageType.Html && removeConsoleLogs) {
        // strip out console logs
        return text.replaceAll(/console\.\w+/g, 'doNothing');
    }
    return text;
}

export async function getImageData({
    imageUrl,
    blockAutoPlay,
    textTransformer = (input) => input,
    allowPersistentCache,
    removeConsoleLogs,
}: {
    imageUrl: string;
    blockAutoPlay: boolean;
    textTransformer?: ((originalText: string) => string) | undefined;
    allowPersistentCache: boolean;
    removeConsoleLogs: boolean;
}): Promise<ResizableImageData> {
    const loadedImageData: LoadedImageData = await loadImageData(imageUrl, allowPersistentCache);

    if (!loadedImageData.ok) {
        throw new Error(`Failed to load '${imageUrl}'`);
    }

    const imageType = await determineImageType(loadedImageData.contentType, loadedImageData.text);

    const imageText = textTransformer(
        formatText(loadedImageData.text, imageType, removeConsoleLogs),
    );

    const templateString = generateTemplateString({
        imageText,
        imageType,
        imageUrl: loadedImageData.blobUrl,
        blockAutoPlay,
    });

    return {
        templateString,
        imageUrl: loadedImageData.blobUrl,
        imageType,
    };
}
