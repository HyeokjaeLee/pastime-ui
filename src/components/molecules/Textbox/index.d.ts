/// <reference types="react" />
import type { Validation } from '../../../hooks';
import type { InputProps, InputContainerProps, InputContainerIntreractionProps } from '../../atoms';
export interface TextboxProps extends Omit<InputProps & InputContainerProps & InputContainerIntreractionProps, 'validationMessage' | 'children' | 'disabled' | 'readonly'> {
    unit?: React.ReactNode;
    validation?: Validation<TextboxProps['value']>;
    disabled?: boolean | 'readonly';
}
export declare const Textbox: ({ value, unit, onChange, size, id, validation, className, disabled, theme, ...inputProps }: TextboxProps) => JSX.Element;
