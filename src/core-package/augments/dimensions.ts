import {clamp, mapObjectValues} from '@augment-vir/common';
import {greaterThan, lessThan} from './number';

export type Dimensions = {
    width: number;
    height: number;
};

/**
 * Min = trying to grow the box to be at least the constraint
 *
 * Max = trying to shrink the box to fit within the constraint
 */
type MinOrMax = 'min' | 'max';

export function determineConstraintDimension({
    constraint,
    box,
    constraintType = 'max',
}: {
    constraint: Dimensions;
    box: Dimensions;
    constraintType: MinOrMax;
}): keyof Dimensions {
    const comparison = constraintType === 'max' ? greaterThan : lessThan;

    if (comparison(box.width / box.height, constraint.width / constraint.height)) {
        return 'width';
    } else {
        return 'height';
    }
}

function calculateConstraintRatio({
    box,
    constraint,
    constraintType,
}: {
    box: Dimensions;
    constraint: Dimensions;
    constraintType: MinOrMax;
}): number {
    const constraintDimension = determineConstraintDimension({
        box,
        constraint,
        constraintType: constraintType,
    });

    const ratio = constraint[constraintDimension] / box[constraintDimension];

    return ratio;
}

export function factorDimensions({box, ratio}: {box: Dimensions; ratio: number}): Dimensions {
    return mapObjectValues(box, (key, value) => value * ratio);
}

export function clampDimensions({
    box,
    min,
    max,
}: {
    min?: Dimensions | undefined;
    max?: Dimensions | undefined;
    box: Dimensions;
}): Dimensions {
    return mapObjectValues(box, (axis, originalValue) => {
        return clamp({
            value: originalValue,
            min: min?.[axis] ?? 0,
            max: max?.[axis] ?? Infinity,
        });
    });
}

export function scaleToConstraints({
    min,
    max,
    box,
}: {
    min?: Dimensions | undefined;
    max?: Dimensions | undefined;
    box: Dimensions;
}): Dimensions {
    const ratio = calculateRatio({
        min,
        max,
        box,
    });

    const resizedBox = factorDimensions({box, ratio});
    return resizedBox;
    // return clampDimensions({min, max, box: resizedBox});
}

export function calculateRatio({
    min,
    max,
    box,
}: {
    min?: Dimensions | undefined;
    max?: Dimensions | undefined;
    box: Dimensions;
}): number {
    if (!min && !max) {
        return 1;
    }

    const minRatio = min
        ? calculateConstraintRatio({
              box,
              constraint: min,
              constraintType: 'min',
          })
        : 1;
    const maxRatio = max
        ? calculateConstraintRatio({
              box,
              constraint: max,
              constraintType: 'max',
          })
        : 1;

    const initialRatio = minRatio > 1 ? minRatio : maxRatio < 1 ? maxRatio : 1;

    const factoredBox = factorDimensions({ratio: initialRatio, box});

    const doubleMinRatio = min
        ? calculateConstraintRatio({
              box: factoredBox,
              constraint: min,
              constraintType: 'min',
          })
        : 1;

    if (doubleMinRatio > 1) {
        return minRatio;
    } else {
        return initialRatio;
    }
}
