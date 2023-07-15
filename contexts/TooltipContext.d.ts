/// <reference types="react" />
import type { DebouncedFunc } from 'lodash-es';
interface Location {
    top: number;
    left: number;
}
type TooltipDisplay = boolean | 'closing';
type MouseEventHandler = React.MouseEventHandler<HTMLDivElement>;
interface TooltipContextValue {
    display: TooltipDisplay;
    locationState: [
        Location,
        DebouncedFunc<React.Dispatch<React.MouseEvent<HTMLDivElement, MouseEvent>>>
    ];
    mouseEventHandler: {
        handleMouseEnter: MouseEventHandler;
        handleMouseLeave: MouseEventHandler;
    };
}
export interface TooltipContextProviderProps {
    children?: React.ReactNode;
    mouseEnterDelay?: number;
}
export declare const TooltipContextProvider: ({ children, mouseEnterDelay, }: TooltipContextProviderProps) => JSX.Element;
export declare const useTooltipContext: () => TooltipContextValue;
export {};
