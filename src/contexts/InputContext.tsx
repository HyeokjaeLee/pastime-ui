import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export const InputContext = createContext<
  undefined | Dispatch<SetStateAction<boolean>>
>(undefined);
