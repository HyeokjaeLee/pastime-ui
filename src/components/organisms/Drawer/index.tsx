import { createPortal } from 'react-dom';

import { ModalContextProvider } from '@contexts/ModalContext';
import {
  usePreventBackgroundScroll,
  useDarkMode,
  useModalClosing,
  MODAL_CLOSING_STATE,
} from '@hooks';
import { cleanClassName } from '@utils';

import { DrawerHeader } from './DrawerHeader';
import styles from './index.module.scss';

import type { ModalProps } from '../Modal/index';

export type { DrawerHeaderProps } from './DrawerHeader';

export interface DrawerProps extends ModalProps {
  drawerDirection?: 'bottom' | 'top' | 'left' | 'right';
}

export const Drawer = Object.assign(
  ({
    //* Drawer props
    zIndex = 100,
    blurredBackground = true,
    opened = false,
    onClose,
    backgroundScroll = false,
    drawerDirection = 'right',
    fixedDarkMode,

    //* HTML article props
    className,
    children,
    ...restArticleProps
  }: DrawerProps) => {
    const openingTransition = useModalClosing({
      opened,
      closingDuration: 200,
    });

    usePreventBackgroundScroll({
      backgroundScroll,
      isPrevent: !!openingTransition,
    });

    const closingClassName =
      openingTransition === MODAL_CLOSING_STATE.CLOSING && styles.closing;

    const { isDarkMode } = useDarkMode(fixedDarkMode);

    return openingTransition ? (
      createPortal(
        <div
          style={{
            zIndex,
          }}
          className={`${styles['drawer-container']} ${styles[drawerDirection]}`}
        >
          <div
            className={cleanClassName(
              `${styles['background-layer']} ${
                blurredBackground && styles.blurred
              } ${closingClassName} ${drawerDirection}`,
            )}
            onClick={onClose}
          />
          <article
            {...restArticleProps}
            className={cleanClassName(
              `${styles.drawer} ${styles[drawerDirection]} ${
                isDarkMode && styles.dark
              } ${closingClassName} ${className}`,
            )}
          >
            <ModalContextProvider onClose={onClose}>
              {children}
            </ModalContextProvider>
          </article>
        </div>,
        document.body,
      )
    ) : (
      <></>
    );
  },
  {
    Header: DrawerHeader,
  },
);
