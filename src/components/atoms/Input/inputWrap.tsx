import { useState } from 'react';

import {
  FixedDarkMode,
  useDarkMode,
  useInputMessageDynamicHeight,
} from '@hooks';
import type { HTMLTagProps, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './InputWrap.module.scss';

export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
  size?: Size | 'fit-content';
  validationMessage?: string;
  reversed?: boolean;
  label?: string;
  required?: boolean;
  fixedDarkMode?: FixedDarkMode;
};

export const InputWrap = ({
  //* Input.Wrap props
  size = 'medium',
  validationMessage,
  reversed = false,
  label,
  required = false,
  fixedDarkMode,

  //* HTML div props
  children,
  className,
  ...restDivProps
}: InputWrapProps) => {
  const { messageRef, messageWrapHeight } =
    useInputMessageDynamicHeight(validationMessage);

  const [isFocused, setIsFocused] = useState(false);

  const { isDarkMode } = useDarkMode(fixedDarkMode);

  return (
    <div
      {...restDivProps}
      className={cleanClassName(
        `${styles['input-wrap']} ${isFocused && styles.focused} ${className}`,
      )}
    >
      <label
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cleanClassName(
          `${styles.label} ${isDarkMode && styles.dark} ${
            validationMessage && styles.error
          }`,
        )}
      >
        {label ? (
          <p
            className={cleanClassName(
              `${styles['label-text']} ${required && styles.required}`,
            )}
          >
            {label}
          </p>
        ) : null}
        <div
          className={cleanClassName(
            `${styles['input-wrap-content']} ${styles[`size-${size}`]} ${
              reversed && styles.reversed
            }`,
          )}
        >
          {children}
        </div>
      </label>
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
