import type { Ref } from 'react';
import { useState, useMemo, forwardRef } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export interface InputProps
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'placeholder' | 'onFocus' | 'id' | 'onClick' | 'style'
  > {
  type?:
    | 'text'
    | 'number'
    | 'large-number'
    | 'phone-number'
    | 'password'
    | 'button';
  value?: number | string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  ref?: Ref<HTMLInputElement>;
  name?: string;
  className?: string;
}

export const Input: (props: InputProps) => JSX.Element | null = forwardRef(
  (
    {
      type = 'text',
      placeholder = '',
      disabled = false,
      value: parentValue,
      onChange,
      onClick,
      id,
      onFocus,
      name,
      className,
      style,
    },
    ref,
  ) => {
    const [isFocused, setIsFucused] = useState(false);
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
            const isValidNumber = value === '-' || !Number.isNaN(Number(value));
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
        id={id}
        name={name}
        ref={ref}
        onFocus={(e) => {
          setIsFucused(true);
          onFocus?.(e);
        }}
        onBlur={() => setIsFucused(false)}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        value={value}
        style={style}
        className={cleanClassName(
          `${styles.input} ${type === 'button' && styles.button} ${
            parentValue || styles.empty
          } ${styles['default-width']} ${className}`,
        )}
        disabled={!!disabled}
        onChange={({ target: { value } }) => {
          const convertedValue = convertChangeHandlerParam(value);

          if (convertedValue !== null) onChange?.(convertedValue);
        }}
      />
    );
  },
);
