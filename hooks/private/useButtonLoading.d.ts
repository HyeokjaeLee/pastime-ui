/// <reference types="react" />
export type ButtonIconDirection = 'left' | 'right';
interface UseButtonLoadingParams {
    loading: boolean;
    iconDirection: ButtonIconDirection;
    childrenType: 'icon' | 'text' | 'both';
}
export declare const useButtonLoading: ({ loading, iconDirection, childrenType, }: UseButtonLoadingParams) => {
    iconLoadingSpinner: JSX.Element;
    leftLoadingSpinner?: undefined;
    rightLoadingSpinner?: undefined;
} | {
    leftLoadingSpinner: JSX.Element;
    iconLoadingSpinner?: undefined;
    rightLoadingSpinner?: undefined;
} | {
    rightLoadingSpinner: JSX.Element;
    iconLoadingSpinner?: undefined;
    leftLoadingSpinner?: undefined;
} | {
    iconLoadingSpinner?: undefined;
    leftLoadingSpinner?: undefined;
    rightLoadingSpinner?: undefined;
};
export {};
