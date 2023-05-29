import { useEffect as createEffect, useRef } from 'react';

export function useMountedEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
) {
  const isMounted = useRef(false);

  createEffect(
    isMounted.current
      ? effect
      : () => {
          isMounted.current = true;
        },
    deps,
  );
}
