import React, { useEffect } from 'react';
import { XCircle, AlertTriangle, Info, CheckCircle } from 'react-feather';

import type { ToastType } from '@contexts/ToastContext';
import {
  useToastState,
  TOAST_STATE,
  useToastSize,
  useDarkMode,
  FixedDarkMode,
} from '@hooks';
import { cleanClassName } from '@utils';

import styles from './Toast.module.scss';

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

export const Toast = ({
  //* Toast props
  icon = 'success',
  children,
  space = false,
  floatDirection = 'from-top',
  holdTime = 5000,
  onDelete,
  fixedDarkMode,
  className,
}: ToastProps) => {
  const { toastState, hasSpace, holdToast, unholdToast } = useToastState({
    holdTime,
    space,
  });

  const { isDarkMode } = useDarkMode(fixedDarkMode);

  useEffect(() => {
    if (toastState === TOAST_STATE.DELETED) onDelete?.();
  }, [toastState, onDelete]);

  const { toastContentRef, height, contentsWidth } = useToastSize(hasSpace);

  return (
    <div
      style={height}
      onMouseEnter={holdToast}
      onMouseLeave={unholdToast}
      className={cleanClassName(
        `${styles.toast} ${styles[`float-direction-${floatDirection}`]} ${
          isDarkMode && styles.dark
        } ${hasSpace && styles['has-space']} ${styles[toastState]} ${
          !contentsWidth && styles['temp-width']
        } ${className}`,
      )}
    >
      <div className={cleanClassName(`${styles['icon-wrap']} ${styles[icon]}`)}>
        {
          {
            success: <CheckCircle />,
            fail: <XCircle />,
            warning: <AlertTriangle />,
            info: <Info />,
          }[icon]
        }
      </div>
      <div
        ref={toastContentRef}
        className={styles['toast-contents-wrap']}
        style={contentsWidth}
      >
        {children}
      </div>
    </div>
  );
};
