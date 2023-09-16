// TODO: 추후 ToastContextProvider 선언 후 사용

import { createContext, useContext } from 'react';

export type ToastType = 'fail' | 'success' | 'warning' | 'info';

export interface ToastOption {
  type?: ToastType;
  message: string;
  holdTime?: number;
}

type ToastContextValue = React.Dispatch<React.SetStateAction<ToastOption[]>>;

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined,
);

export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error(
      'useToastContext must be used within a ToastContextProvider',
    );
  }

  return {
    setToastOptionList: context,
  };
};
