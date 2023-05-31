import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';
import { Button } from '../../atoms';

import type { ButtonProps } from '../../atoms';

type HTMLUListProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export interface TabProps
  extends Omit<HTMLUListProps, 'size' | 'ref'>,
    Pick<ButtonProps, 'size'> {
  theme?: Extract<ButtonProps['theme'], 'dark' | 'light'>;
}

const TabContext = createContext<Pick<TabProps, 'size' | 'theme'>>({});

const TabMain = ({
  //* Tab props
  theme = 'light',

  //* Button props
  size,

  //* HTML ul props
  className,
  children,
  ...restUlProps
}: TabProps) => {
  const tabContextValue = useMemo(() => ({ size, theme }), [size, theme]);
  const ref = useRef<HTMLUListElement>(null);
  const [isOverflowX, setIsOverflowX] = useState(false);
  useEffect(() => {
    const uListElement = ref.current;
    if (uListElement)
      setIsOverflowX(uListElement.scrollWidth > uListElement.clientWidth);
  }, [ref]);

  return (
    <ul
      {...restUlProps}
      ref={ref}
      className={cleanClassName(
        `${styles.tab} ${
          isOverflowX && styles[`overflow-${theme}`]
        } ${className}`,
      )}
    >
      <TabContext.Provider value={tabContextValue}>
        {children}
      </TabContext.Provider>
    </ul>
  );
};

type HTMLLIProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export interface TabItemProps
  extends Omit<HTMLLIProps, 'children' | 'onClick'>,
    Pick<
      ButtonProps,
      'disabled' | 'children' | 'onClick' | 'icon' | 'iconDirection'
    > {
  active?: boolean;
}

const TabItem = ({
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
  const { theme, size } = useContext(TabContext);
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
        theme={theme}
        className={styles['item-content']}
        icon={icon}
        iconDirection={iconDirection}
      >
        {children}
      </Button>
    </li>
  );
};

export const Tab = Object.assign(TabMain, {
  Item: TabItem,
});
