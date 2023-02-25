import {convertTemplateToString} from '@augment-vir/element-vir';
import {html} from 'element-vir';
export enum ImageType {
    Html = 'html',
    Svg = 'svg',
    Image = 'image',
    Video = 'video',
}

export type ImageData = {
    templateString: string;
    imageType: ImageType;
    imageUrl: string;
};

async function determineImageType(imageResponse: Response, imageText: string): Promise<ImageType> {
    const contentType = imageResponse.headers.get('Content-Type') ?? '';
    if (contentType.includes('video')) {
        return ImageType.Video;
    } else if (contentType.includes('svg') || imageText.includes('<svg')) {
        return ImageType.Svg;
    } else if (contentType.includes('html') || imageText.includes('<html')) {
        return ImageType.Html;
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
                <source src=${imageUrl} type="video/mp4" />
            </video>
        `);
    } else {
        return imageText;
    }
}

export async function getImageData(imageUrl: string, blockAutoPlay: boolean): Promise<ImageData> {
    let imageResponse: Response | undefined;

    try {
        imageResponse = await fetch(imageUrl);
    } catch (error) {}

    const imageText = (await imageResponse?.text()) ?? '';

    const imageType = imageResponse
        ? await determineImageType(imageResponse, imageText)
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
