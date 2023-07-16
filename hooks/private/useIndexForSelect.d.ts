/// <reference types="react" />
import { OPENING_TRANSITION } from './useOpeningTransitionState';
export type ValidOptionValue = string | number;
interface UseOpenStatusParams {
    openingTransition: OPENING_TRANSITION;
    options?: {
        label: string;
        value: ValidOptionValue;
    }[];
    selectRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
    onKeyDown?: (event: KeyboardEvent) => void;
}
export declare const useIndexForSelect: ({ openingTransition, options, selectRefs, onKeyDown, }: UseOpenStatusParams) => [number, import("react").Dispatch<import("react").SetStateAction<number>>];
export {};
