import { useState } from 'react';

export type InputType =
  | 'text'
  | 'number'
  | 'large-number'
  | 'phone-number'
  | 'password'
  | 'button';

interface UseFormatInputValueParams {
  value?: string | number;
  type?: InputType;
  placeholder?: string;
}

export const useFormatInputValue = ({
  value,
  type,
  placeholder = '',
}: UseFormatInputValueParams) => {
  const [isFormattedValue, setIsFormattedValue] = useState(true);

  const formatValue = () => {
    if (type === 'button' && !value) return placeholder;

    if (value !== 0 && !value) return '';

    const valueString = String(value);

    if (!isFormattedValue) return valueString;

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
  };

  const convertChangeHandlerParam = (value: string) => {
    switch (type) {
      case 'number':
      case 'large-number': {
        const isValidNumber = value === '-' || !Number.isNaN(Number(value));
        return value && (isValidNumber ? value : null);
      }

      case 'phone-number': {
        let numberString = value.replace(/[^0-9]/g, '');
        if (numberString.length > 11) numberString = numberString.slice(0, 11);

        return value && numberString;
      }

      default:
        return value;
    }
  };

  return {
    formattedValue: formatValue(),
    convertChangeHandlerParam,
    displayFormattedValue: () => setIsFormattedValue(true),
    displayOriginalValue: () => setIsFormattedValue(false),
  };
};
