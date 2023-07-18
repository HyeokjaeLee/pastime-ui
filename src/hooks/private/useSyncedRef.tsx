import { useImperativeHandle, useRef } from 'react';

export const useSyncedRef = <T,>(parentRef: React.Ref<T> | undefined) => {
  const internalRef = useRef<T>(null);
  useImperativeHandle(parentRef, () => ({ ...internalRef.current } as T));
  return internalRef;
};
