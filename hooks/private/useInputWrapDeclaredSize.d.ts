/// <reference types="react" />
interface UseInputDeclaredSizeParams {
    style?: React.CSSProperties;
    className?: string;
}
export declare const useInputWrapDeclaredSize: ({ style, className, }: UseInputDeclaredSizeParams) => {
    inputWrapRef: import("react").RefObject<HTMLDivElement>;
    isDeclaredSize: boolean;
};
export {};
