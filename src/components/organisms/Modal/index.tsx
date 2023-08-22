import { createPortal } from 'react-dom';

import { ModalContextProvider } from '@contexts/ModalContext';
import {
  useOpeningTransitionState,
  OPENING_TRANSITION,
  usePreventBackgroundScroll,
  useDarkMode,
} from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import { ModalHeader } from './ModalHeader';
import styles from './index.module.scss';

export type { ModalHeaderProps } from './ModalHeader';

interface ModalCloseEvent {
  preventDefaultClose: () => void;
}
export interface ModalProps extends HTMLTagProps<'article'> {
  zIndex?: number;
  blurredBackground?: boolean;
  opened?: boolean;
  onClose?: (e: ModalCloseEvent) => void;
  backgroundScroll?: boolean;
}

export const Modal = Object.assign(
  ({
    //* Modal props
    zIndex = 100,
    blurredBackground = true,
    opened = false,
    onClose,
    backgroundScroll = false,

    //* HTML article props
    className,
    children,
    ...restArticleProps
  }: ModalProps) => {
    const [openingTransition, setOpeningTransition, preventDefaultClose] =
      useOpeningTransitionState({
        openingTransition: opened
          ? OPENING_TRANSITION.OPENED
          : OPENING_TRANSITION.CLOSED,
        closingDuration: 200,
      });

    const handleClose = () => {
      onClose?.({ preventDefaultClose });
      setOpeningTransition(false);
    };

    usePreventBackgroundScroll({
      backgroundScroll,
      isPrevent: !!openingTransition,
    });

    const { isDarkMode } = useDarkMode();

    return openingTransition ? (
      createPortal(
        <div
          style={{
            zIndex,
          }}
          className={`${styles['modal-container']} ${
            openingTransition === OPENING_TRANSITION.CLOSING && styles.closing
          }`}
        >
          <div
            className={cleanClassName(
              `${styles['background-layer']} ${
                blurredBackground && styles.blurred
              }`,
            )}
            onClick={handleClose}
          />
          <article
            {...restArticleProps}
            className={cleanClassName(
              `${styles.modal} ${isDarkMode && styles.dark} ${className}`,
            )}
          >
            <ModalContextProvider onClose={handleClose}>
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
    Header: ModalHeader,
  },
);
