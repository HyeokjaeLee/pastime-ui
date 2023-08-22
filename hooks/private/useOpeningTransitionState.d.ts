export declare enum OPENING_TRANSITION {
    OPENING = 1,
    OPENED = 2,
    CLOSING = 3,
    CLOSED = 0
}
interface UseOpeningStatusParams {
    openingTransition?: OPENING_TRANSITION;
    openingDuration?: number;
    closingDuration?: number;
}
export declare const useOpeningTransitionState: ({ openingTransition, openingDuration, closingDuration, }: UseOpeningStatusParams) => readonly [OPENING_TRANSITION, (status: boolean, runInstantly?: boolean) => void, import("./useSubscribedState").DisableSetter];
export type OpeningTransitionState = ReturnType<typeof useOpeningTransitionState>;
export {};
