import { createPortal } from 'react-dom';

import { ModalContextProvider } from '@contexts/ModalContext';
import {
  MODAL_CLOSING_STATE,
  useBodyPortalStyle,
  useDarkMode,
  FixedDarkMode,
  useModalClosing,
} from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import { ModalHeader } from './ModalHeader';
import styles from './index.module.scss';

export type { ModalHeaderProps } from './ModalHeader';

export interface ModalProps extends HTMLTagProps<'article'> {
  zIndex?: number;
  blurredBackground?: boolean;
  opened?: boolean;
  onClose?: () => void;
  backgroundScroll?: boolean;
  fixedDarkMode?: FixedDarkMode;
}

export const Modal = Object.assign(
  ({
    //* Modal props
    zIndex = 100,
    blurredBackground = true,
    opened = false,
    onClose,
    backgroundScroll = false,
    fixedDarkMode,

    //* HTML article props
    className,
    children,
    ...restArticleProps
  }: ModalProps) => {
    const openingTransition = useModalClosing({
      opened,
      closingDuration: 200,
    });

    useBodyPortalStyle({
      backgroundScroll,
      active: !!openingTransition,
    });

    const { isDarkMode } = useDarkMode(fixedDarkMode);

    return openingTransition ? (
      createPortal(
        <div
          style={{
            zIndex,
          }}
          className={cleanClassName(
            `${styles['modal-container']} ${
              openingTransition === MODAL_CLOSING_STATE.CLOSING &&
              styles.closing
            }`,
          )}
        >
          <div
            className={cleanClassName(
              `${styles['background-layer']} ${
                blurredBackground && styles.blurred
              }`,
            )}
            onClick={onClose}
          />
          <article
            {...restArticleProps}
            className={cleanClassName(
              `${styles.modal} ${isDarkMode && styles.dark} ${className}`,
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
    Header: ModalHeader,
  },
);
