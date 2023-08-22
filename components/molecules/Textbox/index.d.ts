/// <reference types="react" />
import type { InputProps, InputWrapProps } from '../../atoms';
import type { ValidateHandler, InputType } from '../../../hooks';
import { InnerStateChangeEventHandler, Size } from '@types';
export interface TextboxProps extends Omit<InputProps, 'className' | 'size' | 'style' | 'value' | 'onChange'>, Pick<InputWrapProps, 'className' | 'style' | 'reversed' | 'label'> {
    value?: string;
    onChange?: InnerStateChangeEventHandler<string>;
    validation?: ValidateHandler<TextboxProps['value']>;
    children?: React.ReactNode;
    type?: Exclude<InputType, 'button'>;
    size?: Size;
}
export declare const Textbox: ({ value, onChange, validation, children, type, size, className, style, reversed, label, ...restInputProps }: TextboxProps) => import("react/jsx-runtime").JSX.Element;
