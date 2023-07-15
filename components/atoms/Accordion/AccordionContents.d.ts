/// <reference types="react" />
import type { HTMLTagProps } from '@types';
export type AccordionContentsProps = Omit<HTMLTagProps<'dd'>, 'style'> & {
    style?: Omit<React.CSSProperties, 'height'>;
};
export declare const AccordionContents: ({ style, children, className, ...restDdProps }: AccordionContentsProps) => JSX.Element;
