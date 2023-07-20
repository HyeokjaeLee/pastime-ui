import { useRef } from 'react';

export const useGetter = <T,>(value: T) => {
  const valueRef = useRef(value);

  valueRef.current = value;

  const getterRef = useRef(() => valueRef.current);

  return getterRef.current;
};
