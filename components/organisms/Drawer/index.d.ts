import type { ModalProps } from '../Modal/index';
export type { DrawerHeaderProps } from './DrawerHeader';
export interface DrawerProps extends ModalProps {
    drawerDirection?: 'bottom' | 'top' | 'left' | 'right';
}
export declare const Drawer: (({ zIndex, blurredBackground, opened, onClose, backgroundScroll, drawerDirection, fixedDarkMode, className, children, ...restArticleProps }: DrawerProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ closeButton, className, children, ...restHeaderProps }: import("./DrawerHeader").DrawerHeaderProps) => import("react/jsx-runtime").JSX.Element;
};
