/// <reference types="react" />
import type { InputWrapProps } from '@components/atoms';
import type { ValidateHandler } from '@hooks';
import type { HTMLTagProps, InputDisabled, Size } from '@types';
interface TextareaProps extends Pick<InputWrapProps, 'className' | 'style'>, Omit<HTMLTagProps<'textarea'>, 'resize' | 'disabled' | 'className' | 'style' | 'rows' | 'onChange'> {
    size?: Size;
    disabled?: InputDisabled;
    value?: string;
    onChange?: (value: string) => void;
    children?: React.ReactNode;
    validation?: ValidateHandler<TextareaProps['value']>;
}
export declare const Textarea: ({ size, disabled, value, onChange, children, validation, className, style, id, ...restTextareaProps }: TextareaProps) => JSX.Element;
export {};
