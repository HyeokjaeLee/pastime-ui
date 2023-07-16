/// <reference types="react" />
import { HTMLTagProps } from '@types';
export type TooltipAreaProps = HTMLTagProps<'div'>;
export declare const TooltipArea: ({ children, className, onMouseMove, onMouseLeave, ...restDivProps }: TooltipAreaProps) => JSX.Element;
