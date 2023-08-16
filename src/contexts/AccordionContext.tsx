import { createContext, useContext, useMemo } from 'react';

import { useSubscribedState } from '@hooks';
import type { SubscribedState } from '@hooks';

type Size = 'small' | 'medium' | 'large';
interface AccordionContextValue {
  openedState: SubscribedState<boolean>;
  size?: Size;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined,
);

export interface AccordionContextProviderProps {
  opened?: boolean;
  size?: Size;
  children: React.ReactNode;
}

export const AccordionContextProvider = ({
  opened = false,
  size = 'medium',
  children,
}: AccordionContextProviderProps) => {
  const openedState = useSubscribedState(opened);

  const accordionContextValue = useMemo(
    () => ({
      openedState,
      size,
    }),
    [openedState, size],
  );

  return (
    <AccordionContext.Provider value={accordionContextValue}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (context === undefined) {
    throw new Error(
      'useAccordionContext must be used within a AccordionContextProvider',
    );
  }

  return context;
};
