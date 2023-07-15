/// <reference types="react" />
type ValidationContextValue = Map<string, () => string | undefined>;
interface ValidationContextProviderProps {
    children: React.ReactNode;
}
export declare const ValidationContextProvider: ({ children, }: ValidationContextProviderProps) => JSX.Element;
export declare const useValidationContext: () => {
    validationMap: ValidationContextValue | undefined;
};
export {};
