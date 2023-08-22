import { X } from 'react-feather';

import { Button } from '@components/molecules';
import { useModalContext } from '@contexts/ModalContext';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './DrawerHeader.module.scss';

export interface DrawerHeaderProps extends HTMLTagProps<'header'> {
  closeButton?: boolean;
}

export const DrawerHeader = ({
  //* Drawer.Header props
  closeButton = false,

  //* HTML header props
  className,
  children,
  ...restHeaderProps
}: DrawerHeaderProps) => {
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
