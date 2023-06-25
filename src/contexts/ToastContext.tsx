import { createContext } from 'react';

export type ToastType =
  | 'fail'
  | 'success'
  | 'warning'
  | 'info'
  | React.ReactNode;

export interface ToastOption {
  type?: ToastType;
  message: string;
  holdTime?: number;
}

type ToastContextValue = React.Dispatch<React.SetStateAction<ToastOption[]>>;

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined,
);
