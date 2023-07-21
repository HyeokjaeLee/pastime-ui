import { useSpinnerZeroSize } from '@hooks';
import { HTMLTagProps, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface SpinnerProps
  extends Omit<HTMLTagProps<'div'>, 'children' | 'size'> {
  size?: Size;
  transitionSize?: boolean;
}

export const Spinner = ({
  //* Spinner props
  size = 'large',
  transitionSize = false,

  //* HTML div props
  className,
  ...restDivProps
}: SpinnerProps) => {
  const isSizeZero = useSpinnerZeroSize(transitionSize);

  return (
    <div
      {...restDivProps}
      className={cleanClassName(
        `${styles['spinner-wrap']} ${
          styles[`size-${isSizeZero ? 'zero' : size}`]
        } ${className}`,
      )}
    >
      <div className={styles.spinner}>
        <span className={styles.satellite} />
      </div>
    </div>
  );
};
