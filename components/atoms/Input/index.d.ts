/// <reference types="react" />
import type { InputType } from '../../../hooks';
import type { HTMLTagProps } from '../../../types';
export type { InputWrapProps } from './inputWrap';
export interface InputChangeEvent {
    value: string;
}
export interface InputProps extends Omit<HTMLTagProps<'input'>, 'type' | 'value' | 'width' | 'height' | 'size' | 'onChange'> {
    type?: InputType;
    value?: number | string;
    onChange?: (event: InputChangeEvent) => void;
    ref?: React.ForwardedRef<HTMLInputElement>;
}
export declare const Input: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>> & {
    Wrap: ({ size, validationMessage, reversed, label, required, children, className, ...restDivProps }: import("./inputWrap").InputWrapProps) => import("react/jsx-runtime").JSX.Element;
};
