import { useSubscribedState } from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface SwitchProps
  extends Pick<HTMLTagProps<'div'>, 'className' | 'style'>,
    Omit<
      HTMLTagProps<'input'>,
      'value' | 'onChange' | 'size' | 'checked' | 'type' | 'style'
    > {
  size?: 'small' | 'medium' | 'large';
  onChange?: (checked: boolean) => void;
  value?: boolean;
}

export const Switch = ({
  //* Switch props
  size = 'medium',
  value = false,
  onChange,

  //* HTML div props
  className,
  style,

  //* HTML input props
  ...restInputProps
}: SwitchProps) => {
  const [turned, setTurned, disableSetter] = useSubscribedState(() => value);

  const sizeClassName = styles[`size-${size}`];
  const turnedClassName = turned ? styles.on : styles.off;

  return (
    <div
      style={style}
      className={cleanClassName(
        `${styles['switch-content']} ${sizeClassName} ${turnedClassName} ${className}`,
      )}
    >
      <div
        className={`${styles['switch-ball']} ${sizeClassName} ${turnedClassName}`}
      />
      <input
        {...restInputProps}
        type="checkbox"
        className={styles['switch-input']}
        checked={turned}
        onChange={(event) => {
          const newEvent = {
            ...event,
          };
          disableSetter();

          setTurned(checked);
          onChange?.(checked);
        }}
      />
    </div>
  );
};
