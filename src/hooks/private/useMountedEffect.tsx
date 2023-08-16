import { useEffect, useRef } from 'react';

export function useMountedEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) {
  const isMounted = useRef(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    isMounted.current
      ? effect
      : () => {
          isMounted.current = true;
        },
    deps,
  );
}
