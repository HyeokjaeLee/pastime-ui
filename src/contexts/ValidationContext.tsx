import { createContext, useContext, useRef } from 'react';

type ValidationContextValue = Map<string, () => string | undefined>;

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
