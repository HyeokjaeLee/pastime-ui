import { useState, useEffect } from 'react';

import { INITIAL } from '@constants';

import type { OpenStatus } from './useSelectOpenStatus';

export type ValidOptionValue = string | number;

interface UseOpenStatusParams {
  openStatus: OpenStatus;
  options?: {
    label: string;
    value: ValidOptionValue;
  }[];
  selectRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  onKeyDown?: (event: KeyboardEvent) => void;
}

export const useIndexForSelect = ({
  openStatus,
  options,
  selectRefs,
  onKeyDown,
}: UseOpenStatusParams) => {
  const indexForSelectState = useState(INITIAL.INDEX);
  const [, setIndexForSelect] = indexForSelectState;

  useEffect(() => {
    if (openStatus === true && options) {
      const keyboardEvent = (event: KeyboardEvent) => {
        onKeyDown?.(event);
        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex > 0) {
                const nextIndex = prevIndex - 1;
                selectRefs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });

          case 'ArrowDown':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex < options.length - 1) {
                const nextIndex = prevIndex + 1;
                selectRefs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });
          case 'Enter':
            event.preventDefault();
            return setIndexForSelect((index) => {
              if (index >= 0) selectRefs.current[index]?.click();
              return index;
            });
          default:
        }
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [onKeyDown, openStatus, options, selectRefs, setIndexForSelect]);

  return indexForSelectState;
};
