/// <reference types="react" />
import { HTMLTagProps } from '@types';
export interface SwitchProps extends Pick<HTMLTagProps<'div'>, 'className' | 'style'>, Omit<HTMLTagProps<'input'>, 'value' | 'onChange' | 'size' | 'checked' | 'type' | 'style'> {
    size?: 'small' | 'medium' | 'large';
    onChange?: (checked: boolean) => void;
    value?: boolean;
}
export declare const Switch: ({ size, value, onChange, className, style, ...restInputProps }: SwitchProps) => JSX.Element;
