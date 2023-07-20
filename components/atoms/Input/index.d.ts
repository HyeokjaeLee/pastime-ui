/// <reference types="react" />
import type { InputType } from '@hooks';
import type { HTMLTagProps } from '@types';
export type { InputWrapProps } from './inputWrap';
export interface InputProps extends Omit<HTMLTagProps<'input'>, 'type' | 'value' | 'onChange' | 'width' | 'height' | 'size'> {
    type?: InputType;
    value?: number | string;
    onChange?: (value: string) => void;
}
export declare const Input: (({ type, value, onChange, placeholder, className, onFocus, onBlur, ...restInputProps }: InputProps) => JSX.Element) & {
    Wrap: ({ size, validationMessage, readonly, reversed, children, className, ...restDivProps }: import("./inputWrap").InputWrapProps) => JSX.Element;
};
