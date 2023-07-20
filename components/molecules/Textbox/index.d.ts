/// <reference types="react" />
import type { InputProps, InputWrapProps } from '@components/atoms';
import type { ValidateHandler, InputType } from '@hooks';
import { InputDisabled, Size } from '@types';
export interface TextboxProps extends Omit<InputProps, 'className' | 'size' | 'style' | 'disabled'>, Pick<InputWrapProps, 'className' | 'style'> {
    children?: React.ReactNode;
    type?: Exclude<InputType, 'button'>;
    size?: Size;
    validation?: ValidateHandler<TextboxProps['value']>;
    disabled?: InputDisabled;
}
export declare const Textbox: ({ children, type, size, validation, disabled, className, style, onChange, value, id, name, ...restInputProps }: TextboxProps) => JSX.Element;
