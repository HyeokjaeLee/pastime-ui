import { useFormatInputValue } from '@hooks';
import type { InputType } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';
import { InputWrap } from './inputWrap';

export type { InputWrapProps } from './inputWrap';

export interface InputProps
  extends Omit<
    HTMLTagProps<'input'>,
    'type' | 'value' | 'width' | 'height' | 'size'
  > {
  type?: InputType;
  value?: number | string;
}

export const Input = Object.assign(
  ({
    //* Input props
    type = 'text',
    value,

    //* HTML input props
    placeholder,
    className,
    onFocus,
    onBlur,
    onChange,
    ...restInputProps
  }: InputProps) => {
    const {
      formattedValue,
      displayFormattedValue,
      displayOriginalValue,
      convertChangeHandlerParam,
    } = useFormatInputValue({
      type,
      value,
      placeholder,
    });

    return (
      <input
        {...restInputProps}
        onFocus={(e) => {
          displayOriginalValue();
          onFocus?.(e);
        }}
        onBlur={(e) => {
          displayFormattedValue();
          onBlur?.(e);
        }}
        type={type}
        placeholder={placeholder}
        value={formattedValue}
        className={cleanClassName(
          `${styles.input} ${type === 'button' && styles.button} ${
            !value && styles.empty
          } ${className}`,
        )}
        onChange={(event) => {
          const { target } = event;
          const convertedValue = convertChangeHandlerParam(target.value);

          if (convertedValue !== null) {
            target.value = convertedValue;
            onChange?.(event);
          }
        }}
      />
    );
  },
  {
    Wrap: InputWrap,
  },
);
