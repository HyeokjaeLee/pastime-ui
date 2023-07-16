import { createContext, useContext, useMemo } from 'react';

import { useOpeningTransitionState, useTooltipLocationState } from '@hooks';
import type { OpeningTransitionState, TooltipLocationState } from '@hooks';

interface TooltipContextValue {
  locationState: TooltipLocationState;
  tooltipState: OpeningTransitionState;
}

const TooltipContext = createContext<TooltipContextValue | undefined>(
  undefined,
);

export interface TooltipContextProviderProps {
  children?: React.ReactNode;
  mouseEnterDelay?: number;
}

export const TooltipContextProvider = ({
  children,
  mouseEnterDelay = 200,
}: TooltipContextProviderProps) => {
  const tooltipState = useOpeningTransitionState({
    closingDuration: 100,
    openingDuration: mouseEnterDelay,
  });

  const locationState = useTooltipLocationState();

  const tooltipContextValue: TooltipContextValue = useMemo(
    () => ({
      locationState,
      tooltipState,
    }),
    [locationState, tooltipState],
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
