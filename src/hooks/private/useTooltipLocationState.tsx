import { throttle } from 'lodash-es';

import { useReducer, useRef } from 'react';

interface Location {
  top: number;
  left: number;
}

type LocationReducer = (
  location: Location,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => Location;

const locationReducer: LocationReducer = (_, event) => ({
  left: event.clientX,
  top: event.clientY + 10,
});

export const useTooltipLocationState = () => {
  const [location, dispatchLocation] = useReducer(locationReducer, {
    left: 0,
    top: 0,
  });

  const { current: throttledDispatchLocation } = useRef(
    throttle(dispatchLocation, 100),
  );

  return [location, throttledDispatchLocation] as const;
};

export type TooltipLocationState = ReturnType<typeof useTooltipLocationState>;
