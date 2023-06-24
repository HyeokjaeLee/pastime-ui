import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

import styles from './index.module.scss';
import { ToastProviderContext } from '../../../contexts';
import { cleanClassName } from '../../../utils';
import { Toast } from '../../atoms';

import type { ToastProps } from '../../atoms';

export interface ToastOption extends Pick<ToastProps, 'icon'> {
  message?: ToastProps['children'];
}

export interface ToastContainerProps
  extends Omit<
    ToastProps,
    'maintained' | 'leftSpace' | 'children' | 'onToastDelete' | 'type'
  > {
  toastOption?: ToastOption;
}

export interface ToastProviderProps
  extends Pick<ToastProps, 'float' | 'theme'> {
  children?: React.ReactNode;
  holdingTime?: number;
}

export type ToastInfo = Pick<ToastProps, 'icon' | 'children'>;

export const ToastProvider = ({
  float,
  children,
  holdingTime = 5000,
  theme,
}: ToastProviderProps) => {
  const [toastData, setToastData] = useState<ToastInfo[]>([]);

  const pushToast = useCallback((toastInfo: ToastInfo) => {
    setToastData((prevToastData) => {
      prevToastData.push(toastInfo);
      return [...prevToastData];
    });
  }, []);

  return (
    <ToastProviderContext.Provider value={pushToast}>
      {createPortal(
        <div
          className={cleanClassName(
            `${styles['toast-container']} ${
              styles[`float-direction-${float}`]
            }`,
          )}
        >
          <div>
            {toastData.map((toastProps, index) => (
              <Toast
                {...toastProps}
                theme={theme}
                key={index}
                float={float}
                holdingTime={holdingTime}
              />
            ))}
          </div>
        </div>,
        document.body,
      )}
      {children}
    </ToastProviderContext.Provider>
  );
};
