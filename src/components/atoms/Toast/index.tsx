import { useEffect, useState, useRef } from 'react';
import type { CSSProperties, MouseEventHandler } from 'react';

import styles from './index.module.scss';
import { useClosingState } from '../../../hooks';
import { cleanClassName } from '../../../utils';

export interface ToastProps {
  children?: React.ReactNode;
  floatDirection?: 'from-top' | 'from-bottom';
  opened?: boolean;
  className?: string;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export const Toast = ({
  children,
  opened = true,
  floatDirection = 'from-top',
  className,
  onMouseEnter,
  onMouseLeave,
}: ToastProps) => {
  const [openStatus] = useClosingState(opened, 500);
  const isOpened = openStatus === true;
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>();

  useEffect(() => {
    const height = ref.current?.clientHeight;
    if (height) {
      setStyle({
        height,
      });
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={
        isOpened
          ? style
          : {
              height: 0,
            }
      }
      className={cleanClassName(
        `${styles['toast-wrap']} ${
          isOpened && styles['has-space']
        } ${className}`,
      )}
    >
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cleanClassName(
          `${styles.toast} ${styles[`float-direction-${floatDirection}`]} ${
            isOpened ? styles.opened : styles.closing
          }`,
        )}
      >
        <>icon</>
        <div className={styles['toast-contents-wrap']}>{children}</div>
      </div>
    </div>
  );
};
