import { HTMLTagProps } from '@types';
export interface DrawerHeaderProps extends HTMLTagProps<'header'> {
    closeButton?: boolean;
}
export declare const DrawerHeader: ({ closeButton, className, children, ...restHeaderProps }: DrawerHeaderProps) => import("react/jsx-runtime").JSX.Element;
