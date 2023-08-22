/// <reference types="react" />
export type { TooltipContextProviderProps as TooltipProps } from '../../../contexts/TooltipContext';
export type { TooltipAreaProps } from './TooltipArea';
export type { TooltipContentProps } from './TooltipContent';
export declare const Tooltip: (({ children, mouseEnterDelay, }: import('../../../contexts/TooltipContext').TooltipContextProviderProps) => import("react/jsx-runtime").JSX.Element) & {
    Area: ({ className, onMouseMove, onMouseLeave, ...restDivProps }: import("../../../types").CleanedTagProps<import("react").HTMLAttributes<HTMLDivElement>>) => import("react/jsx-runtime").JSX.Element;
    Content: ({ style, children, className, onMouseEnter, onMouseLeave, ...restDivProps }: import("./TooltipContent").TooltipContentProps) => import("react").ReactPortal | null;
};
