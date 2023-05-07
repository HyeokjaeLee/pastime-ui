import { createContext } from 'react';

type ValidationStoreData = Map<string, () => string | undefined>;

export const ValidationContext = createContext<ValidationStoreData | null>(
  null,
);

export const createValidationStore = () => {
  const data: ValidationStoreData = new Map();
  return Object.assign(data, {
    provideValidationStore: (children: React.ReactNode) => (
      <ValidationContext.Provider value={data}>
        {children}
      </ValidationContext.Provider>
    ),
    validateAll: () => {
      const result = {
        isValid: true,
        invalidKeys: [] as string[],
      };
      data.forEach((validation, key) => {
        if (validation()) {
          result.isValid = false;
          result.invalidKeys.push(key);
        }
      });
      return result;
    },
  });
};

export type ValidationStore = ReturnType<typeof createValidationStore>;
