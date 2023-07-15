export type InputType = 'text' | 'number' | 'large-number' | 'phone-number' | 'password' | 'button';
interface UseFormatInputValueParams {
    value?: string | number;
    type?: InputType;
    placeholder?: string;
}
export declare const useFormatInputValue: ({ value, type, placeholder, }: UseFormatInputValueParams) => {
    formattedValue: string;
    convertChangeHandlerParam: (value: string) => string | null;
    displayFormattedValue: () => void;
    displayOriginalValue: () => void;
};
export {};
