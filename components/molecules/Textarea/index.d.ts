/// <reference types="react" />
import type { InputWrapProps } from '../../atoms';
import type { ValidateHandler } from '../../../hooks';
import type { HTMLTagProps, InnerStateChangeEventHandler, Size } from '../../../types';
interface TextareaProps extends Pick<InputWrapProps, 'className' | 'style' | 'label' | 'reversed' | 'fixedDarkMode'>, Omit<HTMLTagProps<'textarea'>, 'resize' | 'className' | 'style' | 'rows' | 'onChange'> {
    size?: Size;
    value?: string;
    onChange?: InnerStateChangeEventHandler<string>;
    children?: React.ReactNode;
    validation?: ValidateHandler<TextareaProps['value']>;
    ref?: React.ForwardedRef<HTMLTextAreaElement>;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
