import { useDarkMode, useInputMessageDynamicHeight } from '@hooks';
import type { HTMLTagProps, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './InputWrap.module.scss';

export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
  size?: Size | 'fit-content';
  validationMessage?: string;
  readonly?: boolean;
  reversed?: boolean;
};

export const InputWrap = ({
  //* Input.Wrap props
  size = 'medium',
  validationMessage,
  readonly = false,
  reversed = false,

  //* HTML div props
  children,
  className,
  ...restDivProps
}: InputWrapProps) => {
  const { messageRef, messageWrapHeight } =
    useInputMessageDynamicHeight(validationMessage);

  const { isDarkMode } = useDarkMode();

  return (
    <div
      {...restDivProps}
      className={cleanClassName(`${styles['default-width']} ${className}`)}
    >
      <div
        className={cleanClassName(
          `${styles['input-wrap']} ${isDarkMode && styles.dark} ${
            validationMessage && styles.error
          } ${styles[`size-${size}`]} ${readonly && styles.readonly} ${
            reversed && styles.reversed
          }`,
        )}
      >
        {children}
      </div>
      <div
        className={cleanClassName(
          `${styles['validation-message-wrap']} ${
            messageWrapHeight && styles.show
          }`,
        )}
        style={messageWrapHeight}
      >
        {validationMessage ? (
          <p ref={messageRef} className={styles['validation-message']}>
            {validationMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
};
