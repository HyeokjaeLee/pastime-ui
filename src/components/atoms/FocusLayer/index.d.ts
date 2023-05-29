/// <reference types="react" />
type HTMLDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export interface FocusLayerProps extends Omit<HTMLDivProps, 'style'> {
    focused?: boolean;
    blur?: boolean;
    backgroundScroll?: boolean;
    style?: Omit<React.CSSProperties, 'zIndex'> & {
        zIndex?: number;
    };
}
export declare const FocusLayer: ({ children, onClick, focused, blur, className, backgroundScroll, style, ...restDivProps }: FocusLayerProps) => JSX.Element;
export {};
