export type FixedDarkMode = 'light' | 'dark';
export declare const useDarkMode: (fixedDarkMode?: FixedDarkMode) => {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
};
