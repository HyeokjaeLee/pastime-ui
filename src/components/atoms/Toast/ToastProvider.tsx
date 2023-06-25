import { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ToastContext } from '@contexts';
import type { ToastOption } from '@contexts';

import { Toast } from './Toast';
import styles from './ToastProvider.module.scss';

import type { ToastProps } from './Toast';

export interface ToastProviderProps
  extends Pick<ToastProps, 'darkMode' | 'floatDirection'> {
  children?: React.ReactNode;
}
export const ToastProvider = ({
  children,
  floatDirection = 'from-top',
  darkMode = false,
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
                    darkMode={darkMode}
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
