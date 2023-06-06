import { throttle } from 'lodash-es';

import { useState, createContext, useMemo, useContext } from 'react';
import type { MouseEventHandler } from 'react';

import styles from './index.module.scss';
import { useMountedEffect } from '../../../hooks';
import { cleanClassName } from '../../../utils';

type HandleMouse = MouseEventHandler<HTMLDivElement> | undefined;

type Displayed = boolean | 'closing';
interface Coordinates {
  left: number;
  top: number;
}

interface TooltipContextType {
  displayed: Displayed;
  coordinates?: Coordinates;
  handleMouseMove?: HandleMouse;
  handleMouseEnterLeave?: {
    onMouseEnter: HandleMouse;
    onMouseLeave: HandleMouse;
  };
}

const TooltipContext = createContext<TooltipContextType>({
  displayed: false,
  coordinates: {
    left: 0,
    top: 0,
  },
});

interface CommonProps {
  children?: React.ReactNode;
  className?: string;
}

export interface TooltipProps {
  children?: React.ReactNode;
  mouseEnterDelay?: number;
}

const TooltipMain = ({ children, mouseEnterDelay = 200 }: TooltipProps) => {
  const [hovered, setHovered] = useState(false);
  const [displayed, setDisplayed] = useState<Displayed>(false);
  const [coordinates, setCoordinates] = useState<Coordinates>();

  useMountedEffect(() => {
    if (displayed === 'closing') {
      const closeTimer = setTimeout(() => setDisplayed(false), 100);
      return () => clearTimeout(closeTimer);
    }
  }, [displayed]);

  useMountedEffect(() => {
    if (hovered) {
      const openTimer = setTimeout(() => setDisplayed(true), mouseEnterDelay);
      return () => clearTimeout(openTimer);
    }
    setDisplayed((prev) => (prev === true ? 'closing' : prev));
  }, [hovered]);

  const throttledSetCoordinates = useMemo(
    () =>
      throttle((e) => {
        setCoordinates({
          left: e.clientX,
          top: e.clientY + 10,
        });
      }, 100),
    [],
  );

  const tooltipContext = useMemo(
    () => ({
      displayed,
      coordinates,
      handleMouseMove: throttledSetCoordinates,
      handleMouseEnterLeave: {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
      },
    }),
    [coordinates, displayed, throttledSetCoordinates],
  );

  return (
    <TooltipContext.Provider value={tooltipContext}>
      {children}
    </TooltipContext.Provider>
  );
};

export type TooltipAreaProps = CommonProps;

const TooltipArea = ({ children, className }: TooltipAreaProps) => {
  const { handleMouseMove, handleMouseEnterLeave } = useContext(TooltipContext);
  return (
    <div
      {...handleMouseEnterLeave}
      className={cleanClassName(`${styles.tooltip} ${className}`)}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export type TooltipContentProps = CommonProps;

const TooltipContent = ({ children, className }: TooltipContentProps) => {
  const { displayed, coordinates, handleMouseEnterLeave } =
    useContext(TooltipContext);

  return displayed ? (
    <div
      {...handleMouseEnterLeave}
      className={`${styles['tooltip-message-container']} ${
        displayed === 'closing' && styles.closing
      }`}
      style={coordinates}
    >
      <div className={styles.triangle} />
      <div
        className={cleanClassName(
          `${styles['tooltip-message-wrap']} ${className}`,
        )}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export const Tooltip = Object.assign(TooltipMain, {
  Area: TooltipArea,
  Content: TooltipContent,
});
