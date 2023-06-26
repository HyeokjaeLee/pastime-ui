import { useEffect, useState } from 'react';

export const useOpeningState = (opened = false, closingDuration = 300) => {
  const state = useState<boolean | 'closing'>(opened);
  const [status, setStatus] = state;

  useEffect(
    () =>
      setStatus(
        opened ? true : (beforeStatus) => (beforeStatus ? 'closing' : false),
      ),
    [opened, setStatus],
  );

  const isClosing = status === 'closing';
  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setStatus(false);
      }, closingDuration);
      return () => clearTimeout(timer);
    }
  }, [closingDuration, isClosing, setStatus]);

  return state;
};
