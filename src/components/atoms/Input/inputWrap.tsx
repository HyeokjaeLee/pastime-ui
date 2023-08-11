import { useDarkMode, useInputMessageDynamicHeight } from '@hooks';
import type { HTMLTagProps, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './InputWrap.module.scss';

export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
  size?: Size | 'fit-content';
  validationMessage?: string;
  readonly?: boolean;
  reversed?: boolean;
  label?: string;
};

export const InputWrap = ({
  //* Input.Wrap props
  size = 'medium',
  validationMessage,
  readonly = false,
  reversed = false,
  label,

  //* HTML div props
  children,
  className,
  ...restDivProps
}: InputWrapProps) => {
  const { messageRef, messageWrapHeight } =
    useInputMessageDynamicHeight(validationMessage);

  const { isDarkMode } = useDarkMode();

  const inputWrapClassName = cleanClassName(
    `${styles['input-wrap']} ${isDarkMode && styles.dark} ${
      validationMessage && styles.error
    } ${readonly && styles.readonly}`,
  );

  const inputWrapContentClassName = cleanClassName(
    `${styles['input-wrap-content']} ${styles[`size-${size}`]} ${
      reversed && styles.reversed
    }`,
  );

  return (
    <div
      {...restDivProps}
      className={cleanClassName(`${styles['default-width']} ${className}`)}
    >
      {label ? (
        <label className={inputWrapClassName}>
          <p className={styles.label}>{label}</p>
          <div className={inputWrapContentClassName}>{children}</div>
        </label>
      ) : (
        <div className={inputWrapClassName}>
          <div className={inputWrapContentClassName}>{children}</div>
        </div>
      )}
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
