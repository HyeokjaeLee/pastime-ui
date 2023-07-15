import type { Dispatch, SetStateAction } from 'react';
type Size = 'small' | 'medium' | 'large';
interface AccordionContextValue {
    openedState: [boolean, Dispatch<SetStateAction<boolean>>];
    size?: Size;
}
export interface AccordionContextProviderProps {
    opened?: boolean;
    size?: Size;
    children: React.ReactNode;
}
export declare const AccordionContextProvider: ({ opened, size, children, }: AccordionContextProviderProps) => JSX.Element;
export declare const useAccordionContext: () => AccordionContextValue;
export {};
