import type { ButtonProps } from '@components/molecules';
import { TabContextProvider } from '@contexts/TabContext';
import { useDarkMode, useTabOverflowX } from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import { TabItem } from './TabItem';
import styles from './index.module.scss';

export type { TabItemProps } from './TabItem';

export type TabProps = Omit<HTMLTagProps<'ul'>, 'size' | 'ref'> &
  Pick<ButtonProps, 'size'>;

export const Tab = Object.assign(
  ({
    //* Button props
    size,

    //* HTML ul props
    className,
    children,
    ...restUlProps
  }: TabProps) => {
    const { isOverflowX, ref } = useTabOverflowX();

    const { isDarkMode } = useDarkMode();

    return (
      <ul
        {...restUlProps}
        ref={ref}
        className={cleanClassName(
          `${styles.tab} ${
            isOverflowX && styles[`overflow-${isDarkMode ? 'dark' : 'light'}`]
          } ${className}`,
        )}
      >
        <TabContextProvider size={size}>{children}</TabContextProvider>
      </ul>
    );
  },
  {
    Item: TabItem,
  },
);
