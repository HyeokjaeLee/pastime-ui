/// <reference types="react" />
import type { InputProps, SelectProps, InputWrapProps } from '@components/atoms';
import type { ValidOptionValue, ValidateHandler } from '@hooks';
import { InputDisabled, Size } from '@types';
export interface SelectboxProps<TValidOptionValue extends ValidOptionValue = ValidOptionValue, TMultiple extends boolean = false> extends Omit<InputProps, 'style' | 'className' | 'onChange' | 'value' | 'multiple' | 'type' | 'disabled'>, Pick<InputWrapProps, 'reversed' | 'className' | 'style'>, Pick<SelectProps<TValidOptionValue, TMultiple>, 'options' | 'float' | 'onChange' | 'value' | 'multiple' | 'cancelable'> {
    disabled?: InputDisabled;
    size?: Size;
    validation?: ValidateHandler<SelectboxProps<TValidOptionValue, TMultiple>['value']>;
    children?: React.ReactNode;
}
export declare const Selectbox: <TValidOptionValue extends ValidOptionValue = ValidOptionValue, TMultiple extends boolean = false>({ disabled, size, validation, children, reversed, className, style, options, float, onChange, value, multiple, onClick, placeholder, id, ...restInputProps }: SelectboxProps<TValidOptionValue, TMultiple>) => JSX.Element;
