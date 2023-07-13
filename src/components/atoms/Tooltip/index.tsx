import { TooltipContextProvider } from '@contexts/TooltipContext';

import { TooltipArea } from './TooltipArea';
import { TooltipContent } from './TooltipContent';

export type { TooltipContextProviderProps as TooltipProps } from '@contexts/TooltipContext';
export type { TooltipAreaProps } from './TooltipArea';
export type { TooltipContentProps } from './TooltipContent';

export const Tooltip = Object.assign(TooltipContextProvider, {
  Area: TooltipArea,
  Content: TooltipContent,
});
