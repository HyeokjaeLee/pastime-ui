import { useEffect, useMemo } from 'react';

import styles from './index.module.scss';
import { useOpeningState } from '../../../hooks';
import { cleanClassName } from '../../../utils';

type HTMLDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FocusLayerProps
  extends Omit<HTMLDivProps, 'style' | 'onBlur'> {
  focused?: boolean;
  blur?: boolean;
  backgroundScroll?: boolean;
  style?: Omit<React.CSSProperties, 'zIndex'> & { zIndex?: number };
  onBlur?: HTMLDivProps['onClick'];
}

export const FocusLayer = ({
  //* FocusLayer props
  focused,
  blur = false,
  backgroundScroll = false,
  style,
  onBlur,

  //* HTML div props
  className,
  children,
  ...restDivProps
}: FocusLayerProps) => {
  const [focusStatus] = useOpeningState(focused);
  const isClosing = focusStatus === 'closing';

  const [focusLayerStyle, backgroundLayerStyle] = useMemo(() => {
    const zIndex = 100 + (style?.zIndex ?? 0);
    return [{ ...style, zIndex }, { zIndex: zIndex - 1 }];
  }, [style]);

  useEffect(() => {
    if (!backgroundScroll) {
      const { classList } = document.body;
      if (focused) classList.add(styles['fixed-body']);
      return () => classList.remove(styles['fixed-body']);
    }
  }, [focused, backgroundScroll]);

  return (
    <>
      <div
        {...restDivProps}
        style={focusLayerStyle}
        className={cleanClassName(`${styles['focus-layer']} ${className}`)}
      >
        {children}
      </div>
      {focusStatus ? (
        <div
          onClick={onBlur}
          style={backgroundLayerStyle}
          className={cleanClassName(
            `${styles['background-layer']} ${isClosing && styles.closing} ${
              blur && styles.blur
            }`,
          )}
        />
      ) : null}
    </>
  );
};
