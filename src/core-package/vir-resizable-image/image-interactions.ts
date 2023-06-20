import {ImageType} from '../image-data';

export const imageTypesThatAllowInteraction: ReadonlyArray<ImageType> = [
    ImageType.Html,
    ImageType.Video,
    ImageType.Audio,
    ImageType.Pdf,
] as const;

export const imageTypesThatAllowScrolling: ReadonlyArray<ImageType> = [
    ImageType.Html,
    ImageType.Text,
    ImageType.Json,
] as const;

export function shouldAllowInteraction({
    blockInteractionInput,
    imageType,
    allowScrolling,
}: {
    blockInteractionInput: boolean | undefined;
    imageType: ImageType;
    allowScrolling: boolean | undefined;
}): boolean {
    /** Allow respect explicitly set boolean values for the block interaction input. */
    if (typeof blockInteractionInput === 'boolean') {
        return !blockInteractionInput;
    }

    /**
     * If the block interaction input is not explicitly set to a boolean, the default behavior is as
     * follows:
     */
    if (imageTypesThatAllowInteraction.includes(imageType)) {
        return true;
    } else if (allowScrolling && imageTypesThatAllowScrolling.includes(imageType)) {
        return true;
    } else {
        return false;
    }
}
