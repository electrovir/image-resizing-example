import {getObjectTypedValues, JsonCompatibleValue} from '@augment-vir/common';
import {TemplateResult} from 'lit';
import {Dimensions} from '../augments/dimensions';

export type VirResizableImageInputs = {
    imageUrl: string;
    /** The max image size constraints which the image will be resized to fit within. */
    max?: Dimensions | undefined;
    /** The min image size constraints which the image will be resized to fit within. */
    min?: Dimensions | undefined;
    /** For hard-coding the final image size. Setting this can cause distortions. */
    forcedFinalImageSize?: Dimensions | undefined;
    /**
     * This force the image's dimensions instead of trying to automatically detect the image's
     * dimensions.
     */
    forcedOriginalImageSize?: Dimensions | undefined;
    /**
     * String of HTML that will be interpolated into the iframe source code. To run any JS code
     * before the image size calculations happen, create a <script> tag and set the
     * "executeBeforeSizing" variable to a function.
     */
    extraHtml?: string | undefined | TemplateResult;
    /** Query selector to use to determine an html result's size. */
    htmlSizeQuerySelector?: string | undefined;
    /**
     * When set to true, videos will not auto play their video (audio is always programmatically
     * muted).
     */
    blockAutoPlay?: boolean | undefined;
    /** Block interaction with images, even on HTML pages. */
    blockInteraction?: boolean | undefined;
    /** Set to true to disable lazy loading. */
    eagerLoading?: boolean | undefined;
    /**
     * Use this to transform the image's text before rendering it. This will only do anything for
     * text based images (like HTML, JSON, Text).
     */
    textTransformer?: (text: string) => string;
    /** Timeout for each loading phase in milliseconds. */
    timeoutMs?: number;
    /**
     * Set this to true to block usage of the persistent cache, which lasts longer than a single
     * session. Settings this to true will negatively impact performance but will make sure images
     * are up to date.
     */
    blockPersistentCache?: boolean;
};

export const defaultTimeoutMs: number = 10_000;

const nonSerializableKeysObject: Readonly<
    Required<{
        [KeyName in keyof VirResizableImageInputs as Exclude<
            NonNullable<VirResizableImageInputs[KeyName]>,
            JsonCompatibleValue
        > extends never
            ? KeyName extends 'extraHtml'
                ? KeyName
                : never
            : KeyName]: KeyName;
    }>
> = {
    textTransformer: 'textTransformer',
    extraHtml: 'extraHtml',
};

export const nonSerializableKeys = getObjectTypedValues(nonSerializableKeysObject);
