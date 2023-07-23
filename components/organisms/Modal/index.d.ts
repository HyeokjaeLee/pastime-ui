/// <reference types="react" />
import { HTMLTagProps } from '@types';
interface ModalProps extends HTMLTagProps<'section'> {
    stackIndex?: 1 | 2 | 3 | 4 | 5;
    blurredBackground?: boolean;
}
export declare const Modal: ({ stackIndex, blurredBackground, className, ...restSectionProps }: ModalProps) => import("react").ReactPortal;
export {};
