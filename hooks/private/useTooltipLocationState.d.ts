/// <reference types="react" />
interface Location {
    top: number;
    left: number;
}
export declare const useTooltipLocationState: () => readonly [Location, import("lodash-es").DebouncedFunc<import("react").Dispatch<import("react").MouseEvent<HTMLDivElement, MouseEvent>>>];
export type TooltipLocationState = ReturnType<typeof useTooltipLocationState>;
export {};
