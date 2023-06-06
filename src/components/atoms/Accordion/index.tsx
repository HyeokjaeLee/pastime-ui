import { useContext, useRef, useMemo } from 'react';
import { ChevronDown } from 'react-feather';

import { AccordionContext } from '@contexts';
import type { AccordionContextValue } from '@contexts';
import { useSubscribedState } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export type AccordionProps = HTMLTagProps<'dl'> & AccordionContextValue;

const AccordionMain = ({
  //* Accordion props
  opened = false,
  size = 'medium',

  //* HTML dl props
  children,
  className,
  ...restDlProps
}: AccordionProps) => {
  const openState = useSubscribedState(opened);
  const accordionContextValue = useMemo(
    () => ({
      opened: openState[0],
      setOpened: openState[1],
      size,
    }),
    [openState, size],
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
};

export type AccordionTitleProps = HTMLTagProps<'dt'>;

const AccordionTitle = ({
  children,
  className,
  ...restDtProps
}: AccordionTitleProps) => {
  const { opened, setOpened, size } = useContext(AccordionContext);
  return (
    <dt
      {...restDtProps}
      className={cleanClassName(
        `${styles['accordian-title-wrap']} ${className}`,
      )}
    >
      <button
        type="button"
        className={`${styles['accordian-title']} ${styles[`size-${size}`]}`}
        onClick={() => setOpened(() => !opened)}
      >
        <div className={styles['title-contents']}>{children}</div>
        <ChevronDown
          className={cleanClassName(
            `${styles['chevron-down-icon']} ${opened && styles.opened}`,
          )}
        />
      </button>
    </dt>
  );
};

export interface AccordionContentsProps
  extends Omit<HTMLTagProps<'dd'>, 'style'> {
  style?: Omit<React.CSSProperties, 'height'>;
}
const AccordionContents = ({
  style,
  children,
  className,
  ...restDdProps
}: AccordionContentsProps) => {
  const { opened, size } = useContext(AccordionContext);
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
        className={`${styles.divider} ${
          opened ? styles.opened : styles.closed
        }`}
      />
      <article
        ref={ref}
        className={cleanClassName(
          `${styles['accordian-contents']} ${
            opened && styles.opened
          } ${className}`,
        )}
      >
        {children}
      </article>
    </dd>
  );
};

export const Accordion = Object.assign(AccordionMain, {
  Title: AccordionTitle,
  Contents: AccordionContents,
});
