import { createContext, useContext } from 'react';

interface ModalContextValue {
  onClose?: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

interface ModalContextProviderProps extends ModalContextValue {
  children: React.ReactNode;
}

export const ModalContextProvider = ({
  children,
  ...modalContextValue
}: ModalContextProviderProps) => (
  <ModalContext.Provider value={modalContextValue}>
    {children}
  </ModalContext.Provider>
);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error(
      'useModalContext must be used within a ModalContextProvider',
    );
  }

  return context;
};
