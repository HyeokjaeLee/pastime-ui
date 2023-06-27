import { useEffect } from 'react';
import { XCircle, AlertTriangle, Info, CheckCircle } from 'react-feather';

import type { ToastType } from '@contexts';
import {
  useToastState,
  TOAST_STATE,
  useToastDynamicHeight,
  useDarkMode,
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
}

export const Toast = ({
  icon = 'success',
  children,
  space = false,
  floatDirection = 'from-top',
  holdTime = 5000,
  onDelete,
}: ToastProps) => {
  const { toastState, hasSpace, holdToast, unholdToast } = useToastState({
    holdTime,
    space,
  });

  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (toastState === TOAST_STATE.DELETED) onDelete?.();
  }, [toastState, onDelete]);

  const isTypeIcon =
    typeof icon === 'string' &&
    ['fail', 'success', 'warning', 'info'].includes(icon);

  const { dynamicHeight, toastContentRef } = useToastDynamicHeight(hasSpace);

  return (
    <div
      style={dynamicHeight}
      onMouseEnter={holdToast}
      onMouseLeave={unholdToast}
      className={cleanClassName(
        `${styles.toast} ${styles[`float-direction-${floatDirection}`]} ${
          isDarkMode && styles.dark
        } ${hasSpace && styles['has-space']} ${styles[toastState]}`,
      )}
    >
      <div
        className={cleanClassName(
          `${styles['icon-wrap']} ${isTypeIcon && styles[icon]}`,
        )}
      >
        {isTypeIcon
          ? {
              success: <CheckCircle />,
              fail: <XCircle />,
              warning: <AlertTriangle />,
              info: <Info />,
            }[icon]
          : icon}
      </div>
      <div ref={toastContentRef} className={styles['toast-contents-wrap']}>
        {children}
      </div>
    </div>
  );
};
