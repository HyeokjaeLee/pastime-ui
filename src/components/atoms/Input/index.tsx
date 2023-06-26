import {
  Ref,
  useState,
  useMemo,
  forwardRef,
  useContext,
  useEffect,
} from 'react';

import { InputContext } from '@contexts';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';
import { InputWrap } from './inputWrap';

export type { InputWrapProps } from './inputWrap';

export type InputType =
  | 'text'
  | 'number'
  | 'large-number'
  | 'phone-number'
  | 'password'
  | 'button';

export interface InputProps
  extends Omit<
    HTMLTagProps<'input'>,
    'type' | 'value' | 'disabled' | 'onChange' | 'width' | 'height'
  > {
  type?: InputType;
  value?: number | string;
  disabled?: boolean | 'readonly';
  onChange?: (value: string) => void;
  ref?: Ref<HTMLInputElement>;
}

export const Input = Object.assign(
  forwardRef(
    (
      {
        //* Input props
        type = 'text',
        value: parentValue,
        disabled = false,
        onChange,
        //* HTML input props
        placeholder = '',
        className,
        onFocus,
        onBlur,
        ref: _, // eslint-disable-line @typescript-eslint/no-unused-vars
        ...restInputProps
      },
      ref,
    ) => {
      const [isFocused, setIsFucused] = useState(false);

      const setReadonly = useContext(InputContext);
      const isReadonly = disabled === 'readonly';
      useEffect(() => setReadonly?.(isReadonly), [isReadonly, setReadonly]);

      const value = (() => {
        if (type === 'button' && !parentValue) return placeholder;

        if (parentValue !== 0 && !parentValue) return '';

        const valueString = String(parentValue);

        if (isFocused) return valueString;

        switch (type) {
          case 'number':
            return valueString;

          case 'large-number':
            return Number(valueString).toLocaleString();

          case 'phone-number':
            if (valueString.length === 10)
              return valueString.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            return valueString.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

          default:
            return valueString;
        }
      })();

      const convertChangeHandlerParam = useMemo((): ((
        value: string,
      ) => string | null) => {
        switch (type) {
          case 'number':
          case 'large-number':
            return (value) => {
              const isValidNumber =
                value === '-' || !Number.isNaN(Number(value));
              return value && (isValidNumber ? value : null);
            };

          case 'phone-number':
            return (value) => {
              let numberString = value.replace(/[^0-9]/g, '');
              if (numberString.length > 11)
                numberString = numberString.slice(0, 11);

              return value && numberString;
            };

          default:
            return (value) => value;
        }
      }, [type]);

      return (
        <input
          {...restInputProps}
          ref={ref}
          onFocus={(e) => {
            setIsFucused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFucused(false);
            onBlur?.(e);
          }}
          type={type}
          placeholder={placeholder}
          value={value}
          className={cleanClassName(
            `${styles.input} ${type === 'button' && styles.button} ${
              !parentValue && styles.empty
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
  ) as (props: InputProps) => JSX.Element,
  {
    Wrap: InputWrap,
  },
);
