/// <reference types="react" />
import type { ToastProps } from './Toast';
export interface ToastProviderProps extends Pick<ToastProps, 'floatDirection' | 'fixedDarkMode' | 'className'> {
    children?: React.ReactNode;
}
export declare const ToastProvider: ({ children, floatDirection, fixedDarkMode, className, }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
