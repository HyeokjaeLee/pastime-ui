import { isEqual } from 'lodash-es';

import { useRef, useState } from 'react';

import { useMountedEffect } from './useMountedEffect';

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export type DisableSetter = () => void;

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

  let isSetterDisabled = false;

  const {
    current: [setter, disableSetter],
  } = useRef([
    ((newValue) => {
      if (!isSetterDisabled) setValue(newValue);
    }) satisfies Setter<T>,

    () => {
      isSetterDisabled = true;
    },
  ]);

  return [value, setter, disableSetter];
}

export type SubscribedState<T> = ReturnType<typeof useSubscribedState<T>>;
