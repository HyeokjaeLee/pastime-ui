import { createContext, useContext, useMemo } from 'react';

import { useSubscribedState } from '@hooks';
import type { SubscribedState } from '@hooks';

type Size = 'small' | 'medium' | 'large';
interface AccordionContextValue {
  openedState: SubscribedState<boolean>;
  size?: Size;
  isDarkMode: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined,
);

export interface AccordionContextProviderProps {
  opened?: boolean;
  size?: Size;
  isDarkMode?: boolean;
  children: React.ReactNode;
}

export const AccordionContextProvider = ({
  opened,
  size,
  isDarkMode,
  children,
}: AccordionContextProviderProps) => {
  if (size === undefined || isDarkMode === undefined || opened === undefined)
    throw new Error(`size, isDarkMode, opened must be defined.`);

  const openedState = useSubscribedState(opened);

  const accordionContextValue = useMemo(
    () => ({
      openedState,
      size,
      isDarkMode,
    }),
    [openedState, size, isDarkMode],
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
