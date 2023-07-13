import { useMemo } from 'react';

import { AccordionContext } from '@contexts/AccordionContext';
import type { AccordionContextValue } from '@contexts/AccordionContext';
import { useDarkMode, useSubscribedState } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import { AccordionContents } from './AccordionContents';
import { AccordionTitle } from './AccordionTitle';
import styles from './index.module.scss';

export type { AccordionTitleProps } from './AccordionTitle';
export type { AccordionContentsProps } from './AccordionContents';

export type AccordionProps = HTMLTagProps<'dl'> & AccordionContextValue;

export const Accordion = Object.assign(
  ({
    //* Accordion props
    opened: deliveredOpened = false,
    size = 'medium',

    //* HTML dl props
    children,
    className,
    ...restDlProps
  }: AccordionProps) => {
    const [opened, setOpened] = useSubscribedState(deliveredOpened);

    const accordionContextValue = useMemo(
      () => ({
        opened,
        setOpened,
        size,
      }),
      [opened, setOpened, size],
    );

    const { isDarkMode } = useDarkMode();

    return (
      <dl
        {...restDlProps}
        className={cleanClassName(
          `${styles['accordian-container']} ${
            isDarkMode && styles.dark
          } ${className}`,
        )}
      >
        <AccordionContext.Provider value={accordionContextValue}>
          {children}
        </AccordionContext.Provider>
      </dl>
    );
  },
  {
    Title: AccordionTitle,
    Contents: AccordionContents,
  },
);
