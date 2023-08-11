import type { InputProps, InputWrapProps } from '@components/atoms';
import { Input } from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type { ValidateHandler, InputType } from '@hooks';
import { InnerStateChangeEventHandler, InputDisabled, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface TextboxProps
  extends Omit<
      InputProps,
      'className' | 'size' | 'style' | 'disabled' | 'value' | 'onChange'
    >,
    Pick<InputWrapProps, 'className' | 'style' | 'reversed' | 'label'> {
  value?: string;
  onChange?: InnerStateChangeEventHandler<string>;
  validation?: ValidateHandler<TextboxProps['value']>;
  children?: React.ReactNode;
  type?: Exclude<InputType, 'button'>;
  size?: Size;
  disabled?: InputDisabled;
}

export const Textbox = ({
  //* Textbox props
  value,
  onChange,
  validation,
  children,
  type,
  size,
  disabled,

  //* Input.Wrap props
  className,
  style,
  reversed,
  label,

  //* Input props
  id,
  name,
  ...restInputProps
}: TextboxProps) => {
  const [inputValue, setInputValue, preventInnerStateChange] =
    useSubscribedState(value);
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
      reversed={reversed}
      label={label}
    >
      <Input
        {...restInputProps}
        disabled={!!disabled}
        type={type}
        value={inputValue}
        id={id}
        name={name}
        onChange={({ value }) => {
          onChange?.({
            value,
            preventInnerStateChange,
          });
          setInputValue(value);
          validateValue(value);
        }}
      />
      {children ? (
        <div className={cleanClassName(`${styles.decoration}`)}>{children}</div>
      ) : null}
    </Input.Wrap>
  );
};
