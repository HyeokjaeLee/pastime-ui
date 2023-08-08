import { useSubscribedState } from '@hooks';
import { HTMLTagProps, InnerStateChangeEventHandler } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface SwitchProps
  extends Pick<HTMLTagProps<'div'>, 'className' | 'style'>,
    Omit<
      HTMLTagProps<'input'>,
      'onChange' | 'size' | 'type' | 'style' | 'checked' | 'value'
    > {
  size?: 'small' | 'medium' | 'large';
  value?: boolean;
  onChange?: InnerStateChangeEventHandler<boolean>;
}

export const Switch = ({
  //* Switch props
  size = 'medium',
  onChange,
  value = false,

  //* HTML div props
  className,
  style,

  //* HTML input props
  ...restInputProps
}: SwitchProps) => {
  const [turned, setTurned, preventInnerStateChange] =
    useSubscribedState(value);

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
        onChange={({ target: { checked: value } }) => {
          onChange?.({
            value,
            preventInnerStateChange,
          });

          setTurned(value);
        }}
      />
    </div>
  );
};
