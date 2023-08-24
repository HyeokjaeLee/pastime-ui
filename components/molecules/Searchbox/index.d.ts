/// <reference types="react" />
import type { InputProps, InputWrapProps, SelectProps } from '../../atoms';
import type { ValidateHandler, UseFilteredSearchOptionsParams } from '../../../hooks';
import { InnerStateChangeEventHandler, Size } from '../../../types';
export interface SearchboxProps extends Omit<InputProps, 'value' | 'onChange' | 'type' | 'onSelect' | 'className' | 'style'>, Pick<InputWrapProps, 'reversed' | 'style' | 'className' | 'label' | 'fixedDarkMode'>, Pick<SelectProps<string, false, false>, 'float'>, Pick<UseFilteredSearchOptionsParams, 'filterByKeyword' | 'options'> {
    size?: Size;
    validation?: ValidateHandler<SearchboxProps['value']>;
    value?: string;
    onChange?: InnerStateChangeEventHandler<string>;
    onSelect?: (event: {
        value: string;
        prventDefault: () => void;
    }) => void;
    children?: React.ReactNode;
}
export declare const Searchbox: ({ size, filterByKeyword, validation, options, value, onChange, onSelect, children, className, style, reversed, label, fixedDarkMode, float, onClick, onFocus, onBlur, ...restInputProps }: SearchboxProps) => import("react/jsx-runtime").JSX.Element;
