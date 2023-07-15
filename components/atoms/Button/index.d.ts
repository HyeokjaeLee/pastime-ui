/// <reference types="react" />
import type { HTMLTagProps } from '@types';
type Theme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'clear' | 'ghost';
export interface ButtonProps extends HTMLTagProps<'button'> {
    delay?: number;
    size?: 'small' | 'medium' | 'large';
    theme?: Theme;
    icon?: React.ReactNode;
    iconDirection?: 'left' | 'right';
    shape?: 'sharp-corner' | 'rounded' | 'pill';
}
export declare const Button: ({ delay, size, theme, shape, iconDirection, icon, type, children, disabled, className, ...restButtonProps }: ButtonProps) => JSX.Element;
export {};
