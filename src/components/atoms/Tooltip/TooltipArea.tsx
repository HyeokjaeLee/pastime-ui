import { useTooltipContext } from '@contexts/TooltipContext';
import { useTooltipCloseOnScroll } from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './TooltipArea.module.scss';

export type TooltipAreaProps = HTMLTagProps<'div'>;

export const TooltipArea = ({
  //* HTML div props
  className,
  onMouseMove,
  onMouseLeave,
  ...restDivProps
}: TooltipAreaProps) => {
  const {
    tooltipState: [, setOpeningTransition],
    locationState: [, dispatchLocation],
  } = useTooltipContext();

  useTooltipCloseOnScroll();

  return (
    <div
      {...restDivProps}
      onMouseLeave={(e) => {
        setOpeningTransition(false);
        onMouseLeave?.(e);
      }}
      className={cleanClassName(`${styles.tooltip} ${className}`)}
      onMouseMove={(e) => {
        setOpeningTransition(true);
        dispatchLocation(e);
        onMouseMove?.(e);
      }}
    />
  );
};
