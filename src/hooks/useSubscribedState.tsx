import { isEqual } from 'lodash-es';

import { useState } from 'react';

import { useMountedEffect } from './useMountedEffect';

export function useSubscribedState<T>(
  subscribedState: T | (() => T),
  dependencyList?: React.DependencyList,
) {
  const state = useState(subscribedState);

  const subscribedValue =
    subscribedState instanceof Function ? subscribedState() : subscribedState;

  useMountedEffect(() => {
    const subscribedValueType = typeof subscribedValue;
    const [value, setValue] = state;

    switch (subscribedValueType) {
      case 'object':
      case 'function':
        if (!isEqual(value, subscribedValue)) setValue(subscribedValue);
        break;
      default:
        setValue(subscribedValue);
    }
  }, dependencyList || [subscribedValue]);

  return state;
}
