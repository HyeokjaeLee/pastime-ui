/// <reference types="react" />
import type { ButtonProps } from '../components/molecules';
interface TabContextProviderProps extends Pick<ButtonProps, 'size'> {
    children: React.ReactNode;
}
export declare const TabContextProvider: ({ size, children, }: TabContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTabContext: () => {
    size: import("../types").Size | undefined;
};
export {};
