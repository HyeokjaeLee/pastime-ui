/// <reference types="react" />
import type { HTMLTagProps } from '@types';
export interface TooltipContentProps extends Omit<HTMLTagProps<'div'>, 'styles'> {
    style?: Omit<React.CSSProperties, 'left' | 'top'>;
}
export declare const TooltipContent: ({ style, children, className, onMouseEnter, onMouseLeave, ...restDivProps }: TooltipContentProps) => import("react").ReactPortal | null;
