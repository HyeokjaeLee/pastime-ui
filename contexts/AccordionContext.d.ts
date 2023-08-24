/// <reference types="react" />
import type { SubscribedState } from '../hooks';
type Size = 'small' | 'medium' | 'large';
interface AccordionContextValue {
    openedState: SubscribedState<boolean>;
    size?: Size;
    isDarkMode: boolean;
}
export interface AccordionContextProviderProps {
    opened?: boolean;
    size?: Size;
    isDarkMode?: boolean;
    children: React.ReactNode;
}
export declare const AccordionContextProvider: ({ opened, size, isDarkMode, children, }: AccordionContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useAccordionContext: () => AccordionContextValue;
export {};
