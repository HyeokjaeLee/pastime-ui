import { useEffect, useState } from 'react';

export const useSpinnerZeroSize = (transitionSize: boolean) => {
  const [isSizeZero, setIsSizeZero] = useState(transitionSize);

  useEffect(() => {
    if (transitionSize) setTimeout(() => setIsSizeZero(false));
  }, [transitionSize]);

  return isSizeZero;
};
