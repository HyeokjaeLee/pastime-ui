/// <reference types="react" />
import type { ToastType } from '@contexts/ToastContext';
export interface ToastProps {
    icon?: ToastType;
    children: React.ReactNode;
    space?: boolean;
    floatDirection?: 'from-top' | 'from-bottom';
    holdTime?: number;
    onDelete?: () => void;
}
export declare const Toast: ({ icon, children, space, floatDirection, holdTime, onDelete, }: ToastProps) => JSX.Element;
