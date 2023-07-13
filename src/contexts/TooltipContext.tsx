import { throttle } from 'lodash-es';

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from 'react';

import { useMountedEffect } from '@hooks';

interface Location {
  top: number;
  left: number;
}

type TooltipDisplay = boolean | 'closing';

type MouseEventHandler = React.MouseEventHandler<HTMLDivElement>;

interface TooltipContextValue {
  display: TooltipDisplay;
  locationState: [
    Location,
    React.Dispatch<React.MouseEvent<HTMLDivElement, MouseEvent>>,
  ];

  mouseEventHandler: {
    handleMouseEnter: MouseEventHandler;
    handleMouseLeave: MouseEventHandler;
  };
}

const TooltipContext = createContext<TooltipContextValue | undefined>(
  undefined,
);

type LocationReducer = (
  location: Location,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
) => Location;

const locationReducer: LocationReducer = throttle(
  ((_, event) => ({
    left: event.clientX,
    top: event.clientY + 10,
  })) satisfies LocationReducer,
  100,
);

export interface TooltipContextProviderProps {
  children?: React.ReactNode;
  mouseEnterDelay?: number;
}

export const TooltipContextProvider = ({
  children,
  mouseEnterDelay = 200,
}: TooltipContextProviderProps) => {
  const [hovered, setHovered] = useState(false);
  const [display, setDisplay] = useState<TooltipDisplay>(false);
  const locationState = useReducer(locationReducer, { left: 0, top: 0 });

  useMountedEffect(() => {
    if (display === 'closing') {
      const closeTimer = setTimeout(() => setDisplay(false), 100);
      return () => clearTimeout(closeTimer);
    }
  }, [display]);

  useMountedEffect(() => {
    if (hovered) {
      const openTimer = setTimeout(() => setDisplay(true), mouseEnterDelay);
      return () => clearTimeout(openTimer);
    }
    setDisplay((prev) => (prev === true ? 'closing' : prev));
  }, [hovered]);

  const tooltipContextValue = useMemo(
    () => ({
      display,
      locationState,
      mouseEventHandler: {
        handleMouseEnter: () => setHovered(true),
        handleMouseLeave: () => setHovered(false),
      },
    }),
    [display, locationState],
  );

  return (
    <TooltipContext.Provider value={tooltipContextValue}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (context === undefined) {
    throw new Error(
      'useTooltipContext must be used within a TooltipContextProvider',
    );
  }

  return context;
};
