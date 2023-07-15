export declare enum TOAST_STATE {
    OPENING = "opening",
    OPENED = "opened",
    HOLDING = "holding",
    CLOSING = "closing",
    CLOSED = "closed",
    DELETED = "deleted"
}
interface UseToastStateParams {
    holdTime: number;
    space: boolean;
}
export declare const useToastState: ({ holdTime, space }: UseToastStateParams) => {
    toastState: TOAST_STATE;
    hasSpace: boolean;
    holdToast: () => void;
    unholdToast: () => void;
};
export {};
