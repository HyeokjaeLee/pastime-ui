import { ComponentType } from 'react';
interface ValidateResult {
    isValid: boolean;
    invalidElementIds: string[];
}
interface ValidateOptions {
    scroll?: boolean;
}
export declare const useValidate: () => {
    validationMap: Map<string, () => import('../../contexts/ValidationContext').ValidationResult | Promise<import('../../contexts/ValidationContext').ValidationResult>>;
    validate: ({ scroll }: ValidateOptions) => ValidateResult;
    validateAsync: ({ scroll, }: ValidateOptions) => Promise<ValidateResult>;
};
export declare const validationObserver: <T extends object>(Component: ComponentType<T>) => (props: T) => import("react/jsx-runtime").JSX.Element;
export {};
