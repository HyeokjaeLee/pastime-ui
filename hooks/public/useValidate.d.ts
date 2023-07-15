import { ComponentType } from 'react';
interface ValidateResult {
    isValid: boolean;
    invalidElementIds: string[];
}
interface ValidateOptions {
    scrollToFirstInvalid?: boolean;
}
export declare const useValidate: () => {
    validate: ({ scrollToFirstInvalid }: ValidateOptions) => ValidateResult;
};
export declare const validationObserver: <T extends object>(Component: ComponentType<T>) => (props: T) => JSX.Element;
export {};
