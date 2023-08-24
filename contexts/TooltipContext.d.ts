/// <reference types="react" />
import type { FixedDarkMode, OpeningTransitionState, TooltipLocationState } from '../hooks';
interface TooltipContextValue {
    locationState: TooltipLocationState;
    tooltipState: OpeningTransitionState;
    isDarkMode: boolean;
}
export interface TooltipContextProviderProps {
    children?: React.ReactNode;
    mouseEnterDelay?: number;
    fixedDarkMode?: FixedDarkMode;
}
export declare const TooltipContextProvider: ({ children, mouseEnterDelay, fixedDarkMode, }: TooltipContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTooltipContext: () => TooltipContextValue;
export {};
