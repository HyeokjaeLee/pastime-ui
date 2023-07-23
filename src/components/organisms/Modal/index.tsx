import { createPortal } from 'react-dom';

import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

interface ModalProps extends HTMLTagProps<'section'> {
  stackIndex?: 1 | 2 | 3 | 4 | 5;
  blurredBackground?: boolean;
}

export const Modal = ({
  stackIndex = 1,
  blurredBackground = true,
  className,
  ...restSectionProps
}: ModalProps) => {
  const stackIndexClassName = `stack-index-${stackIndex}`;

  return createPortal(
    <>
      <div
        className={cleanClassName(
          `${styles['background-layer']} ${stackIndexClassName} ${
            blurredBackground && styles.blured
          }`,
        )}
      />
      <section
        {...restSectionProps}
        className={cleanClassName(
          `${styles.modal} ${stackIndexClassName} ${className}`,
        )}
      />
    </>,
    document.body,
  );
};
