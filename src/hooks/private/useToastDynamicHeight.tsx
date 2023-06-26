import { useRef, useState, useEffect } from 'react';

export const useToastDynamicHeight = (hasSpace: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<React.CSSProperties>();

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        setHeight({
          height: ref.current.clientHeight,
        });
      }
    }, 100);
  }, []);

  return {
    dynamicHeight: hasSpace ? height : undefined,
    toastContentRef: ref,
  };
};
