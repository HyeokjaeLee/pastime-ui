/// <reference types="react" />
export type ToastType = 'fail' | 'success' | 'warning' | 'info';
export interface ToastOption {
    type?: ToastType;
    message: string;
    holdTime?: number;
}
type ToastContextValue = React.Dispatch<React.SetStateAction<ToastOption[]>>;
export declare const ToastContext: import("react").Context<ToastContextValue | undefined>;
export declare const useToastContext: () => {
    setToastOptionList: ToastContextValue;
};
export {};
