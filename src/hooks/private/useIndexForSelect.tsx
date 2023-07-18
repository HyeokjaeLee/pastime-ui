import { useState, useEffect } from 'react';

import { INITIAL } from '@constants';

import { OPENING_TRANSITION } from './useOpeningTransitionState';

export type ValidOptionValue = string | number;

interface UseOpenStatusParams {
  openingTransition: OPENING_TRANSITION;
  options?: {
    label: string;
    value: ValidOptionValue;
  }[];
  optionItemRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  onKeyDown?: (event: KeyboardEvent) => void;
}

export const useIndexForSelect = ({
  openingTransition,
  options,
  optionItemRefs,
  onKeyDown,
}: UseOpenStatusParams) => {
  const indexForSelectState = useState(INITIAL.INDEX);
  const [, setIndexForSelect] = indexForSelectState;

  useEffect(() => {
    if (openingTransition === OPENING_TRANSITION.OPENED && options) {
      const keyboardEvent = (event: KeyboardEvent) => {
        onKeyDown?.(event);
        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex > 0) {
                const nextIndex = prevIndex - 1;
                optionItemRefs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });

          case 'ArrowDown':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex < options.length - 1) {
                const nextIndex = prevIndex + 1;
                optionItemRefs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });
          case 'Enter':
            event.preventDefault();
            return setIndexForSelect((index) => {
              if (index >= 0) optionItemRefs.current[index]?.click();
              return index;
            });
          default:
        }
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [
    onKeyDown,
    openingTransition,
    options,
    optionItemRefs,
    setIndexForSelect,
  ]);

  return indexForSelectState;
};
