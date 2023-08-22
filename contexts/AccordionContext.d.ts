/// <reference types="react" />
import type { SubscribedState } from '../hooks';
type Size = 'small' | 'medium' | 'large';
interface AccordionContextValue {
    openedState: SubscribedState<boolean>;
    size?: Size;
}
export interface AccordionContextProviderProps {
    opened?: boolean;
    size?: Size;
    children: React.ReactNode;
}
export declare const AccordionContextProvider: ({ opened, size, children, }: AccordionContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useAccordionContext: () => AccordionContextValue;
export {};
