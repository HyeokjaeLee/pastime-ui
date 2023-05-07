import type { ReactNode } from 'react';
type HtmlButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type ButtonProps = Pick<HtmlButtonProps, 'children' | 'disabled' | 'type'> & {
    delay?: number;
    size?: 'small' | 'medium' | 'large';
    theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text-dark' | 'text-light';
    icon?: ReactNode;
    iconDirection?: 'left' | 'right';
    shape?: 'round' | 'default';
    className?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const Button: ({ delay, type, children, size, theme, onClick, disabled, shape, iconDirection, icon, className, }: ButtonProps) => JSX.Element;
export {};
