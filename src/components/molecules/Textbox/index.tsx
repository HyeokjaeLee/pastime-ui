import type { InputProps, InputWrapProps } from '@components/atoms';
import { Input } from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type { ValidateHandler, InputType, FixedDarkMode } from '@hooks';
import { InnerStateChangeEventHandler, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface TextboxProps
  extends Omit<
      InputProps,
      'className' | 'size' | 'style' | 'value' | 'onChange'
    >,
    Pick<InputWrapProps, 'className' | 'style' | 'reversed' | 'label'> {
  value?: string;
  onChange?: InnerStateChangeEventHandler<string>;
  validation?: ValidateHandler<TextboxProps['value']>;
  children?: React.ReactNode;
  type?: Exclude<InputType, 'button'>;
  size?: Size;
  fixedDarkMode?: FixedDarkMode;
}

export const Textbox = ({
  //* Textbox props
  value,
  onChange,
  validation,
  children,
  type,
  size,
  fixedDarkMode,

  //* Input.Wrap props
  className,
  style,
  reversed,
  label,

  //* Input props
  ...restInputProps
}: TextboxProps) => {
  const [inputValue, setInputValue, preventInnerStateChange] =
    useSubscribedState(value);

  const { id } = restInputProps;

  const { validationMessage, validateOnChange } = useValidationMessage({
    validateHandler: validation,
    value: inputValue,
    key: id,
  });

  return (
    <Input.Wrap
      size={size}
      validationMessage={validationMessage}
      className={className}
      style={style}
      reversed={reversed}
      label={label}
      fixedDarkMode={fixedDarkMode}
    >
      <Input
        {...restInputProps}
        type={type}
        value={inputValue}
        onChange={({ value }) => {
          onChange?.({
            value,
            preventInnerStateChange,
          });
          setInputValue(value);
          validateOnChange?.(value);
        }}
      />
      {children ? (
        <div className={cleanClassName(`${styles.decoration}`)}>{children}</div>
      ) : null}
    </Input.Wrap>
  );
};
