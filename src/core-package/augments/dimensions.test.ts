import {assertOutput, itCases} from '@augment-vir/browser-testing';
import {determineConstraintDimension, maxToNormalDimensions} from './dimensions';

describe(maxToNormalDimensions.name, () => {
    it('should work', () => {
        assertOutput(maxToNormalDimensions, {width: 40, height: 20}, {maxWidth: 40, maxHeight: 20});
    });
});

describe(determineConstraintDimension.name, () => {
    itCases(determineConstraintDimension, [
        {
            it: 'should return whatever in square case',
            input: {
                constraintBox: {
                    width: 1,
                    height: 1,
                },
                sizableBox: {
                    width: 1,
                    height: 1,
                },
            },
            // currently defaults to height in this case
            expect: 'height',
        },
        {
            it: 'should return width in landscape case',
            input: {
                constraintBox: {
                    width: 3,
                    height: 3,
                },
                sizableBox: {
                    width: 5,
                    height: 2,
                },
            },
            expect: 'width',
        },
        {
            it: 'should return height in portrait case',
            input: {
                constraintBox: {
                    width: 8,
                    height: 4,
                },
                sizableBox: {
                    width: 5,
                    height: 6,
                },
            },
            expect: 'height',
        },
    ]);
});
