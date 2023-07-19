import { useState } from 'react';

import { InputContext } from '@contexts/InputContext';
import { useDarkMode, useInputMessageDynamicHeight } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './InputWrap.module.scss';

export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
  size?: 'small' | 'medium' | 'large';
  validationMessage?: string;
};

export const InputWrap = ({
  //* Input.Wrap props
  size = 'medium',
  validationMessage,

  //* HTML div props
  children,
  ...restDivProps
}: InputWrapProps) => {
  const { messageRef, messageWrapHeight } =
    useInputMessageDynamicHeight(validationMessage);

  const [readonly, setReadonly] = useState(false);

  const { isDarkMode } = useDarkMode();

  return (
    <div {...restDivProps}>
      <div
        className={cleanClassName(
          `${styles['input-wrap']} ${isDarkMode && styles.dark} ${
            validationMessage && styles.error
          } ${styles[`size-${size}`]} ${readonly && styles.readonly}`,
        )}
      >
        <InputContext.Provider value={setReadonly}>
          {children}
        </InputContext.Provider>
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
