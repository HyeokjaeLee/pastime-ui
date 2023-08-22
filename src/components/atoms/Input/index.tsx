import { forwardRef } from 'react';

import { useFormatInputValue } from '@hooks';
import type { InputType } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';
import { InputWrap } from './inputWrap';

export type { InputWrapProps } from './inputWrap';

export interface InputChangeEvent {
  value: string;
}

export interface InputProps
  extends Omit<
    HTMLTagProps<'input'>,
    'type' | 'value' | 'width' | 'height' | 'size' | 'onChange'
  > {
  type?: InputType;
  value?: number | string;
  onChange?: (event: InputChangeEvent) => void;
  ref?: React.ForwardedRef<HTMLInputElement>;
}

export const Input = Object.assign(
  forwardRef<HTMLInputElement, Omit<InputProps, 'ref'>>(
    (
      {
        //* Input props
        type = 'text',
        value = '',
        onChange,

        //* HTML input props
        placeholder,
        className,
        onFocus,
        onBlur,
        onInvalid,
        ...restInputProps
      },
      ref,
    ) => {
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
          ref={ref}
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
          onInvalid={(e) => {
            e.preventDefault();
            onInvalid?.(e);
          }}
          onChange={({ target: { value } }) => {
            const convertedValue = convertChangeHandlerParam(value);

            if (convertedValue !== null) onChange?.({ value });
          }}
        />
      );
    },
  ),
  {
    Wrap: InputWrap,
  },
);
