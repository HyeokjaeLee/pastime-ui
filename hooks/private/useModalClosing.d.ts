interface UseModalClosingParams {
    opened: boolean;
    closingDuration?: number;
}
export declare enum MODAL_CLOSING_STATE {
    CLOSED = 0,
    CLOSING = 1,
    OPENED = 2
}
export declare const useModalClosing: ({ opened, closingDuration, }: UseModalClosingParams) => MODAL_CLOSING_STATE;
export {};
