/// <reference types="react" />
import type { InputProps, SelectProps, InputWrapProps, SelectChangeEvent } from '../../atoms';
import type { ValidOptionValue, ValidateHandler } from '../../../hooks';
import { InnerStateChangeEventHandler, Size } from '@types';
export interface SelectboxProps<TValidOptionValue extends ValidOptionValue = ValidOptionValue, TMultiple extends boolean = false, TCancelable extends boolean = true> extends Omit<InputProps, 'style' | 'className' | 'onChange' | 'value' | 'multiple' | 'type'>, Pick<InputWrapProps, 'reversed' | 'className' | 'style' | 'label'>, Pick<SelectProps<TValidOptionValue, TMultiple, TCancelable>, 'options' | 'float' | 'value' | 'multiple' | 'cancelable'> {
    size?: Size;
    validation?: ValidateHandler<SelectProps<TValidOptionValue, TMultiple, TCancelable>['value']>;
    children?: React.ReactNode;
    onChange?: InnerStateChangeEventHandler<SelectChangeEvent<TValidOptionValue, TMultiple, TCancelable>['value']>;
}
export declare const Selectbox: <TValidOptionValue extends ValidOptionValue = ValidOptionValue, TMultiple extends boolean = false, TCancelable extends boolean = true>({ size, validation, children, reversed, className, style, label, options, float, onChange, value, multiple, cancelable, onClick, ...restInputProps }: SelectboxProps<TValidOptionValue, TMultiple, TCancelable>) => import("react/jsx-runtime").JSX.Element;
