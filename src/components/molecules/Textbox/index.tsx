import type { InputProps, InputWrapProps } from '@components/atoms';
import { Input } from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type { ValidateHandler, InputType } from '@hooks';
import { InputDisabled, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface TextboxProps
  extends Omit<InputProps, 'className' | 'size' | 'style' | 'disabled'>,
    Pick<InputWrapProps, 'className' | 'style'> {
  children?: React.ReactNode;
  type?: Exclude<InputType, 'button'>;
  size?: Size;
  validation?: ValidateHandler<TextboxProps['value']>;
  disabled?: InputDisabled;
}

export const Textbox = ({
  //* Textbox props
  children,
  type,
  size,
  validation,
  disabled,

  //* Input.Wrap props
  className,
  style,

  //* Input props
  onChange,
  value,
  id,
  name,
  ...restInputProps
}: TextboxProps) => {
  const [inputValue, setInputValue] = useSubscribedState(value);
  const { validationMessage, validateValue } = useValidationMessage({
    validateHandler: validation,
    value: inputValue,
    id,
  });

  return (
    <Input.Wrap
      size={size}
      validationMessage={validationMessage}
      className={className}
      style={style}
      readonly={disabled === 'readonly'}
    >
      <Input
        {...restInputProps}
        disabled={!!disabled}
        type={type}
        value={inputValue}
        id={id}
        name={name}
        onChange={(value) => {
          validateValue(value);
          setInputValue(value);
          onChange?.(value);
        }}
      />
      {children ? (
        <div className={cleanClassName(`${styles.decoration}`)}>{children}</div>
      ) : null}
    </Input.Wrap>
  );
};
