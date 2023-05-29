import type { ReactNode } from 'react';
type HtmlButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export interface ButtonProps extends HtmlButtonProps {
    delay?: number;
    size?: 'small' | 'medium' | 'large';
    theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text-dark' | 'text-light';
    icon?: ReactNode;
    iconDirection?: 'left' | 'right';
    shape?: 'round' | 'default';
}
export declare const Button: ({ delay, type, children, size, theme, disabled, shape, iconDirection, icon, className, ...restButtonProps }: ButtonProps) => JSX.Element;
export {};
