import { FixedDarkMode } from '../../../hooks';
import type { HTMLTagProps, Size } from '../../../types';
export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
    size?: Size | 'fit-content';
    validationMessage?: string;
    reversed?: boolean;
    label?: string;
    required?: boolean;
    fixedDarkMode?: FixedDarkMode;
};
export declare const InputWrap: ({ size, validationMessage, reversed, label, required, fixedDarkMode, children, className, ...restDivProps }: InputWrapProps) => import("react/jsx-runtime").JSX.Element;
