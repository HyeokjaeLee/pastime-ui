/// <reference types="react" />
import type { HTMLTagProps } from '@types';
export type TooltipContentProps = HTMLTagProps<'div'>;
export declare const TooltipContent: ({ children, className, onMouseEnter, onMouseLeave, style, ...restDivProps }: TooltipContentProps) => import("react").ReactPortal | null;
