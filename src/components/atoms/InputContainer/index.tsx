import { createContext, useContext } from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

interface CommonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface InputContainerProps extends CommonProps {
  validationMessage?: string | null;
}

const InputContainerContext =
  createContext<InputContainerProps['validationMessage']>(undefined);

const InputContainerMain = ({
  children,
  className,
  validationMessage,
  style,
}: InputContainerProps) => (
  <div
    style={style}
    className={cleanClassName(`${styles['input-container']} ${className}`)}
  >
    <InputContainerContext.Provider value={validationMessage}>
      <div className={styles['input-interaction-wrap']}>{children}</div>
    </InputContainerContext.Provider>
    {validationMessage ? (
      <p className={styles['validation-message']}>{validationMessage}</p>
    ) : (
      validationMessage === null && (
        <div className={styles['validation-space']} />
      )
    )}
  </div>
);

export interface InputContainerIntreractionProps extends CommonProps {
  onClick?: React.HTMLAttributes<HTMLDivElement>['onClick'];
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  readonly?: boolean;
}

const InputContainerIntreraction = ({
  children,
  onClick,
  size = 'medium',
  className,
  style,
  theme = 'light',
  readonly = false,
}: InputContainerIntreractionProps) => {
  const validationMessage = useContext(InputContainerContext);
  return (
    <div
      style={style}
      className={cleanClassName(
        `${styles['input-wrap']} ${styles[theme]} ${
          readonly && styles.readonly
        } ${validationMessage && styles.error} ${
          styles[`size-${size}`]
        } ${className}`,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const InputContainer = Object.assign(InputContainerMain, {
  Intreraction: InputContainerIntreraction,
});
