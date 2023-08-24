import { FixedDarkMode } from '../../../hooks';
import { HTMLTagProps } from '../../../types';
export type { ModalHeaderProps } from './ModalHeader';
interface ModalCloseEvent {
    preventDefaultClose: () => void;
}
export interface ModalProps extends HTMLTagProps<'article'> {
    zIndex?: number;
    blurredBackground?: boolean;
    opened?: boolean;
    onClose?: (e: ModalCloseEvent) => void;
    backgroundScroll?: boolean;
    fixedDarkMode?: FixedDarkMode;
}
export declare const Modal: (({ zIndex, blurredBackground, opened, onClose, backgroundScroll, fixedDarkMode, className, children, ...restArticleProps }: ModalProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ closeButton, className, children, ...restHeaderProps }: import("./ModalHeader").ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
};
