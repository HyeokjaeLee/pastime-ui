import React from 'react';
import type { ToastType } from '../../../contexts/ToastContext';
import { FixedDarkMode } from '../../../hooks';
export interface ToastProps {
    icon?: ToastType;
    children: React.ReactNode;
    space?: boolean;
    floatDirection?: 'from-top' | 'from-bottom';
    holdTime?: number;
    onDelete?: () => void;
    fixedDarkMode?: FixedDarkMode;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
}
export declare const Toast: ({ icon, children, space, floatDirection, holdTime, onDelete, fixedDarkMode, className, }: ToastProps) => import("react/jsx-runtime").JSX.Element;
