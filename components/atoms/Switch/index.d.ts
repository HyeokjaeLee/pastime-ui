/// <reference types="react" />
import { HTMLTagProps, InnerStateChangeEventHandler } from '../../../types';
export interface SwitchProps extends Pick<HTMLTagProps<'div'>, 'className' | 'style'>, Omit<HTMLTagProps<'input'>, 'onChange' | 'size' | 'type' | 'style' | 'checked' | 'value'> {
    size?: 'small' | 'medium' | 'large';
    value?: boolean;
    onChange?: InnerStateChangeEventHandler<boolean>;
    children?: React.ReactNode;
}
export declare const Switch: ({ size, onChange, value, children, className, style, ...restInputProps }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
