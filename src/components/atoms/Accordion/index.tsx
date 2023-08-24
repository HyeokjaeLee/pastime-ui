import { AccordionContextProvider } from '@contexts/AccordionContext';
import type { AccordionContextProviderProps } from '@contexts/AccordionContext';
import { useDarkMode } from '@hooks';
import type { FixedDarkMode } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import { AccordionContents } from './AccordionContents';
import { AccordionTitle } from './AccordionTitle';
import styles from './index.module.scss';

export type { AccordionTitleProps } from './AccordionTitle';
export type { AccordionContentsProps } from './AccordionContents';

export interface AccordionProps
  extends HTMLTagProps<'dl'>,
    Pick<AccordionContextProviderProps, 'opened' | 'size'> {
  fixedDarkMode?: FixedDarkMode;
}

export const Accordion = Object.assign(
  ({
    //* Accordion props
    opened = false,
    size = 'medium',
    fixedDarkMode,

    //* HTML dl props
    children,
    className,
    ...restDlProps
  }: AccordionProps) => {
    const { isDarkMode } = useDarkMode(fixedDarkMode);

    return (
      <dl
        {...restDlProps}
        className={cleanClassName(
          `${styles['accordian-container']} ${
            isDarkMode && styles.dark
          } ${className}`,
        )}
      >
        <AccordionContextProvider
          opened={opened}
          size={size}
          isDarkMode={isDarkMode}
        >
          {children}
        </AccordionContextProvider>
      </dl>
    );
  },
  {
    Title: AccordionTitle,
    Contents: AccordionContents,
  },
);
