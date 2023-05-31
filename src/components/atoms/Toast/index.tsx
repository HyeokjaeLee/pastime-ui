import { useEffect, useState, useRef } from 'react';
import type { CSSProperties } from 'react';

import styles from './index.module.scss';
import { useOpeningState } from '../../../hooks';
import { cleanClassName } from '../../../utils';

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
  const [openingState, setOpeningState] = useOpeningState(true, 500);
  const [isLooking, setIsLooking] = useState(false);

  useEffect(() => {
    if (!isLooking && openingState === true) {
      const closingTimer = setTimeout(
        () => setOpeningState('closing'),
        holdingTime,
      );
      return () => clearTimeout(closingTimer);
    }
  }, [holdingTime, setOpeningState, openingState, isLooking]);

  const isOpened = openingState === true;
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>();

  useEffect(() => {
    const height = ref.current?.clientHeight;
    if (height) {
      setStyle({
        height,
        margin: '0.7em 0',
      });
    }
  }, [ref]);

  return openingState ? (
    <div
      ref={ref}
      style={
        isOpened
          ? style
          : {
              margin: 0,
              height: 0,
            }
      }
      className={cleanClassName(`${styles['toast-wrap']} ${className}`)}
      onMouseEnter={() => setIsLooking(true)}
      onMouseLeave={() => setIsLooking(false)}
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
