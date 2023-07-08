const windowVariablesToBlock: ReadonlyArray<keyof typeof window> = [
    'indexedDB',
    'localStorage',
    'navigator',
    'sessionStorage',
    'Worker',
    'top',
    'parent',
    'frameElement',
];
const documentVariablesToBlock: ReadonlyArray<keyof Document> = ['cookie'];

/** Each key in this object should be a global variable name. */
const globalBlocks = {
    window: windowVariablesToBlock,
    document: documentVariablesToBlock,
};

const blockAccessScriptCode: string = Object.entries(globalBlocks)
    .map(
        ([
            globalName,
            propertiesToBlock,
        ]) => {
            return propertiesToBlock.map((propertyToBlock) => {
                return `Object.defineProperty(${globalName}, '${propertyToBlock}', {value: undefined, writable: false, configurable: false, enumerable: false});`;
            });
        },
    )
    .flat()
    .join('\n');

export const removeLocalAccessScript = /* HTML */ `
    <script>
        ${blockAccessScriptCode};
    </script>
`;
