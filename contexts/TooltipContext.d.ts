/// <reference types="react" />
import type { OpeningTransitionState, TooltipLocationState } from '../hooks';
interface TooltipContextValue {
    locationState: TooltipLocationState;
    tooltipState: OpeningTransitionState;
}
export interface TooltipContextProviderProps {
    children?: React.ReactNode;
    mouseEnterDelay?: number;
}
export declare const TooltipContextProvider: ({ children, mouseEnterDelay, }: TooltipContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTooltipContext: () => TooltipContextValue;
export {};
