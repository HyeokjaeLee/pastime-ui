import { createPortal } from 'react-dom';
import { X } from 'react-feather';

import { Button } from '@components/molecules';
import {
  useOpeningTransitionState,
  OPENING_TRANSITION,
  useMountedEffect,
} from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

interface ModalProps extends HTMLTagProps<'section'> {
  stackIndex?: 1 | 2 | 3 | 4 | 5;
  blurredBackground?: boolean;
  opened?: boolean;
  onClose?: () => void;
}

export const Modal = ({
  //* Modal props
  stackIndex = 1,
  blurredBackground = true,
  opened = true,
  onClose,

  //* HTML section props
  className,
  ...restSectionProps
}: ModalProps) => {
  const [openingTransition, setOpeningTransition] = useOpeningTransitionState({
    openingTransition: opened
      ? OPENING_TRANSITION.OPENED
      : OPENING_TRANSITION.CLOSED,
    closingDuration: 200,
  });

  useMountedEffect(() => setOpeningTransition(opened), [opened]);

  const handleClose = () => {
    setOpeningTransition(false);
    onClose?.();
  };

  return openingTransition ? (
    createPortal(
      <div
        className={`${styles['modal-container']} ${
          styles[`stack-index-${stackIndex}`]
        } ${
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
        <section
          {...restSectionProps}
          className={cleanClassName(`${styles.modal} ${className}`)}
        >
          <header className={styles.header}>
            <div>ss</div>
            <Button icon={<X />} size="small" theme="clear" />
          </header>
          <main className={styles.main}>
            <div
              style={{
                width: '90%',
                height: '100vh',
              }}
            />
          </main>
          <footer>ss</footer>
        </section>
      </div>,
      document.body,
    )
  ) : (
    <></>
  );
};
