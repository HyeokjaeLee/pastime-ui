/// <reference types="react" />
export type { ToastProps } from './Toast';
export type { ToastProviderProps } from './ToastProvider';
export declare const Toast: (({ icon, children, space, floatDirection, holdTime, onDelete, }: import("./Toast").ToastProps) => JSX.Element) & {
    Provider: ({ children, floatDirection, }: import("./ToastProvider").ToastProviderProps) => JSX.Element;
};
