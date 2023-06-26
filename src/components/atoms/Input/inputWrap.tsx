import { useRef, useState, useEffect } from 'react';

import { InputContext } from '@contexts';
import { useDarkMode } from '@hooks';
import type { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './InputWrap.module.scss';

export type InputWrapProps = Omit<HTMLTagProps<'div'>, 'size'> & {
  size?: 'small' | 'medium' | 'large';
  validationMessage?: string | null;
};

export const InputWrap = ({
  //* Input.Container props
  size = 'medium',
  validationMessage,

  //* HTML div props
  children,
  ...restDivProps
}: InputWrapProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [messageWrapHeight, setMessageWrapHeight] =
    useState<React.CSSProperties>();

  const [readonly, setReadonly] = useState(false);

  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const { current } = ref;
    if (current && validationMessage) {
      return setMessageWrapHeight({
        height: current.clientHeight,
      });
    }
    return setMessageWrapHeight(undefined);
  }, [validationMessage]);

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
          <p ref={ref} className={styles['validation-message']}>
            {validationMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
};
