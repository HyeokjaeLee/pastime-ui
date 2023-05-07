/// <reference types="react" />
interface CommonProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface InputContainerProps extends CommonProps {
    validationMessage?: string | null;
}
export interface InputContainerIntreractionProps extends CommonProps {
    onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'];
    size?: 'small' | 'medium' | 'large';
    theme?: 'light' | 'dark';
    readonly?: boolean;
}
export declare const InputContainer: (({ children, className, validationMessage, style, }: InputContainerProps) => JSX.Element) & {
    Intreraction: ({ children, onClick, size, className, style, theme, readonly, }: InputContainerIntreractionProps) => JSX.Element;
};
export {};
