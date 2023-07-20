/// <reference types="react" />
import type { HTMLTagProps, Size } from '@types';
export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
    size?: Size | 'fit-content';
    validationMessage?: string;
    readonly?: boolean;
    reversed?: boolean;
};
export declare const InputWrap: ({ size, validationMessage, readonly, reversed, children, className, ...restDivProps }: InputWrapProps) => JSX.Element;
