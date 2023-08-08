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

      const focusOptionItem = (indexForSelect: number) => {
        optionItemRefs.current[indexForSelect]?.focus();
        setIndexForSelect(indexForSelect);
      };

      const keyboardEvent = (event: KeyboardEvent) => {
        onKeyDown?.(event);

        let indexForSelect = getIndexForSelect();

        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();

            if (indexForSelect > 0) {
              indexForSelect -= 1;
              focusOptionItem(indexForSelect);
            }

            break;

          case 'ArrowDown':
            event.preventDefault();

            if (indexForSelect < options.length - 1) {
              indexForSelect += 1;
              focusOptionItem(indexForSelect);
            }

            break;

          case 'Enter':
            event.preventDefault();

            if (indexForSelect !== INITIAL.INDEX)
              optionItemRefs.current[indexForSelect]?.click();

            break;

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
