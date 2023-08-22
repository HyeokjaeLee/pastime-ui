/// <reference types="react" />
import type { InputWrapProps } from '../../atoms';
import type { ValidateHandler } from '../../../hooks';
import type { HTMLTagProps, InnerStateChangeEventHandler, Size } from '@types';
interface TextareaProps extends Pick<InputWrapProps, 'className' | 'style' | 'label' | 'reversed'>, Omit<HTMLTagProps<'textarea'>, 'resize' | 'className' | 'style' | 'rows' | 'onChange'> {
    size?: Size;
    value?: string;
    onChange?: InnerStateChangeEventHandler<string>;
    children?: React.ReactNode;
    validation?: ValidateHandler<TextareaProps['value']>;
}
export declare const Textarea: ({ size, value, onChange, children, validation, className, style, label, reversed, onInvalid, ...restTextareaProps }: TextareaProps) => import("react/jsx-runtime").JSX.Element;
export {};
