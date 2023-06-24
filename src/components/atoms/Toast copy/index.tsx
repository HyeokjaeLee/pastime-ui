import { useEffect, useState } from 'react';
import { XCircle, AlertTriangle, Info, CheckCircle } from 'react-feather';

import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface ToastProps {
  icon?: 'fail' | 'success' | 'warning' | 'info' | React.ReactNode;
  children?: React.ReactNode;
  isSpaceHolding?: boolean;
  floatDirection?: 'from-top' | 'from-bottom';
  holdTime?: number;
  className?: string;
  theme?: 'light' | 'dark';
}

type ToastState =
  | 'opening'
  | 'opened'
  | 'holding'
  | 'closing'
  | 'closed'
  | 'deleted';

export const CLOSE_TOAST_ANIMATION_DURATION = 500;

export const Toast = ({
  icon = 'success',
  children,
  isSpaceHolding = false,
  floatDirection = 'from-top',
  holdTime = 3000,
  className,
  theme = 'light',
}: ToastProps) => {
  const [toastState, setToastState] = useState<ToastState>('opening');

  useEffect(() => {
    switch (toastState) {
      case 'opening':
        setTimeout(() => setToastState('opened'));
        break;

      case 'opened': {
        const holdTimer = setTimeout(() => setToastState('closing'), holdTime);
        return () => clearTimeout(holdTimer);
      }

      case 'closing': {
        const closeTimer = setTimeout(
          () => setToastState('closed'),
          CLOSE_TOAST_ANIMATION_DURATION,
        );
        return () => clearTimeout(closeTimer);
      }
      default:
    }
  }, [toastState, holdTime]);

  useEffect(() => {
    if (toastState === 'closed' && !isSpaceHolding) setToastState('deleted');
  }, [isSpaceHolding, toastState]);

  const isToastHoldable = ['opened', 'holding', 'closing'].includes(toastState);

  const hasSpace =
    ['opened', 'holding'].includes(toastState) ||
    (['closing', 'closed'].includes(toastState) && isSpaceHolding);

  const isTypeIcon =
    typeof icon === 'string' &&
    ['fail', 'success', 'warning', 'info'].includes(icon);

  return toastState === 'deleted' ? (
    <></>
  ) : (
    <div
      className={cleanClassName(
        `${styles['toast-wrap']} ${
          hasSpace && styles['has-space']
        } ${className}`,
      )}
    >
      <div
        onMouseEnter={() => {
          if (isToastHoldable) setToastState('holding');
        }}
        onMouseLeave={() => {
          if (isToastHoldable) setToastState('opened');
        }}
        className={cleanClassName(
          `${styles.toast} ${styles[`float-direction-${floatDirection}`]} ${
            isTypeIcon && styles[icon]
          } ${styles[theme]} ${
            {
              opening: styles.invisible,
              opened: styles.opened,
              holding: styles.opened,
              closing: styles.closing,
              closed: styles.invisible,
            }[toastState]
          }`,
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
        <div className={`${styles['toast-contents-wrap']} ${styles[theme]}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
