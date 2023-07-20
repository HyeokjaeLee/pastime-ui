/// <reference types="react" />
export type { TooltipContextProviderProps as TooltipProps } from '@contexts/TooltipContext';
export type { TooltipAreaProps } from './TooltipArea';
export type { TooltipContentProps } from './TooltipContent';
export declare const Tooltip: (({ children, mouseEnterDelay, }: import("@contexts/TooltipContext").TooltipContextProviderProps) => JSX.Element) & {
    Area: ({ children, className, onMouseMove, onMouseLeave, ...restDivProps }: import("../../../types").CleanedTagProps<import("react").HTMLAttributes<HTMLDivElement>>) => JSX.Element;
    Content: ({ style, children, className, onMouseEnter, onMouseLeave, ...restDivProps }: import("./TooltipContent").TooltipContentProps) => import("react").ReactPortal | null;
};
