import { useState, useEffect } from 'react';

export enum TOAST_STATE {
  OPENING = 'opening',
  OPENED = 'opened',
  HOLDING = 'holding',
  CLOSING = 'closing',
  CLOSED = 'closed',
  DELETED = 'deleted',
}

interface UseToastStateParams {
  holdTime: number;
  space: boolean;
}

const CLOSING_ANIMATION_DURATION = 300;

export const useToastState = ({ holdTime, space }: UseToastStateParams) => {
  const [toastState, setToastState] = useState<TOAST_STATE>(
    TOAST_STATE.OPENING,
  );

  useEffect(() => {
    switch (toastState) {
      case TOAST_STATE.OPENING:
        setTimeout(() => setToastState(TOAST_STATE.OPENED));
        break;

      case TOAST_STATE.OPENED: {
        const holdTimer = setTimeout(
          () => setToastState(TOAST_STATE.CLOSING),
          holdTime,
        );

        return () => clearTimeout(holdTimer);
      }

      case TOAST_STATE.CLOSING: {
        const closeTimer = setTimeout(
          () => setToastState(TOAST_STATE.CLOSED),
          CLOSING_ANIMATION_DURATION,
        );

        return () => clearTimeout(closeTimer);
      }
    }
  }, [holdTime, toastState]);

  useEffect(() => {
    if (toastState === TOAST_STATE.CLOSED && !space)
      setToastState(TOAST_STATE.DELETED);
  }, [space, toastState]);

  const isToastHoldable = [
    TOAST_STATE.OPENED,
    TOAST_STATE.HOLDING,
    TOAST_STATE.CLOSING,
  ].includes(toastState);

  const hasSpace =
    [TOAST_STATE.OPENED, TOAST_STATE.HOLDING].includes(toastState) ||
    ([TOAST_STATE.CLOSING, TOAST_STATE.CLOSED].includes(toastState) && space);

  return {
    toastState,
    hasSpace,

    holdToast: () => {
      if (isToastHoldable) setToastState(TOAST_STATE.HOLDING);
    },
    unholdToast: () => {
      if (isToastHoldable) setToastState(TOAST_STATE.OPENED);
    },
  };
};
