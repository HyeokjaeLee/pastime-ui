/// <reference types="react" />
import { OPENING_TRANSITION } from './useOpeningTransitionState';
export type ValidOptionValue = string | number;
interface UseOpenStatusParams {
    openingTransition: OPENING_TRANSITION;
    options?: {
        label: string;
        value: ValidOptionValue;
    }[];
    optionItemRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
    onKeyDown?: (event: KeyboardEvent) => void;
}
export declare const useIndexForSelect: ({ openingTransition, options, optionItemRefs, onKeyDown, }: UseOpenStatusParams) => [number, import("react").Dispatch<import("react").SetStateAction<number>>];
export {};
