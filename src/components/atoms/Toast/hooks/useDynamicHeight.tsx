import { useState, useEffect } from 'react';

const CLOSED_HEIGHT_STYLE = {
  margin: 0,
  height: 0,
};

export const useDynamicHeight = (
  ref: React.RefObject<HTMLDivElement>,
  isOpened: boolean,
) => {
  const [dynamicHeightStyle, setDynamicHeightStyle] =
    useState<React.CSSProperties>();

  useEffect(() => {
    const height = ref.current?.clientHeight;
    if (height) {
      setDynamicHeightStyle({
        height,
        margin: '0.7em 0',
      });
    }
  }, [ref]);

  return isOpened ? dynamicHeightStyle : CLOSED_HEIGHT_STYLE;
};
