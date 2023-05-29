import { Ref } from 'react';
type HTMLInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type HTMLDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export interface InputContainerProps extends HTMLDivProps {
    validationMessage?: string | null;
}
export interface InputWrapProps extends HTMLDivProps {
    size?: 'small' | 'medium' | 'large';
    theme?: 'light' | 'dark';
}
export type InputType = 'text' | 'number' | 'large-number' | 'phone-number' | 'password' | 'button';
export interface InputProps extends Omit<HTMLInputProps, 'type' | 'value' | 'disabled' | 'onChange'> {
    type?: InputType;
    value?: number | string;
    disabled?: boolean | 'readonly';
    onChange?: (value: string) => void;
    ref?: Ref<HTMLInputElement>;
}
export declare const Input: ((props: InputProps) => JSX.Element | null) & {
    Container: ({ children, className, validationMessage, ...restDivProps }: InputContainerProps) => JSX.Element;
    Wrap: ({ size, className, theme, ...restDivProps }: InputWrapProps) => JSX.Element;
};
export {};
