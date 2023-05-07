import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

type HtmlButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = Pick<
  HtmlButtonProps,
  'children' | 'disabled' | 'type'
> & {
  delay?: number;
  size?: 'small' | 'medium' | 'large';
  theme?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'text-dark'
    | 'text-light';
  icon?: ReactNode;
  iconDirection?: 'left' | 'right';
  shape?: 'round' | 'default';
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({
  delay,
  type = 'button',
  children,
  size = 'medium',
  theme = 'primary',
  onClick,
  disabled,
  shape = 'default',
  iconDirection = 'left',
  icon,
  className,
}: ButtonProps) => {
  const [delayState, setDelayState] = useState<'before' | 'delaying' | 'after'>(
    'after',
  );

  const childrenType = useMemo(() => {
    if (icon && children) return 'both';

    return icon ? 'icon' : 'text';
  }, [icon, children]);

  useEffect(() => {
    if (!disabled && delay) {
      setDelayState('before');
      setTimeout(() => setDelayState('delaying'));
      setTimeout(() => setDelayState('after'), delay);
    }
  }, [delay, disabled]);

  const isDelaying = delayState === 'delaying';
  const isDelayButton = delayState === 'before' || isDelaying;
  const isDisabled = disabled || isDelayButton;

  return (
    <button
      type={type}
      className={cleanClassName(
        `${isDelayButton ? styles['delayed-button'] : styles.button} ${
          styles[`shape-${shape}`]
        } ${styles[`size-${size}`]} ${
          styles[`icon-direction-${iconDirection}`]
        } ${styles[`children-type-${childrenType}`]} ${
          styles[theme]
        } ${className}`,
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {delay && isDelayButton ? (
        <div
          className={`${styles['delay-bar']} ${isDelaying && styles.delaying}`}
          style={{ transition: `transform ${delay / 1000}s linear` }}
        />
      ) : null}
      {children && <div className={styles['button-content']}>{children}</div>}
      {icon ? (
        <div className={`${styles['button-content']} ${styles.icon}`}>
          {icon}
        </div>
      ) : null}
    </button>
  );
};
