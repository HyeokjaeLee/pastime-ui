import { useEffect } from 'react';

import { useTooltipContext } from '@contexts/TooltipContext';

export const useTooltipCloseOnScroll = () => {
  const {
    tooltipState: [, setOpeningTransition],
  } = useTooltipContext();

  useEffect(() => {
    const scrollEventHandler = () => setOpeningTransition(false, true);
    document.addEventListener('scroll', scrollEventHandler);
    return () => document.removeEventListener('scroll', scrollEventHandler);
  }, [setOpeningTransition]);
};
