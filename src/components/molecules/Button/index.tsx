import { useDarkMode, useButtonDelay } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

type Theme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'clear'
  | 'ghost';

export interface ButtonProps extends HTMLTagProps<'button'> {
  delay?: number;
  size?: 'small' | 'medium' | 'large';
  theme?: Theme;
  icon?: React.ReactNode;
  iconDirection?: 'left' | 'right';
  shape?: 'sharp-corner' | 'rounded' | 'pill';
}

export const Button = ({
  //* Button props
  delay,
  size = 'medium',
  theme = 'primary',
  shape = 'rounded',
  iconDirection = 'left',
  icon,

  //* HTML button props
  type = 'button',
  children,
  disabled,
  className,
  ...restButtonProps
}: ButtonProps) => {
  const { isDelayButton, isDelaying } = useButtonDelay({
    delay,
    disabled,
  });

  const childrenType = (() => {
    if (icon && children) return 'both';
    return icon ? 'icon' : 'text';
  })();

  const isDisabled = disabled || isDelayButton;

  const { isDarkMode } = useDarkMode();

  return (
    <button
      {...restButtonProps}
      type={type}
      className={cleanClassName(
        `${isDelayButton ? styles['delayed-button'] : styles.button} ${
          styles[`shape-${shape}`]
        } ${styles[`size-${size}`]} ${
          styles[`icon-direction-${iconDirection}`]
        } ${styles[`children-type-${childrenType}`]} ${styles[theme]} ${
          isDarkMode && theme === 'clear' && styles.dark
        } ${className}`,
      )}
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
