import {defineVirElementNoInputs} from '../define-vir-element';

export const VirApp = defineVirElementNoInputs({
    tagName: 'vir-app',
    renderCallback: () => {
        return 'hi';
    },
});
