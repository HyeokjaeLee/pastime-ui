import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export type SkeletonProps = Omit<HTMLTagProps<'div'>, 'children'>;

export const Skeleton = ({ className, ...restDivProps }: SkeletonProps) => (
  <div
    {...restDivProps}
    className={cleanClassName(`${styles.skeleton} ${className}`)}
  >
    <div className={styles['light-reflection-wrap']}>
      <div className={styles['light-reflection']} />
    </div>
  </div>
);
