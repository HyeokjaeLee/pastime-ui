import { useRef, useState, useEffect } from 'react';

export const useInputMessageDynamicHeight = (validationMessage?: string) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const [messageWrapHeight, setMessageWrapHeight] =
    useState<React.CSSProperties>();

  useEffect(() => {
    const { current } = messageRef;
    if (current && validationMessage) {
      return setMessageWrapHeight({
        height: current.clientHeight,
      });
    }
    return setMessageWrapHeight(undefined);
  }, [validationMessage]);

  return { messageRef, messageWrapHeight };
};
