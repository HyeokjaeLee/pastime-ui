import { debounce } from 'lodash-es';

import { useState, useEffect, useMemo } from 'react';

import { useValidationContext } from '@contexts/ValidationContext';
import type { ValidationResult } from '@contexts/ValidationContext';
import { isAsyncFunction, isSyncFunction } from '@utils';

export type ValidateHandler<TValue> = (
  value: TValue,
) => ValidationResult | Promise<ValidationResult>;

interface UseValidationMessageParams<TValue> {
  key: string | undefined;
  value: TValue;
  validateHandler: ValidateHandler<TValue> | undefined;
}

export const useValidationMessage = <TValue,>({
  key,
  value,
  validateHandler,
}: UseValidationMessageParams<TValue>) => {
  const { validationMap } = useValidationContext();

  const [validationMessage, setValidationMessage] = useState<string>();

  const getValidationMessage: ValidateHandler<TValue> | null = useMemo(() => {
    if (!validateHandler) return null;

    return isAsyncFunction(validateHandler)
      ? async (value) => {
          const validationMessage = await validateHandler(value);

          return validationMessage;
        }
      : (value) => validateHandler?.(value);
  }, [validateHandler]);

  useEffect(() => {
    if (validationMap && key && getValidationMessage) {
      const setAndReturnValidationMessage = (
        validationMessage: ValidationResult,
      ) => {
        setValidationMessage(validationMessage);
        return validationMessage;
      };

      validationMap.set(
        key,
        isSyncFunction(getValidationMessage)
          ? () => setAndReturnValidationMessage(getValidationMessage(value))
          : async () =>
              setAndReturnValidationMessage(await getValidationMessage(value)),
      );

      return () => {
        validationMap.delete(key);
      };
    }
  }, [getValidationMessage, key, validationMap, value]);

  const validateOnChange = useMemo(() => {
    if (getValidationMessage) {
      return debounce(
        async (value: TValue) =>
          setValidationMessage(await getValidationMessage(value)),
        100,
      );
    }
  }, [getValidationMessage]);

  return {
    validationMessage,
    validateOnChange,
  };
};
