export type ButtonIconDirection = 'left' | 'right';
interface UseButtonLoadingParams {
    loading: boolean;
    iconDirection: ButtonIconDirection;
    childrenType: 'icon' | 'text' | 'both';
}
export declare const useButtonLoading: ({ loading, iconDirection, childrenType, }: UseButtonLoadingParams) => {
    iconLoadingSpinner: import("react/jsx-runtime").JSX.Element;
    leftLoadingSpinner?: undefined;
    rightLoadingSpinner?: undefined;
} | {
    leftLoadingSpinner: import("react/jsx-runtime").JSX.Element;
    iconLoadingSpinner?: undefined;
    rightLoadingSpinner?: undefined;
} | {
    rightLoadingSpinner: import("react/jsx-runtime").JSX.Element;
    iconLoadingSpinner?: undefined;
    leftLoadingSpinner?: undefined;
} | {
    iconLoadingSpinner?: undefined;
    leftLoadingSpinner?: undefined;
    rightLoadingSpinner?: undefined;
};
export {};
