import {convertTemplateToString} from '@augment-vir/element-vir';
import {html} from 'element-vir';
import {isJson} from './augments/json';
import {ImageResponse, loadImageData} from './image-data-cache';

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

export function isImageTypeTextLike(imageType: ImageType): boolean {
    return textLikeImageTypes.includes(imageType);
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

function formatText(text: string, imageType: ImageType) {
    if (imageType === ImageType.Json) {
        try {
            return JSON.stringify(JSON.parse(text), null, 4);
        } catch (error) {}
    } else if (imageType === ImageType.Html) {
        // strip out console logs
        return text.replaceAll(/console\.\w+/g, 'doNothing');
    }
    return text;
}

export async function getImageData({
    imageUrl,
    blockAutoPlay,
    textTransformer = (input) => input,
}: {
    imageUrl: string;
    blockAutoPlay: boolean;
    textTransformer?: ((originalText: string) => string) | undefined;
}): Promise<ResizableImageData> {
    const imageResponse: ImageResponse = await loadImageData(imageUrl);

    if (!imageResponse.response.ok) {
        throw new Error(`Failed to load '${imageUrl}'`);
    }

    const contentType = imageResponse.response.headers.get('Content-Type')?.toLowerCase() ?? '';
    const rawText = (await imageResponse.response.text()) ?? '';

    const imageType = imageResponse.response
        ? await determineImageType(contentType, rawText)
        : // naively assume it's an image
          ImageType.Image;

    const imageText = textTransformer(formatText(rawText ?? '', imageType));

    const templateString = generateTemplateString({
        imageText,
        imageType,
        imageUrl: imageResponse.blobUrl,
        blockAutoPlay,
    });

    return {
        templateString,
        imageUrl: imageResponse.blobUrl,
        imageType,
    };
}
