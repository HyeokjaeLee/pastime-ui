/// <reference types="react" />
import type { ToastProps } from './Toast';
export interface ToastProviderProps extends Pick<ToastProps, 'floatDirection' | 'fixedDarkMode'> {
    children?: React.ReactNode;
}
export declare const ToastProvider: ({ children, floatDirection, fixedDarkMode, }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
