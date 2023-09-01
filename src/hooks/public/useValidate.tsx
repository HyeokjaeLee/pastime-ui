import { ComponentType, useRef } from 'react';

import {
  ValidationContextProvider,
  useValidationContext,
} from '@contexts/ValidationContext';

interface ValidateResult {
  isValid: boolean;
  invalidElementIds: string[];
}

interface ValidateOptions {
  scroll?: boolean;
}

export const useValidate = () => {
  const { validationMap } = useValidationContext();

  const { current } = useRef(
    (() => {
      const scrollToFirstInvalid = (
        invalidElementIds: string[],
        enable = true,
      ) => {
        if (!enable || invalidElementIds.length > 0) return;

        const [firstInvalidElementId] = invalidElementIds;

        const firstInvalidElement = document.getElementById(
          firstInvalidElementId,
        );

        firstInvalidElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      };

      if (!validationMap) throw new Error('validationMap is not defined');

      return {
        validationMap,

        validate: (params?: ValidateOptions): ValidateResult => {
          const { scroll = false } = params || {};
          const invalidElementIds: string[] = [];

          validationMap.forEach((validate, key) => {
            const validationMessage = validate();
            if (validationMessage) invalidElementIds.push(key);
          });

          scrollToFirstInvalid(invalidElementIds, scroll);

          return {
            isValid: invalidElementIds.length === 0,
            invalidElementIds,
          };
        },

        validateAsync: async ({
          scroll,
        }: ValidateOptions): Promise<ValidateResult> => {
          const validatedelEmentIds: string[] = [];

          const validationMessages = await Promise.all(
            Array.from(validationMap).map(([key, validate]) => {
              validatedelEmentIds.push(key);

              return validate();
            }),
          );

          const invalidElementIds = validatedelEmentIds.filter(
            (_, index) => validationMessages[index],
          );

          scrollToFirstInvalid(invalidElementIds, scroll);

          return {
            isValid: invalidElementIds.length === 0,
            invalidElementIds,
          };
        },
      };
    })(),
  );

  return current;
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
