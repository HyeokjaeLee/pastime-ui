import { useRef, useState } from 'react';

import { useMountedLayoutEffect } from './useMountedLayoutEffect';

export const useToastDynamicHeight = (hasSpace: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<React.CSSProperties>();

  useMountedLayoutEffect(
    () =>
      setHeight(() => {
        if (ref.current) {
          return {
            height: ref.current.clientHeight,
          };
        }

        return {
          height: 'fit-content',
        };
      }),
    [hasSpace],
  );

  return {
    dynamicHeight: hasSpace ? height : undefined,
    toastContentRef: ref,
  };
};
