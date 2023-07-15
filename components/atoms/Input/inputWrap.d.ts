/// <reference types="react" />
import type { HTMLTagProps } from '@types';
export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
    size?: 'small' | 'medium' | 'large';
    validationMessage?: string;
};
export declare const InputWrap: ({ size, validationMessage, children, ...restDivProps }: InputWrapProps) => JSX.Element;
