import { createContext, useContext } from 'react';

import type { ButtonProps } from '@components/molecules';

const TabContext = createContext<ButtonProps['size']>(undefined);

interface TabContextProviderProps extends Pick<ButtonProps, 'size'> {
  children: React.ReactNode;
}

export const TabContextProvider = ({
  size,
  children,
}: TabContextProviderProps) => (
  <TabContext.Provider value={size}>{children}</TabContext.Provider>
);

export const useTabContext = () => {
  const size = useContext(TabContext);
  return { size };
};
