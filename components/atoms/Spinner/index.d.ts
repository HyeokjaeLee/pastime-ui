import { HTMLTagProps, Size } from '../../../types';
export interface SpinnerProps extends Omit<HTMLTagProps<'div'>, 'children' | 'size'> {
    size?: Size;
    sizeTransition?: boolean;
}
export declare const Spinner: ({ size, sizeTransition, className, ...restDivProps }: SpinnerProps) => import("react/jsx-runtime").JSX.Element;
