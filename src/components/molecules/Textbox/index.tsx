import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Input } from '../../atoms';

import type { Validation } from '../../../hooks';
import type { InputProps, InputWrapProps, InputType } from '../../atoms';

export interface TextboxProps
  extends Pick<
      InputProps,
      | 'value'
      | 'id'
      | 'onChange'
      | 'disabled'
      | 'placeholder'
      | 'onFocus'
      | 'onClick'
    >,
    Pick<InputWrapProps, 'size' | 'theme' | 'className'> {
  unit?: React.ReactNode;
  type?: Exclude<InputType, 'button'>;
  validation?: Validation<TextboxProps['value']>;
}

export const Textbox = ({
  value: parentValue,
  unit,
  onChange,
  size,
  id,
  validation,
  className,
  disabled,
  theme = 'light',
  type,
  onClick,
  onFocus,
  placeholder,
}: TextboxProps) => {
  const [value, setValue] = useSubscribedState(parentValue);
  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    id,
  );

  return (
    <Input.Container validationMessage={validationMessage}>
      <Input.Wrap size={size} theme={theme} className={className}>
        <Input
          onClick={onClick}
          onFocus={onFocus}
          placeholder={placeholder}
          type={type}
          disabled={!!disabled}
          value={value}
          id={id}
          onChange={(value) => {
            checkValidation?.(value);
            setValue(value);
            onChange?.(value);
          }}
        />
        {typeof unit === 'string' ? (
          <div className={cleanClassName(`${styles.unit} ${styles[theme]}`)}>
            {unit}
          </div>
        ) : (
          unit
        )}
      </Input.Wrap>
    </Input.Container>
  );
};
