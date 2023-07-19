import type { InputProps, InputWrapProps } from '@components/atoms';
import { Input } from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type { ValidateHandler, InputType } from '@hooks';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface TextboxProps
  extends Omit<InputProps, 'className' | 'size' | 'style'>,
    Pick<InputWrapProps, 'size' | 'className' | 'style'> {
  decoration?: React.ReactNode;
  type?: Exclude<InputType, 'button'>;
  validation?: ValidateHandler<TextboxProps['value']>;
}

export const Textbox = ({
  //* Textbox props
  decoration,
  validation,
  type,

  //* Input.Wrap props
  size,
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
    >
      <Input
        {...restInputProps}
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
      {decoration ? (
        <div className={cleanClassName(`${styles.decoration}`)}>
          {decoration}
        </div>
      ) : null}
    </Input.Wrap>
  );
};
