import { useEffect, useState } from 'react';

interface UseModalClosingParams {
  opened: boolean;
  closingDuration?: number;
}

export enum MODAL_CLOSING_STATE {
  CLOSED = 0,
  CLOSING = 1,
  OPENED = 2,
}

export const useModalClosing = ({
  opened,
  closingDuration,
}: UseModalClosingParams) => {
  const [state, setState] = useState(
    opened ? MODAL_CLOSING_STATE.OPENED : MODAL_CLOSING_STATE.CLOSED,
  );

  useEffect(() => {
    if (opened) setState(MODAL_CLOSING_STATE.OPENED);
    else {
      setState((prev) => {
        if (prev === MODAL_CLOSING_STATE.OPENED)
          return MODAL_CLOSING_STATE.CLOSING;
        return prev;
      });
    }
  }, [opened]);

  useEffect(() => {
    if (state === MODAL_CLOSING_STATE.CLOSING) {
      const closeTimer = setTimeout(
        () => setState(MODAL_CLOSING_STATE.CLOSED),
        closingDuration,
      );

      return () => clearTimeout(closeTimer);
    }
  }, [state, closingDuration]);

  return state;
};
