import { useRef, useState } from 'react';

import { useMountedEffect } from './useMountedEffect';

export const useToastDynamicHeight = (hasSpace: boolean) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<React.CSSProperties>();

  useMountedEffect(
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
