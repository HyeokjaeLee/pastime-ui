interface UseButtonDelayParams {
    delay?: number;
    disabled?: boolean;
}
export declare const useButtonDelay: ({ delay, disabled }: UseButtonDelayParams) => {
    isDelaying: boolean;
    isDelayButton: boolean;
};
export {};
