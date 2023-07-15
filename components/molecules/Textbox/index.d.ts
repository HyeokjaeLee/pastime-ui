/// <reference types="react" />
import type { InputProps, InputWrapProps } from '@components/atoms';
import type { ValidateHandler, InputType } from '@hooks';
export interface TextboxProps extends Omit<InputProps, 'className' | 'size' | 'style'>, Pick<InputWrapProps, 'size' | 'className' | 'style'> {
    unit?: React.ReactNode;
    type?: Exclude<InputType, 'button'>;
    validation?: ValidateHandler<TextboxProps['value']>;
}
export declare const Textbox: ({ unit, validation, type, size, className, style, onChange, value, id, name, ...restInputProps }: TextboxProps) => JSX.Element;
