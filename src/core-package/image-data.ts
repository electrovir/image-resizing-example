import {parseJson} from '@augment-vir/common';
import {convertTemplateToString} from '@augment-vir/element-vir';
import {html} from 'element-vir';

export enum ImageType {
    Html = 'html',
    Text = 'text',
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

async function determineImageType(contentType: string, imageText: string): Promise<ImageType> {
    if (contentType.includes('video')) {
        return ImageType.Video;
    } else if (contentType.includes('svg') || imageText.includes('<svg')) {
        return ImageType.Svg;
    } else if (contentType.includes('html') || imageText.includes('<html')) {
        return ImageType.Html;
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
    } else if (imageType === ImageType.Text) {
        return convertTemplateToString(
            html`
                <p class="text-wrapper">
                    ${imageText
                        .replace(/\n/g, '<br />')
                        .replace(/    /g, '<span class="spacer"></span>')}
                </p>
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

function formatText(text: string, contentType: string) {
    const isValidJson = !!parseJson({jsonString: text, errorHandler: () => undefined});
    if (contentType.includes('json') || isValidJson) {
        try {
            return JSON.stringify(JSON.parse(text), null, 4);
        } catch (error) {}
    }
    return text;
}

export async function getImageData(
    imageUrl: string,
    blockAutoPlay: boolean,
): Promise<ResizableImageData> {
    let imageResponse: Response | undefined;

    try {
        imageResponse = await fetch(imageUrl);
    } catch (error) {}

    const contentType = imageResponse?.headers.get('Content-Type')?.toLowerCase() ?? '';

    const imageText = formatText((await imageResponse?.text()) ?? '', contentType);

    const imageType = imageResponse
        ? await determineImageType(contentType, imageText)
        : // naively assume it's an image
          ImageType.Image;

    const templateString = generateTemplateString({
        imageText,
        imageType,
        imageUrl,
        blockAutoPlay,
    });

    return {
        templateString,
        imageUrl,
        imageType,
    };
}
