import type { MouseEventHandler } from 'react';
import { createContext } from 'react';

export interface TooltipLocation {
  top: number;
  left: number;
}

type HandleMouse = MouseEventHandler<HTMLDivElement> | undefined;

export type TooltipDisplay = boolean | 'closing';

export interface TooltipContextValue {
  display: TooltipDisplay;
  location?: TooltipLocation;
  handleMouseMove?: HandleMouse;
  handleMouseEnterLeave?: {
    onMouseEnter: HandleMouse;
    onMouseLeave: HandleMouse;
  };
}

export const TooltipContext = createContext<TooltipContextValue>({
  display: false,
  location: {
    left: 0,
    top: 0,
  },
});
