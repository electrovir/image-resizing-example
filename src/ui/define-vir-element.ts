import {wrapDefineElement} from 'element-vir';

export const {defineElement: defineVirElement, defineElementNoInputs: defineVirElementNoInputs} =
    wrapDefineElement<`vir-${string}`>();
