import { useEffect, useRef } from 'react';

import { useSubscribedState } from './useSubscribedState';

export enum OPENING_TRANSITION {
  OPENING = 1,
  OPENED = 2,
  CLOSING = 3,
  CLOSED = 0,
}

interface UseOpeningStatusParams {
  openingTransition?: OPENING_TRANSITION;
  openingDuration?: number;
  closingDuration?: number;
}

export const useOpeningTransitionState = ({
  openingTransition = OPENING_TRANSITION.CLOSED,
  openingDuration,
  closingDuration,
}: UseOpeningStatusParams) => {
  const [status, setStatus, preventInnerStateChange] =
    useSubscribedState(openingTransition);

  useEffect(() => {
    switch (status) {
      case OPENING_TRANSITION.CLOSING: {
        const closeTimer = setTimeout(() => {
          setStatus(OPENING_TRANSITION.CLOSED);
        }, closingDuration);

        return () => clearTimeout(closeTimer);
      }

      case OPENING_TRANSITION.OPENING: {
        const openTimer = setTimeout(
          () => setStatus(OPENING_TRANSITION.OPENED),
          openingDuration,
        );

        return () => clearTimeout(openTimer);
      }
    }
  }, [closingDuration, openingDuration, setStatus, status]);

  const { current } = useRef([
    (status: boolean, runInstantly?: boolean) => {
      if (status) {
        if (openingDuration && !runInstantly)
          setStatus(OPENING_TRANSITION.OPENING);
        else setStatus(OPENING_TRANSITION.OPENED);
      } else if (closingDuration && !runInstantly)
        setStatus(OPENING_TRANSITION.CLOSING);
      else setStatus(OPENING_TRANSITION.CLOSED);
    },
    preventInnerStateChange,
  ] as const);

  return [status, ...current] as const;
};

export type OpeningTransitionState = ReturnType<
  typeof useOpeningTransitionState
>;
