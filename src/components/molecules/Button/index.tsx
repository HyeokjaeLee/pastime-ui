import { useDarkMode, useButtonDelay, useButtonLoading } from '@hooks';
import type { ButtonIconDirection } from '@hooks';
import type { HTMLTagProps, Size } from '@types';
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
  size?: Size;
  theme?: Theme;
  icon?: React.ReactNode;
  iconDirection?: ButtonIconDirection;
  shape?: 'sharp-corner' | 'rounded' | 'pill';
  loading?: boolean;
}

export const Button = ({
  //* Button props
  delay,
  size = 'medium',
  theme = 'primary',
  shape = 'rounded',
  iconDirection = 'left',
  icon,
  loading = false,

  //* HTML button props
  type = 'button',
  children,
  disabled,
  className,
  onClick,
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

  const { leftLoadingSpinner, rightLoadingSpinner, iconLoadingSpinner } =
    useButtonLoading({
      loading,
      childrenType,
      iconDirection,
    });

  return (
    <button
      {...restButtonProps}
      onClick={loading ? undefined : onClick}
      type={loading && type === 'submit' ? 'button' : type}
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
      {leftLoadingSpinner}
      {children && <div className={styles['button-content']}>{children}</div>}
      {icon
        ? iconLoadingSpinner ?? (
            <div className={`${styles['button-content']} ${styles.icon}`}>
              {icon}
            </div>
          )
        : null}
      {rightLoadingSpinner}
    </button>
  );
};
