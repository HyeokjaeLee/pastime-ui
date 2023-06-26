import { useMemo } from 'react';

import { AccordionContext } from '@contexts';
import type { AccordionContextValue } from '@contexts';
import { useSubscribedState } from '@hooks';
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
    return (
      <dl
        {...restDlProps}
        className={cleanClassName(
          `${styles['accordian-container']} ${className}`,
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
