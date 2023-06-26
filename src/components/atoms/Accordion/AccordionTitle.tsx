import { useContext } from 'react';
import { ChevronDown } from 'react-feather';

import { AccordionContext } from '@contexts';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './AccordionTitle.module.scss';

export type AccordionTitleProps = HTMLTagProps<'dt'>;

export const AccordionTitle = ({
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
