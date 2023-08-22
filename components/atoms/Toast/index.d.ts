export type { ToastProps } from './Toast';
export type { ToastProviderProps } from './ToastProvider';
export declare const Toast: (({ icon, children, space, floatDirection, holdTime, onDelete, }: import("./Toast").ToastProps) => import("react/jsx-runtime").JSX.Element) & {
    Provider: ({ children, floatDirection, }: import("./ToastProvider").ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
};
