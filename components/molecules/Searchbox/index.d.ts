/// <reference types="react" />
import type { ValidateHandler } from '@hooks';
import type { InputProps, InputWrapProps, SelectProps } from '../../atoms';
export interface SearchboxProps extends Omit<InputProps, 'size' | 'value' | 'onChange' | 'type' | 'onSelect'>, Pick<InputWrapProps, 'size'>, Pick<SelectProps<string, false>, 'float'> {
    filterByKeyword?: boolean;
    validation?: ValidateHandler<SearchboxProps['value']>;
    options?: string[];
    value?: string;
    onChange?: (value: string) => void;
    onSelect?: (value: string) => {
        preventDefault?: boolean;
    } | void;
}
export declare const Searchbox: ({ filterByKeyword, validation, options, value, onSelect, className, style, size, float, onChange, onClick, onFocus, id, name, onBlur, ...restInputProps }: SearchboxProps) => JSX.Element;
