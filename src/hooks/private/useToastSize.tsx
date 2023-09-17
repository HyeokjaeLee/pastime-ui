import { useEffect, useRef, useState } from 'react';

export const useToastSize = (hasSpace: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  const [contentsWidth, setContentsWidth] =
    useState<Pick<React.CSSProperties, 'width'>>();
  const [height, setHeight] = useState<Pick<React.CSSProperties, 'height'>>();

  useEffect(() => {
    const { current: toastContents } = ref;
    if (toastContents) {
      const { width, height } = toastContents.getBoundingClientRect();
      console.log(width);
      setContentsWidth({ width });
      setHeight({ height });
    }
  }, []);

  return {
    height: hasSpace ? height : undefined,
    contentsWidth,
    toastContentRef: ref,
  };
};
