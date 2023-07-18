import { useGetter } from 'hooks';

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
  const [indexForSelect, setIndexForSelect] = indexForSelectState;

  const getIndexForSelect = useGetter(indexForSelect);

  useEffect(() => {
    if (openingTransition === OPENING_TRANSITION.OPENED && options) {
      const prevFocusedElement = document.activeElement;

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

          case 'Enter': {
            event.preventDefault();
            const indexForSelect = getIndexForSelect();
            if (indexForSelect !== INITIAL.INDEX)
              optionItemRefs.current[indexForSelect]?.click();

            break;
          }

          default: {
            if (prevFocusedElement instanceof HTMLElement)
              prevFocusedElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [
    getIndexForSelect,
    onKeyDown,
    openingTransition,
    options,
    optionItemRefs,
    setIndexForSelect,
  ]);

  return indexForSelectState;
};
