/// <reference types="react" />
import type { InputType } from '@hooks';
import type { HTMLTagProps } from '@types';
export type { InputWrapProps } from './inputWrap';
export interface InputProps extends Omit<HTMLTagProps<'input'>, 'type' | 'value' | 'disabled' | 'onChange' | 'width' | 'height'> {
    type?: InputType;
    value?: number | string;
    disabled?: boolean | 'readonly';
    onChange?: (value: string) => void;
}
export declare const Input: (({ type, value, disabled, onChange, placeholder, className, onFocus, onBlur, ...restInputProps }: InputProps) => JSX.Element) & {
    Wrap: ({ size, validationMessage, children, ...restDivProps }: import("./inputWrap").InputWrapProps) => JSX.Element;
};
