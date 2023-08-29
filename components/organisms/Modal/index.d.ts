import { FixedDarkMode } from '../../../hooks';
import { HTMLTagProps } from '../../../types';
export type { ModalHeaderProps } from './ModalHeader';
export interface ModalProps extends HTMLTagProps<'article'> {
    zIndex?: number;
    blurredBackground?: boolean;
    opened?: boolean;
    onClose?: () => void;
    backgroundScroll?: boolean;
    fixedDarkMode?: FixedDarkMode;
}
export declare const Modal: (({ zIndex, blurredBackground, opened, onClose, backgroundScroll, fixedDarkMode, className, children, ...restArticleProps }: ModalProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: ({ closeButton, className, children, ...restHeaderProps }: import("./ModalHeader").ModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
};
