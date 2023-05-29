/// <reference types="react" />
import type { Validation } from '../../../hooks';
import type { InputProps, InputWrapProps, InputType } from '../../atoms';
export interface TextboxProps extends Omit<InputProps, 'className' | 'size'>, Pick<InputWrapProps, 'size' | 'theme' | 'className'> {
    unit?: React.ReactNode;
    type?: Exclude<InputType, 'button'>;
    validation?: Validation<TextboxProps['value']>;
}
export declare const Textbox: ({ value: parentValue, unit, onChange, size, validation, className, theme, type, id, ...restInputProps }: TextboxProps) => JSX.Element;
