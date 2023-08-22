import { X } from 'react-feather';

import { Button } from '@components/molecules';
import { useModalContext } from '@contexts/ModalContext';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './ModalHeader.module.scss';

export interface ModalHeaderProps extends HTMLTagProps<'header'> {
  closeButton?: boolean;
}

export const ModalHeader = ({
  //* Modal.Header props
  closeButton = false,

  //* HTML header props
  className,
  children,
  ...restHeaderProps
}: ModalHeaderProps) => {
  const { onClose } = useModalContext();

  return (
    <header
      {...restHeaderProps}
      className={cleanClassName(`${styles.header} ${className}`)}
    >
      <div>{children}</div>
      {closeButton ? (
        <Button size="small" theme="clear" onClick={onClose} icon={<X />} />
      ) : null}
    </header>
  );
};
