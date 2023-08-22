import { HTMLTagProps } from '@types';
export interface ModalHeaderProps extends HTMLTagProps<'header'> {
    closeButton?: boolean;
}
export declare const ModalHeader: ({ closeButton, className, children, ...restHeaderProps }: ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
