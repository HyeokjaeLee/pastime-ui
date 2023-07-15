import { createPortal } from 'react-dom';

import { useTooltipContext } from '@contexts/TooltipContext';
import { useDarkMode } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './TooltipContent.module.scss';

export type TooltipContentProps = HTMLTagProps<'div'>;

export const TooltipContent = ({
  //* HTML div props
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  style,
  ...restDivProps
}: TooltipContentProps) => {
  const {
    display,
    locationState: [location],
    mouseEventHandler,
  } = useTooltipContext();

  const { isDarkMode } = useDarkMode();

  const darkModeClassName = isDarkMode && styles.dark;

  return display
    ? createPortal(
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
          className={`${styles['tooltip-message-container']} ${
            display === 'closing' && styles.closing
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
