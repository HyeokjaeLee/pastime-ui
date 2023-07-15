import { createContext, useContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export const InputContext = createContext<
  undefined | Dispatch<SetStateAction<boolean>>
>(undefined);

export const useInputContext = () => {
  const context = useContext(InputContext);

  if (context === undefined) {
    throw new Error(
      'useInputContext must be used within a InputContextProvider',
    );
  }

  return { setReadonly: context };
};
