/// <reference types="react" />
import type { ToastProps } from './Toast';
export interface ToastProviderProps extends Pick<ToastProps, 'floatDirection'> {
    children?: React.ReactNode;
}
export declare const ToastProvider: ({ children, floatDirection, }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
