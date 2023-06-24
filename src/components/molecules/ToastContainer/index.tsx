import { useState, useEffect } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Toast, CLOSE_TOAST_ANIMATION_DURATION } from '../../atoms';

import type { ToastProps } from '../../atoms';

export interface ToastOption extends Pick<ToastProps, 'type'> {
  message?: ToastProps['children'];
}

export interface ToastContainerProps
  extends Omit<
    ToastProps,
    'maintained' | 'leftSpace' | 'children' | 'onToastDelete' | 'type'
  > {
  toastOption?: ToastOption;
}

export const ToastContainer = ({
  toastOption,
  floatDirection = 'from-top',
  holdTime = 3000,
}: ToastContainerProps) => {
  const [toastInfoList, setToastInfoList] = useState<ToastOption[]>([]);

  const [isSpaceHolding, setIsSpaceHolding] = useState(false);

  useEffect(() => {
    if (!isSpaceHolding && toastInfoList.length > 0) {
      const toastPropsListCleanTimer = setTimeout(
        () => setToastInfoList([]),
        holdTime + CLOSE_TOAST_ANIMATION_DURATION,
      );

      return () => clearTimeout(toastPropsListCleanTimer);
    }
  }, [isSpaceHolding, holdTime, toastInfoList]);

  useEffect(() => {
    if (toastOption?.message) {
      setToastInfoList((prevToastPropsList) => [
        ...prevToastPropsList,
        { ...toastOption, deleted: false },
      ]);
    }
  }, [toastOption]);

  return (
    <div
      className={cleanClassName(
        `${styles['toast-container']} ${
          styles[`float-direction-${floatDirection}`]
        }`,
      )}
    >
      <div
        onMouseEnter={() => setIsSpaceHolding(true)}
        onMouseLeave={() => {
          setIsSpaceHolding(false);
        }}
      >
        {toastInfoList.map((toastInfo, index) => (
          <Toast
            key={index}
            isSpaceHolding={isSpaceHolding}
            floatDirection={floatDirection}
            holdTime={holdTime}
            type={toastInfo.type}
          >
            {toastInfo.message}
          </Toast>
        ))}
      </div>
    </div>
  );
};
