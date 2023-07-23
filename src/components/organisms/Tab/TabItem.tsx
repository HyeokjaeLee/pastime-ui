import { Button } from '@components/molecules';
import type { ButtonProps } from '@components/molecules';
import { useTabContext } from '@contexts/TabContext';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './TabItem.module.scss';

export interface TabItemProps
  extends Omit<HTMLTagProps<'li'>, 'children' | 'onClick'>,
    Pick<
      ButtonProps,
      'disabled' | 'children' | 'onClick' | 'icon' | 'iconDirection'
    > {
  active?: boolean;
}

export const TabItem = ({
  //* TabItem props
  active = false,

  //* Button props
  children,
  disabled,
  onClick,
  icon,
  iconDirection,

  //* HTML li props
  className,
  ...restLiProps
}: TabItemProps) => {
  const { size } = useTabContext();
  return (
    <li
      {...restLiProps}
      className={cleanClassName(
        `${styles['tab-item']} ${
          active && styles['tab-item-active']
        } ${className}`,
      )}
    >
      <Button
        disabled={disabled}
        size={size}
        onClick={onClick}
        theme="clear"
        className={styles['item-content']}
        icon={icon}
        iconDirection={iconDirection}
      >
        {children}
      </Button>
    </li>
  );
};
