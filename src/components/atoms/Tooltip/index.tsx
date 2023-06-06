import { throttle } from 'lodash-es';

import { useState, useMemo, useContext } from 'react';

import styles from './index.module.scss';
import { TooltipContext } from '../../../contexts';
import { useMountedEffect } from '../../../hooks';
import { cleanClassName } from '../../../utils';

import type {
  TooltipDisplay,
  TooltipLocation,
  TooltipContextValue,
} from '../../../contexts';

export interface TooltipProps {
  children?: React.ReactNode;
  mouseEnterDelay?: number;
}

const TooltipMain = ({ children, mouseEnterDelay = 200 }: TooltipProps) => {
  const [hovered, setHovered] = useState(false);
  const [display, setDisplay] = useState<TooltipDisplay>(false);
  const [location, setLocation] = useState<TooltipLocation>();

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

  const throttledSetCoordinates = useMemo(
    () =>
      throttle((e) => {
        setLocation({
          left: e.clientX,
          top: e.clientY + 10,
        });
      }, 100),
    [],
  );

  const tooltipContext: TooltipContextValue = useMemo(
    () => ({
      display,
      location,
      handleMouseMove: throttledSetCoordinates,
      handleMouseEnterLeave: {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
      },
    }),
    [location, display, throttledSetCoordinates],
  );

  return (
    <TooltipContext.Provider value={tooltipContext}>
      {children}
    </TooltipContext.Provider>
  );
};

export type TooltipAreaProps = HTMLDivProps;

const TooltipArea = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  ...restDivProps
}: TooltipAreaProps) => {
  const { handleMouseMove, handleMouseEnterLeave } = useContext(TooltipContext);

  return (
    <div
      {...restDivProps}
      onMouseEnter={(e) => {
        handleMouseEnterLeave?.onMouseEnter?.(e);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        handleMouseEnterLeave?.onMouseLeave?.(e);
        onMouseLeave?.(e);
      }}
      className={cleanClassName(`${styles.tooltip} ${className}`)}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export interface TooltipContentProps extends Omit<HTMLDivProps, 'theme'> {
  theme?: 'light' | 'dark';
}

const TooltipContent = ({
  //* TooltipContent props
  theme = 'light',

  //* HTML div props
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  style,
  ...restDivProps
}: TooltipContentProps) => {
  const { display, location, handleMouseEnterLeave } =
    useContext(TooltipContext);

  return display ? (
    <div
      {...restDivProps}
      onMouseEnter={(e) => {
        handleMouseEnterLeave?.onMouseEnter?.(e);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        handleMouseEnterLeave?.onMouseLeave?.(e);
        onMouseLeave?.(e);
      }}
      className={`${styles['tooltip-message-container']} ${
        display === 'closing' && styles.closing
      }`}
      style={{
        ...style,
        left: location?.left,
        top: location?.top,
      }}
    >
      <div className={`${styles.triangle} ${styles[theme]}`} />
      <div
        className={cleanClassName(
          `${styles['tooltip-message-wrap']} ${styles[theme]} ${className}`,
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
