import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface AccordionContextValue {
  opened: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const AccordionContext = createContext<
  {
    setOpened: Dispatch<SetStateAction<boolean>>;
  } & Pick<AccordionContextValue, 'size' | 'opened'>
>({
  opened: false,
  setOpened: () => undefined,
});
