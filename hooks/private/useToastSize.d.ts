/// <reference types="react" />
export declare const useToastSize: (hasSpace: boolean) => {
    height: Pick<import("react").CSSProperties, "height"> | undefined;
    contentsWidth: Pick<import("react").CSSProperties, "width"> | undefined;
    toastContentRef: import("react").RefObject<HTMLDivElement>;
};
