/// <reference types="react" />
import { MODAL_CLOSING_STATE } from 'hooks';
export type ValidOptionValue = string | number;
interface UseOpenStatusParams {
    closingTransition: MODAL_CLOSING_STATE;
    options?: {
        label: string;
        value: ValidOptionValue;
    }[];
    optionItemRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
    onKeyDown?: (event: KeyboardEvent) => void;
}
export declare const useIndexForSelect: ({ closingTransition, options, optionItemRefs, onKeyDown, }: UseOpenStatusParams) => [number, import("react").Dispatch<import("react").SetStateAction<number>>];
export {};
