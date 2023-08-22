import { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ToastContext } from '@contexts/ToastContext';
import type { ToastOption } from '@contexts/ToastContext';

import { Toast } from './Toast';
import styles from './ToastProvider.module.scss';

import type { ToastProps } from './Toast';

export interface ToastProviderProps extends Pick<ToastProps, 'floatDirection'> {
  children?: React.ReactNode;
}

export const ToastProvider = ({
  //* Toast.Provider props
  children,

  //* Toast props
  floatDirection = 'from-top',
}: ToastProviderProps) => {
  const [toastOptionList, setToastOptionList] = useState<ToastOption[]>([]);

  const [isSpaceHolding, setIsSpaceHolding] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleToastOptionListReset = useCallback(() => {
    if (!ref.current?.offsetHeight) setToastOptionList([]);
  }, []);

  return (
    <>
      {toastOptionList.length
        ? createPortal(
            <div
              className={`${styles['toast-container-wrap']} ${
                styles[`float-direction-${floatDirection}`]
              }`}
            >
              <div
                className={`${styles['toast-container']}`}
                ref={ref}
                onMouseEnter={() => setIsSpaceHolding(true)}
                onMouseLeave={() => {
                  setIsSpaceHolding(false);
                }}
              >
                {toastOptionList.map((toastOption, index) => (
                  <Toast
                    key={index}
                    space={isSpaceHolding}
                    floatDirection={floatDirection}
                    holdTime={toastOption.holdTime}
                    icon={toastOption.type}
                    onDelete={handleToastOptionListReset}
                  >
                    {toastOption.message}
                  </Toast>
                ))}
              </div>
            </div>,
            document.body,
          )
        : null}
      <ToastContext.Provider value={setToastOptionList}>
        {children}
      </ToastContext.Provider>
    </>
  );
};
