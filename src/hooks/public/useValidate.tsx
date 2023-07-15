import { useCallback, ComponentType } from 'react';

import {
  ValidationContextProvider,
  useValidationContext,
} from '@contexts/ValidationContext';

interface ValidateResult {
  isValid: boolean;
  invalidElementIds: string[];
}

interface ValidateOptions {
  scrollToFirstInvalid?: boolean;
}

export const useValidate = () => {
  const { validationMap } = useValidationContext();

  const validate = useCallback(
    ({ scrollToFirstInvalid }: ValidateOptions) => {
      const validateResult: ValidateResult = {
        isValid: true,
        invalidElementIds: [],
      };

      if (!validationMap) throw new Error('validationMap is not defined');

      validationMap.forEach((validateValue, id) => {
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

      return validateResult;
    },
    [validationMap],
  );

  return {
    validate,
  };
};

export const validationObserver =
  <T extends object>(Component: ComponentType<T>) =>
  // eslint-disable-next-line react/function-component-definition
  (props: T) =>
    (
      <ValidationContextProvider>
        <Component {...props} />
      </ValidationContextProvider>
    );
