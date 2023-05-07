import type { Ref } from 'react';
export interface InputProps extends Pick<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'placeholder' | 'onFocus' | 'id' | 'onClick' | 'style'> {
    type?: 'text' | 'number' | 'large-number' | 'phone-number' | 'password' | 'button';
    value?: number | string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    ref?: Ref<HTMLInputElement>;
    name?: string;
    className?: string;
}
export declare const Input: (props: InputProps) => JSX.Element | null;
