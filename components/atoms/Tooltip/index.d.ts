/// <reference types="react" />
export type { TooltipContextProviderProps as TooltipProps } from '@contexts/TooltipContext';
export type { TooltipAreaProps } from './TooltipArea';
export type { TooltipContentProps } from './TooltipContent';
export declare const Tooltip: (({ children, mouseEnterDelay, }: import("@contexts/TooltipContext").TooltipContextProviderProps) => JSX.Element) & {
    Area: ({ children, className, onMouseEnter, onMouseLeave, ...restDivProps }: import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element;
    Content: ({ children, className, onMouseEnter, onMouseLeave, style, ...restDivProps }: import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => import("react").ReactPortal | null;
};
