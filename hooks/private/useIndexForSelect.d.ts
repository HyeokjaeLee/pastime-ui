/// <reference types="react" />
import type { OpenStatus } from './useSelectOpenStatus';
export type ValidOptionValue = string | number;
interface UseOpenStatusParams {
    openStatus: OpenStatus;
    options?: {
        label: string;
        value: ValidOptionValue;
    }[];
    selectRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
    onKeyDown?: (event: KeyboardEvent) => void;
}
export declare const useIndexForSelect: ({ openStatus, options, selectRefs, onKeyDown, }: UseOpenStatusParams) => [number, import("react").Dispatch<import("react").SetStateAction<number>>];
export {};
