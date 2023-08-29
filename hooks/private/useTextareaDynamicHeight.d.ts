/// <reference types="react" />
export declare const useTextareaDynamicHeight: (ref: React.ForwardedRef<HTMLTextAreaElement> | undefined) => {
    textareaRef: ((instance: HTMLTextAreaElement | null) => void) | import("react").RefObject<HTMLTextAreaElement>;
    handleTextareaHeight: (target: EventTarget & HTMLTextAreaElement) => void;
};
