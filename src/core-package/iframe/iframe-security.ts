const windowVariablesToBlock: ReadonlyArray<keyof typeof window> = [
    'indexedDB',
    'localStorage',
    'navigator',
    'sessionStorage',
    'Worker',
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
                return `delete ${globalName}['${propertyToBlock}'];`;
            });
        },
    )
    .flat()
    .join('\n');

console.log(blockAccessScriptCode);

export const removeLocalAccessScript = /* HTML */ `
    <script>
        ${blockAccessScriptCode};
    </script>
`;
