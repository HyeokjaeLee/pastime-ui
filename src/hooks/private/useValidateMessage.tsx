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
  requiredValidationMessage: string | undefined;
}

export const useValidationMessage = <TValue,>({
  key,
  value,
  validateHandler,
  requiredValidationMessage,
}: UseValidationMessageParams<TValue>) => {
  const { validationMap } = useValidationContext();

  const [validationMessage, setValidationMessage] = useState<string>();

  const getValidationMessage: ValidateHandler<TValue> | null = useMemo(() => {
    if (!validateHandler && !requiredValidationMessage) return null;

    const getRequiredMessageToDisplay = (value: TValue) =>
      (((Array.isArray(value) && !value.length) || !value) &&
        requiredValidationMessage) ||
      null;

    if (validateHandler && isAsyncFunction(validateHandler)) {
      return async (value) => {
        const validationMessage =
          getRequiredMessageToDisplay(value) || (await validateHandler(value));

        return validationMessage;
      };
    }

    return (value) => {
      const validationMessage =
        getRequiredMessageToDisplay(value) || validateHandler?.(value);

      return validationMessage;
    };
  }, [requiredValidationMessage, validateHandler]);

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
