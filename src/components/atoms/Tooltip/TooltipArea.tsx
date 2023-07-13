import { useTooltipContext } from '@contexts/TooltipContext';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './TooltipArea.module.scss';

export type TooltipAreaProps = HTMLTagProps<'div'>;

export const TooltipArea = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  ...restDivProps
}: TooltipAreaProps) => {
  const {
    locationState: [, dispatchLocation],
    mouseEventHandler,
  } = useTooltipContext();

  return (
    <div
      {...restDivProps}
      onMouseEnter={(e) => {
        mouseEventHandler.handleMouseEnter(e);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        mouseEventHandler.handleMouseLeave(e);
        onMouseLeave?.(e);
      }}
      className={cleanClassName(`${styles.tooltip} ${className}`)}
      onMouseMove={dispatchLocation}
    >
      {children}
    </div>
  );
};
