/// <reference types="react" />
import type { HTMLTagProps } from '@types';
export type AccordionContentsProps = Omit<HTMLTagProps<'dd'>, 'style'> & {
    style?: Omit<React.CSSProperties, 'height'>;
};
export declare const AccordionContents: ({ style, children, className, ...restDdProps }: AccordionContentsProps) => import("react/jsx-runtime").JSX.Element;
