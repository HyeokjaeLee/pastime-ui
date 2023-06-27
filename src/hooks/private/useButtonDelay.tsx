import { useState, useEffect } from 'react';

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
      setDelayState('before');
      const startTimer = setTimeout(() => setDelayState('delaying'));
      const endTimer = setTimeout(() => setDelayState('after'), delay);
      return () => {
        clearTimeout(startTimer);
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
