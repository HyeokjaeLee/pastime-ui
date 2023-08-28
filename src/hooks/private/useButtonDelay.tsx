import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

interface UseButtonDelayParams {
  delay?: number;
  disabled?: boolean;
}

export const useButtonDelay = ({ delay, disabled }: UseButtonDelayParams) => {
  const [delayState, setDelayState] = useState<'before' | 'delaying' | 'after'>(
    'after',
  );

  useEffect(() => {
    if (!disabled && delay) {
      flushSync(() => setDelayState('before'));

      setDelayState('delaying');

      const endTimer = setTimeout(() => setDelayState('after'), delay);
      return () => {
        clearTimeout(endTimer);
      };
    }
  }, [delay, disabled]);

  const isDelaying = delayState === 'delaying';
  const isDelayButton = delayState === 'before' || isDelaying;

  return {
    isDelaying,
    isDelayButton,
  };
};
