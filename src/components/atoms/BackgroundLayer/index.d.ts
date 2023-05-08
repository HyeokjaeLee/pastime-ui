/// <reference types="react" />
export interface BackgroundLayerProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    focused?: boolean;
    blur?: boolean;
    className?: string;
    bodyScroll?: boolean;
    priority?: 1 | 2 | 3;
}
export declare const BackgroundLayer: ({ children, onClick, focused, blur, className, bodyScroll, priority, }: BackgroundLayerProps) => JSX.Element;
