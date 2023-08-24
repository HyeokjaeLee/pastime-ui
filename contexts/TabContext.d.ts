/// <reference types="react" />
import type { ButtonProps } from '../components/molecules';
type TabContextValue = Pick<ButtonProps, 'size' | 'fixedDarkMode'>;
interface TabContextProviderProps extends TabContextValue {
    children: React.ReactNode;
}
export declare const TabContextProvider: ({ size, fixedDarkMode, children, }: TabContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTabContext: () => TabContextValue;
export {};
