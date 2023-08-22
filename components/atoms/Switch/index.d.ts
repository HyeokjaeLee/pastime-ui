import { HTMLTagProps, InnerStateChangeEventHandler } from '@types';
export interface SwitchProps extends Pick<HTMLTagProps<'div'>, 'className' | 'style'>, Omit<HTMLTagProps<'input'>, 'onChange' | 'size' | 'type' | 'style' | 'checked' | 'value'> {
    size?: 'small' | 'medium' | 'large';
    value?: boolean;
    onChange?: InnerStateChangeEventHandler<boolean>;
}
export declare const Switch: ({ size, onChange, value, className, style, ...restInputProps }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
