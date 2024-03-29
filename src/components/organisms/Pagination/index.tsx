import { ChevronLeft, ChevronRight } from 'react-feather';

import { Button } from '@components/molecules';
import type { ButtonProps } from '@components/molecules';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface PaginationProps
  extends Omit<HTMLTagProps<'ul'>, 'onChange'>,
    Pick<ButtonProps, 'size' | 'fixedDarkMode'> {
  onChange?: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
  page?: number;
  buttonCount?: number;
}

export const Pagination = ({
  //* Pagination props
  onChange,
  buttonCount = 10,
  totalItems = 0,
  pageSize = 0,
  page = 0,

  //* Button props
  size,
  fixedDarkMode,

  //* HTML ul props
  className,
  ...restUlProps
}: PaginationProps) => {
  const commonButtonProps: ButtonProps = {
    theme: 'clear',
    size,
    shape: 'sharp-corner',
    fixedDarkMode,
  };

  const isPaginationExisted = !!(pageSize && totalItems && page && buttonCount);

  const lastPage = isPaginationExisted ? Math.ceil(totalItems / pageSize) : 0;

  const isFirstPage = !isPaginationExisted || page <= 1;
  const isLastPage = !isPaginationExisted || page >= lastPage;

  const displayedIndexList: number[] = isPaginationExisted
    ? [page]
    : Array.from({ length: buttonCount });

  if (isPaginationExisted) {
    for (let i = 1; i <= buttonCount; i += 1) {
      const rightSidePage = page + i;
      if (rightSidePage <= lastPage) displayedIndexList.push(rightSidePage);

      if (displayedIndexList.length >= buttonCount) break;

      const leftSidePage = page - i;
      if (leftSidePage > 0) displayedIndexList.unshift(leftSidePage);

      if (displayedIndexList.length >= buttonCount) break;
    }
  }

  return (
    <ul
      {...restUlProps}
      className={cleanClassName(
        `${styles.pagination} ${
          !isPaginationExisted && styles.hidden
        } ${className}`,
      )}
    >
      <li className={styles['pagination-item-border']}>
        <Button
          {...commonButtonProps}
          icon={<ChevronLeft className={styles['item-size']} />}
          onClick={() => onChange?.(page - 1)}
          disabled={isFirstPage}
        />
      </li>
      {displayedIndexList.map((index) => {
        const isCurrentPage = page === index;

        const buttonProps: ButtonProps = isCurrentPage
          ? {
              ...commonButtonProps,
              theme: 'primary',
            }
          : commonButtonProps;
        return (
          <li key={index} className={`${styles['pagination-item-border']} `}>
            <Button
              {...buttonProps}
              onClick={() => onChange?.(index)}
              icon={<div className={styles['item-size']}>{index}</div>}
            />
          </li>
        );
      })}
      <li>
        <Button
          {...commonButtonProps}
          icon={<ChevronRight className={styles['item-size']} />}
          onClick={() => onChange?.(page + 1)}
          disabled={isLastPage}
        />
      </li>
    </ul>
  );
};
