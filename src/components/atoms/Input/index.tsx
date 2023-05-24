import {
  Ref,
  useRef,
  useState,
  useMemo,
  forwardRef,
  createContext,
  useContext,
  useEffect,
} from 'react';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

type HTMLInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type CommonProps = Pick<HTMLInputProps, 'className' | 'style'>;

export interface InputContainerProps extends CommonProps {
  validationMessage?: string | null;
  children?: React.ReactNode;
}

const InputContext = createContext<
  Pick<InputContainerProps, 'validationMessage'> & {
    readonly?: boolean;
    setReadonly?: React.Dispatch<React.SetStateAction<boolean>>;
  }
>({});

const InputContainer = ({
  children,
  className,
  validationMessage,
  style,
}: InputContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [messageWrapHeight, setMessageWrapHeight] =
    useState<React.CSSProperties>();

  const [readonly, setReadonly] = useState(false);

  useEffect(
    () =>
      setMessageWrapHeight({
        height: ref.current?.clientHeight ?? 0,
      }),
    [ref, validationMessage],
  );

  const inputContextValue = useMemo(
    () => ({
      validationMessage,
      readonly,
      setReadonly,
    }),
    [validationMessage, readonly, setReadonly],
  );

  return (
    <div
      style={style}
      className={cleanClassName(
        `${styles['input-container-wrap']} ${className}`,
      )}
    >
      <InputContext.Provider value={inputContextValue}>
        <div className={styles['input-container']}>{children}</div>
      </InputContext.Provider>
      <div
        className={styles['validation-message-wrap']}
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

export interface InputWrapProps
  extends CommonProps,
    Pick<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
  children?: React.ReactNode;
}

const InputWrap = ({
  children,
  onClick,
  size = 'medium',
  className,
  style,
  theme = 'light',
}: InputWrapProps) => {
  const { validationMessage, readonly } = useContext(InputContext);

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

export type InputType =
  | 'text'
  | 'number'
  | 'large-number'
  | 'phone-number'
  | 'password'
  | 'button';

export interface InputProps
  extends Pick<HTMLInputProps, 'placeholder' | 'onFocus' | 'id' | 'onClick'>,
    CommonProps {
  type?: InputType;
  value?: number | string;
  disabled?: boolean | 'readonly';
  onChange?: (value: string) => void;
  ref?: Ref<HTMLInputElement>;
  name?: string;
}

const InputMain: (props: InputProps) => JSX.Element | null = forwardRef(
  (
    {
      type = 'text',
      placeholder = '',
      disabled = false,
      value: parentValue,
      onChange,
      onClick,
      id,
      onFocus,
      name,
      className,
      style,
    },
    ref,
  ) => {
    const [isFocused, setIsFucused] = useState(false);

    const { setReadonly } = useContext(InputContext);

    const isReadonly = disabled === 'readonly';

    useEffect(() => setReadonly?.(isReadonly), [setReadonly, isReadonly]);

    const value = (() => {
      if (type === 'button' && !parentValue) return placeholder;

      if (parentValue !== 0 && !parentValue) return '';

      const valueString = String(parentValue);

      if (isFocused) return valueString;

      switch (type) {
        case 'number':
          return valueString;

        case 'large-number':
          return Number(valueString).toLocaleString();

        case 'phone-number':
          if (valueString.length === 10)
            return valueString.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
          return valueString.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

        default:
          return valueString;
      }
    })();

    const convertChangeHandlerParam = useMemo((): ((
      value: string,
    ) => string | null) => {
      switch (type) {
        case 'number':
        case 'large-number':
          return (value) => {
            const isValidNumber = value === '-' || !Number.isNaN(Number(value));
            return value && (isValidNumber ? value : null);
          };

        case 'phone-number':
          return (value) => {
            let numberString = value.replace(/[^0-9]/g, '');
            if (numberString.length > 11)
              numberString = numberString.slice(0, 11);

            return value && numberString;
          };

        default:
          return (value) => value;
      }
    }, [type]);

    return (
      <input
        id={id}
        name={name}
        ref={ref}
        onFocus={(e) => {
          setIsFucused(true);
          onFocus?.(e);
        }}
        onBlur={() => setIsFucused(false)}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        value={value}
        style={style}
        className={cleanClassName(
          `${styles.input} ${type === 'button' && styles.button} ${
            parentValue || styles.empty
          } ${className}`,
        )}
        disabled={!!disabled}
        onChange={({ target: { value } }) => {
          const convertedValue = convertChangeHandlerParam(value);

          if (convertedValue !== null) onChange?.(convertedValue);
        }}
      />
    );
  },
);

export const Input = Object.assign(InputMain, {
  Container: InputContainer,
  Wrap: InputWrap,
});
