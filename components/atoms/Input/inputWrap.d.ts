import type { HTMLTagProps, Size } from '@types';
export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
    size?: Size | 'fit-content';
    validationMessage?: string;
    reversed?: boolean;
    label?: string;
    required?: boolean;
};
export declare const InputWrap: ({ size, validationMessage, reversed, label, required, children, className, ...restDivProps }: InputWrapProps) => import("react/jsx-runtime").JSX.Element;
