import { useState, useEffect } from 'react';

interface UseButtonDelayParams {
  delay?: number;
  disabled?: boolean;
}

const HEAP_TIMER = 500;

export const useButtonDelay = ({ delay, disabled }: UseButtonDelayParams) => {
  const [delayState, setDelayState] = useState<'before' | 'delaying' | 'after'>(
    'after',
  );

  useEffect(() => {
    if (!disabled && delay) setDelayState('before');
  }, [delay, disabled]);

  useEffect(() => {
    switch (delayState) {
      case 'before': {
        const delayTimer = setTimeout(
          () => setDelayState('delaying'),
          HEAP_TIMER,
        );
        return () => clearTimeout(delayTimer);
      }

      case 'delaying': {
        const endTimer = setTimeout(
          () => setDelayState('after'),
          delay ?? 0 + HEAP_TIMER,
        );
        return () => {
          clearTimeout(endTimer);
        };
      }
    }
  }, [delay, delayState]);

  const isDelaying = delayState === 'delaying';
  const isDelayButton = delayState === 'before' || isDelaying;

  return {
    isDelaying,
    isDelayButton,
  };
};
