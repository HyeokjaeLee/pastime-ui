import { useContext, useState, useCallback } from 'react';

import { ValidationContext } from '@contexts';

interface ValidateResult {
  isValid: boolean;
  invalidElementIds: string[];
}

interface ValidateOptions {
  scrollToFirstInvalid?: boolean;
}

export const useValidate = () => {
  const validationContext = useContext(ValidationContext);
  const [data, setData] = useState<ValidateResult>();

  const validate = useCallback(
    ({ scrollToFirstInvalid }: ValidateOptions) => {
      const validateResult: ValidateResult = {
        isValid: true,
        invalidElementIds: [],
      };

      validationContext?.forEach((validateValue, id) => {
        if (validateValue()) {
          validateResult.isValid = false;
          validateResult.invalidElementIds.push(id);
        }
      });

      if (scrollToFirstInvalid && !validateResult.isValid) {
        const [firstInvalidElementId] = validateResult.invalidElementIds;

        const firstInvalidElement = document.getElementById(
          firstInvalidElementId,
        );

        firstInvalidElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }

      setData(validateResult);
    },
    [validationContext],
  );

  return {
    ...data,
    validate,
  };
};
