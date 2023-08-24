import { isEqual } from 'lodash-es';

import { useRef, useState } from 'react';

import { useMountedEffect } from './useMountedEffect';

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export type DisableSetter = () => void;

/**
 * @returns [value, setter, disableSetter]
 * @disableSetter setter를 사용하지 못하게 만드는 함수입니다. (setter이전에 호출되어야 합니다.)
 */
export function useSubscribedState<T>(
  subscribedState: T | (() => T),
  dependencyList?: React.DependencyList,
): [T, Setter<T>, DisableSetter] {
  const [value, setValue] = useState(subscribedState);

  const subscribedValue =
    subscribedState instanceof Function ? subscribedState() : subscribedState;

  useMountedEffect(() => {
    const subscribedValueType = typeof subscribedValue;

    switch (subscribedValueType) {
      case 'object':
      case 'function':
        if (!isEqual(value, subscribedValue)) setValue(subscribedValue);
        break;
      default:
        setValue(subscribedValue);
    }
  }, dependencyList || [subscribedValue]);

  const isSetterDisabledRef = useRef(false);
  const isSetterDisabled = isSetterDisabledRef.current;

  const {
    current: [setter, disableSetter],
  } = useRef([
    ((newValue) => {
      if (!isSetterDisabled) setValue(newValue);
    }) satisfies Setter<T>,

    () => {
      isSetterDisabledRef.current = true;
    },
  ]);

  return [isSetterDisabled ? subscribedValue : value, setter, disableSetter];
}

export type SubscribedState<T> = ReturnType<typeof useSubscribedState<T>>;
