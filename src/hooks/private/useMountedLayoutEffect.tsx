import { useLayoutEffect, useRef } from 'react';

export function useMountedLayoutEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) {
  const isMounted = useRef(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(
    isMounted.current
      ? effect
      : () => {
          isMounted.current = true;
        },
    deps,
  );
}
