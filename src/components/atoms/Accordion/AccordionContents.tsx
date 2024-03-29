import { useRef, useMemo } from 'react';

import { useAccordionContext } from '@contexts/AccordionContext';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './AccordionContents.module.scss';

export type AccordionContentsProps = Omit<HTMLTagProps<'dd'>, 'style'> & {
  style?: Omit<React.CSSProperties, 'height'>;
};

export const AccordionContents = ({
  //* Accordion.Contents props
  style,

  //* HTML dd props
  children,
  className,
  ...restDdProps
}: AccordionContentsProps) => {
  const {
    openedState: [opened],
    size,
    isDarkMode,
  } = useAccordionContext();
  const ref = useRef<HTMLElement>(null);

  const accordianContentsStyle = useMemo(() => {
    const { current } = ref;
    if (!current) {
      return {
        ...style,
        height: 0,
      };
    }
    return {
      ...style,
      height: opened ? current.scrollHeight : 0,
    };
  }, [opened, style]);

  return (
    <dd
      {...restDdProps}
      className={cleanClassName(
        `${styles['accordian-contents-wrap']} ${styles[`size-${size}`]}`,
      )}
      style={accordianContentsStyle}
    >
      <hr
        className={`${styles.divider} ${isDarkMode && styles.dark} ${
          opened ? styles.opened : styles.closed
        }`}
      />
      <article
        ref={ref}
        className={cleanClassName(
          `${styles['accordian-contents']} ${opened && styles.opened} ${
            isDarkMode && styles.dark
          } ${className}`,
        )}
      >
        {children}
      </article>
    </dd>
  );
};
