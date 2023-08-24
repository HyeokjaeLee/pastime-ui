import { createContext, useContext, useMemo } from 'react';

import type { ButtonProps } from '@components/molecules';

type TabContextValue = Pick<ButtonProps, 'size' | 'fixedDarkMode'>;

const TabContext = createContext<TabContextValue | undefined>(undefined);

interface TabContextProviderProps extends TabContextValue {
  children: React.ReactNode;
}

export const TabContextProvider = ({
  size,
  fixedDarkMode,
  children,
}: TabContextProviderProps) => {
  const value = useMemo(
    () => ({
      size,
      fixedDarkMode,
    }),
    [size, fixedDarkMode],
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTabContext = () => {
  const context = useContext(TabContext);

  if (context === undefined)
    throw new Error('useTabContext must be used within a TabContextProvider');

  return context;
};
