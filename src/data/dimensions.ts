export type Dimensions = {
    width: number;
    height: number;
};

export type MaxDimensions = {
    maxWidth: number;
    maxHeight: number;
};

export enum Orientation {
    Portrait = 'portrait',
    Landscape = 'landscape',
    Square = 'square',
}

export function maxToDimensions(input: MaxDimensions): Dimensions {
    return {
        height: input.maxHeight,
        width: input.maxWidth,
    };
}

export function determineConstraintDimension({
    constraintBox,
    sizableBox,
}: {
    constraintBox: Dimensions;
    sizableBox: Dimensions;
}): keyof Dimensions {
    if (sizableBox.width / sizableBox.height > constraintBox.width / constraintBox.height) {
        return 'width';
    } else {
        return 'height';
    }
}
