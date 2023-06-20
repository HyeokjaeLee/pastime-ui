import { useRef } from 'react';

import { cleanClassName } from '@utils';

import { useDynamicHeight } from './hooks/useDynamicHeight';
import { useToastTimer } from './hooks/useToastTimer';
import styles from './index.module.scss';

export interface ToastProps {
  children?: React.ReactNode;
  float?: 'from-top' | 'from-bottom';
  className?: string;
  icon?: React.ReactNode;
  theme?: 'light' | 'dark';
  holdingTime?: number;
}

export const Toast = ({
  children,
  float = 'from-top',
  className,
  icon,
  theme = 'light',
  holdingTime = 5000,
}: ToastProps) => {
  const { isExisting, isOpened, holdToast, unholdToast } =
    useToastTimer(holdingTime);

  const ref = useRef<HTMLDivElement>(null);

  const dynamicHeightStyle = useDynamicHeight(ref, isOpened);

  return isExisting ? (
    <div
      ref={ref}
      style={dynamicHeightStyle}
      className={cleanClassName(`${styles['toast-wrap']} ${className}`)}
      onMouseEnter={holdToast}
      onMouseLeave={unholdToast}
    >
      <div
        className={cleanClassName(
          `${styles.toast} ${styles[`float-direction-${float}`]} ${
            styles[theme]
          } ${isOpened ? styles.opened : styles.closing}`,
        )}
      >
        {icon}
        <div className={styles['toast-contents-wrap']}>{children}</div>
      </div>
    </div>
  ) : (
    <></>
  );
};
