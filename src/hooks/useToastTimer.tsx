import { useState, useEffect } from 'react';

import { useOpeningState } from '@hooks';

export const useToastTimer = (holdingTime: number) => {
  const [openingState, setOpeningState] = useOpeningState(true, 500);
  const [isHolding, setIsHolding] = useState(false);

  useEffect(() => {
    if (!isHolding && openingState === true) {
      const closingTimer = setTimeout(
        () => setOpeningState('closing'),
        holdingTime,
      );
      return () => clearTimeout(closingTimer);
    }
  }, [holdingTime, isHolding, openingState, setOpeningState]);

  return {
    isOpened: openingState === true,
    isExisting: !!openingState,
    holdToast: () => setIsHolding(true),
    unholdToast: () => setIsHolding(false),
  };
};
