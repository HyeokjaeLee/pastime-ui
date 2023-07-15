export type ValidateHandler<TValue> = ((value: TValue) => string | undefined) | undefined;
interface UseValidationMessageParams<TValue> {
    id?: string;
    value: TValue;
    validateHandler: ValidateHandler<TValue>;
}
export declare const useValidationMessage: <TValue>({ id, value, validateHandler, }: UseValidationMessageParams<TValue>) => {
    validationMessage: string | undefined;
    validateValue: (value: TValue) => void;
};
export {};
