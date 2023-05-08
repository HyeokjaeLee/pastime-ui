import { useEffect } from 'react';

import styles from './index.module.scss';
import { useClosingState } from '../../../hooks';
import { cleanClassName } from '../../../utils';

export interface BackgroundLayerProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  focused?: boolean;
  blur?: boolean;
  className?: string;
  bodyScroll?: boolean;
  priority?: 1 | 2 | 3;
}

export const BackgroundLayer = ({
  children,
  onClick,
  focused,
  blur,
  className,
  bodyScroll = false,
  priority = 3,
}: BackgroundLayerProps) => {
  const [focusStatus] = useClosingState(focused);
  const isClosing = focusStatus === 'closing';

  useEffect(() => {
    if (!bodyScroll) {
      const { classList } = document.body;
      if (focused) classList.add(styles['fixed-body']);

      return () => classList.remove(styles['fixed-body']);
    }
  }, [focused, bodyScroll]);

  const priorityClassName = styles[`priority-${priority}`];

  return (
    <>
      <div
        className={cleanClassName(
          `${styles['focus-layer']} ${
            focusStatus && priorityClassName
          } ${className}`,
        )}
      >
        {children}
      </div>
      {focusStatus ? (
        <div
          onClick={onClick}
          className={cleanClassName(
            `${styles['background-layer']} ${
              isClosing && styles.closing
            } ${priorityClassName} ${blur && styles.blur}`,
          )}
        />
      ) : null}
    </>
  );
};
