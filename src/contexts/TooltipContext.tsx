import { createContext, useContext, useMemo } from 'react';

import {
  useDarkMode,
  useOpeningTransitionState,
  useTooltipLocationState,
} from '@hooks';
import type {
  FixedDarkMode,
  OpeningTransitionState,
  TooltipLocationState,
} from '@hooks';

interface TooltipContextValue {
  locationState: TooltipLocationState;
  tooltipState: OpeningTransitionState;
  isDarkMode: boolean;
}

const TooltipContext = createContext<TooltipContextValue | undefined>(
  undefined,
);

export interface TooltipContextProviderProps {
  children?: React.ReactNode;
  mouseEnterDelay?: number;
  fixedDarkMode?: FixedDarkMode;
}

export const TooltipContextProvider = ({
  children,
  mouseEnterDelay = 200,
  fixedDarkMode,
}: TooltipContextProviderProps) => {
  const tooltipState = useOpeningTransitionState({
    closingDuration: 100,
    openingDuration: mouseEnterDelay,
  });

  const locationState = useTooltipLocationState();

  const { isDarkMode } = useDarkMode(fixedDarkMode);

  const tooltipContextValue: TooltipContextValue = useMemo(
    () => ({
      locationState,
      tooltipState,
      isDarkMode,
    }),
    [locationState, tooltipState, isDarkMode],
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
