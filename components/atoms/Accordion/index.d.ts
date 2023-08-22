/// <reference types="react" />
import type { AccordionContextProviderProps } from '../../../contexts/AccordionContext';
import type { HTMLTagProps } from '@types';
export type { AccordionTitleProps } from './AccordionTitle';
export type { AccordionContentsProps } from './AccordionContents';
export type AccordionProps = HTMLTagProps<'dl'> & AccordionContextProviderProps;
export declare const Accordion: (({ opened, size, children, className, ...restDlProps }: AccordionProps) => import("react/jsx-runtime").JSX.Element) & {
    Title: ({ children, className, ...restDtProps }: import("@types").CleanedTagProps<import("react").HTMLAttributes<HTMLElement>>) => import("react/jsx-runtime").JSX.Element;
    Contents: ({ style, children, className, ...restDdProps }: import("./AccordionContents").AccordionContentsProps) => import("react/jsx-runtime").JSX.Element;
};
