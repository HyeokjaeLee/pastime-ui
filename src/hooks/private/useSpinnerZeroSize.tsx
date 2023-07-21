import { useEffect, useState } from 'react';

export const useSpinnerZeroSize = (sizeTransition: boolean) => {
  const [isSizeZero, setIsSizeZero] = useState(sizeTransition);

  useEffect(() => {
    if (sizeTransition) setTimeout(() => setIsSizeZero(false));
  }, [sizeTransition]);

  return isSizeZero;
};
