import type { ValidationResult } from '../../contexts/ValidationContext';
export type ValidateHandler<TValue> = (value: TValue) => ValidationResult | Promise<ValidationResult>;
interface UseValidationMessageParams<TValue> {
    key: string | undefined;
    value: TValue;
    validateHandler: ValidateHandler<TValue> | undefined;
}
export declare const useValidationMessage: <TValue>({ key, value, validateHandler, }: UseValidationMessageParams<TValue>) => {
    validationMessage: string | undefined;
    validateOnChange: import("lodash-es").DebouncedFunc<(value: TValue) => Promise<void>> | undefined;
};
export {};
