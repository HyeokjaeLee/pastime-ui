import { createContext, useContext, useRef } from 'react';

export type ValidationResult = string | undefined;

type ValidationContextValue = Map<
  string,
  () => ValidationResult | Promise<ValidationResult>
>;

const ValidationContext = createContext<ValidationContextValue | undefined>(
  undefined,
);

interface ValidationContextProviderProps {
  children: React.ReactNode;
}

export const ValidationContextProvider = ({
  children,
}: ValidationContextProviderProps) => {
  const { current } = useRef(new Map());

  return (
    <ValidationContext.Provider value={current}>
      {children}
    </ValidationContext.Provider>
  );
};

export const useValidationContext = () => {
  const context = useContext(ValidationContext);

  return {
    validationMap: context,
  };
};
