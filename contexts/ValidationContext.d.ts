/// <reference types="react" />
export type ValidationResult = string | undefined;
type ValidationContextValue = Map<string, () => ValidationResult | Promise<ValidationResult>>;
interface ValidationContextProviderProps {
    children: React.ReactNode;
}
export declare const ValidationContextProvider: ({ children, }: ValidationContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useValidationContext: () => {
    validationMap: ValidationContextValue | undefined;
};
export {};
