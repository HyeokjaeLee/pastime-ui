/// <reference types="react" />
interface ModalContextValue {
    onClose?: () => void;
}
interface ModalContextProviderProps extends ModalContextValue {
    children: React.ReactNode;
}
export declare const ModalContextProvider: ({ children, ...modalContextValue }: ModalContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useModalContext: () => ModalContextValue;
export {};
