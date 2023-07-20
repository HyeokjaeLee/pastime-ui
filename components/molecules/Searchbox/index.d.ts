/// <reference types="react" />
import type { ValidateHandler } from '@hooks';
import { InputDisabled } from '@types';
import type { InputProps, InputWrapProps, SelectProps } from '../../atoms';
export interface SearchboxProps extends Omit<InputProps, 'size' | 'value' | 'onChange' | 'type' | 'onSelect' | 'className' | 'style' | 'disabled'>, Pick<InputWrapProps, 'size' | 'reversed' | 'style' | 'className'>, Pick<SelectProps<string, false>, 'float'> {
    filterByKeyword?: boolean;
    validation?: ValidateHandler<SearchboxProps['value']>;
    options?: string[];
    value?: string;
    onChange?: (value: string) => void;
    onSelect?: (value: string) => {
        preventDefault?: boolean;
    } | void;
    children?: React.ReactNode;
    disabled?: InputDisabled;
}
export declare const Searchbox: ({ filterByKeyword, validation, options, value, onSelect, children, disabled, size, className, style, reversed, float, onChange, onClick, onFocus, id, name, onBlur, ...restInputProps }: SearchboxProps) => JSX.Element;
