import { createPortal } from 'react-dom';

import { useTooltipContext } from '@contexts/TooltipContext';
import { useDarkMode, OPENING_TRANSITION } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './TooltipContent.module.scss';

export interface TooltipContentProps
  extends Omit<HTMLTagProps<'div'>, 'styles'> {
  style?: Omit<React.CSSProperties, 'left' | 'top'>;
}

export const TooltipContent = ({
  //* TooltipContent props
  style,

  //* HTML div props
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  ...restDivProps
}: TooltipContentProps) => {
  const {
    tooltipState: [openingTransition, setOpeningTransition],
    locationState: [location],
  } = useTooltipContext();

  const { isDarkMode } = useDarkMode();

  const darkModeClassName = isDarkMode && styles.dark;

  return openingTransition
    ? createPortal(
        <div
          {...restDivProps}
          onMouseEnter={(e) => {
            setOpeningTransition(true);
            onMouseEnter?.(e);
          }}
          onMouseLeave={(e) => {
            setOpeningTransition(false);
            onMouseLeave?.(e);
          }}
          className={`${styles['tooltip-message-container']} ${
            openingTransition === OPENING_TRANSITION.CLOSING && styles.closing
          }`}
          style={{
            ...style,
            left: location.left,
            top: location.top,
          }}
        >
          <div
            className={cleanClassName(
              `${styles.triangle} ${darkModeClassName}`,
            )}
          />
          <div
            className={cleanClassName(
              `${styles['tooltip-message-wrap']} ${darkModeClassName} ${className}`,
            )}
          >
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
};
