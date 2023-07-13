import { AccordionContextProvider } from '@contexts/AccordionContext';
import type { AccordionContextProviderProps } from '@contexts/AccordionContext';
import { useDarkMode } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import { AccordionContents } from './AccordionContents';
import { AccordionTitle } from './AccordionTitle';
import styles from './index.module.scss';

export type { AccordionTitleProps } from './AccordionTitle';
export type { AccordionContentsProps } from './AccordionContents';

export type AccordionProps = HTMLTagProps<'dl'> & AccordionContextProviderProps;

export const Accordion = Object.assign(
  ({
    //* Accordion props
    opened,
    size = 'medium',

    //* HTML dl props
    children,
    className,
    ...restDlProps
  }: AccordionProps) => {
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
        <AccordionContextProvider opened={opened} size={size}>
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
