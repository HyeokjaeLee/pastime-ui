import { useEffect } from 'react';

import { useInputContext } from '@contexts/InputContext';
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
    'type' | 'value' | 'disabled' | 'onChange' | 'width' | 'height'
  > {
  type?: InputType;
  value?: number | string;
  disabled?: boolean | 'readonly';
  onChange?: (value: string) => void;
}

export const Input = Object.assign(
  ({
    //* Input props
    type = 'text',
    value,
    disabled = false,
    onChange,

    //* HTML input props
    placeholder,
    className,
    onFocus,
    onBlur,
    ...restInputProps
  }: InputProps) => {
    const { setReadonly } = useInputContext();
    const isReadonly = disabled === 'readonly';

    useEffect(() => setReadonly(isReadonly), [isReadonly, setReadonly]);

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
        disabled={!!disabled}
        onChange={({ target: { value } }) => {
          const convertedValue = convertChangeHandlerParam(value);
          if (convertedValue !== null) onChange?.(convertedValue);
        }}
      />
    );
  },
  {
    Wrap: InputWrap,
  },
);
