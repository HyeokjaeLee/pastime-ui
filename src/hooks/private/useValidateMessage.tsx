import { useCallback, useState, useEffect } from 'react';

import { useValidationContext } from '@contexts/ValidationContext';

export type ValidateHandler<TValue> =
  | ((value: TValue) => string | undefined)
  | undefined;

interface UseValidationMessageParams<TValue> {
  id?: string;
  value: TValue;
  validateHandler: ValidateHandler<TValue>;
}

export const useValidationMessage = <TValue,>({
  id,
  value,
  validateHandler,
}: UseValidationMessageParams<TValue>) => {
  const { validationMap } = useValidationContext();

  const [validationMessage, setValidationMessage] = useState<string>();

  const validateValue = useCallback(
    (value: TValue) => setValidationMessage(validateHandler?.(value)),
    [validateHandler],
  );

  useEffect(() => {
    if (validationMap && id && validateHandler) {
      validationMap.set(id, () => {
        const validationMessage = validateHandler(value);
        setValidationMessage(validationMessage);
        return validationMessage;
      });

      return () => {
        validationMap.delete(id);
      };
    }
  }, [id, validateHandler, validationMap, value]);

  return {
    validationMessage,
    validateValue,
  };
};
