import { useCallback, useState, useContext, useEffect } from 'react';

import { ValidationContext } from '@contexts/ValidationContext';

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
  const validationContext = useContext(ValidationContext);

  const [validationMessage, setValidationMessage] = useState<string>();

  const validateValue = useCallback(
    (value: TValue) => setValidationMessage(validateHandler?.(value)),
    [validateHandler],
  );

  useEffect(() => {
    if (validationContext && id && validateHandler) {
      validationContext.set(id, () => {
        const validationMessage = validateHandler(value);
        setValidationMessage(validationMessage);
        return validationMessage;
      });

      return () => {
        validationContext.delete(id);
      };
    }
  }, [id, validateHandler, validationContext, value]);

  return {
    validationMessage,
    validateValue,
  };
};
