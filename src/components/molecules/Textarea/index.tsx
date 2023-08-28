import { forwardRef } from 'react';

import { Input } from '@components/atoms';
import type { InputWrapProps } from '@components/atoms';
import {
  useSubscribedState,
  useTextareaDynamicHeight,
  useValidationMessage,
} from '@hooks';
import type { ValidateHandler } from '@hooks';
import type { HTMLTagProps, InnerStateChangeEventHandler, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

interface TextareaProps
  extends Pick<
      InputWrapProps,
      'className' | 'style' | 'label' | 'reversed' | 'fixedDarkMode'
    >,
    Omit<
      HTMLTagProps<'textarea'>,
      'resize' | 'className' | 'style' | 'rows' | 'onChange'
    > {
  size?: Size;
  value?: string;
  onChange?: InnerStateChangeEventHandler<string>;
  children?: React.ReactNode;
  validation?: ValidateHandler<TextareaProps['value']>;
  ref?: React.ForwardedRef<HTMLTextAreaElement>;
}

forwardRef<HTMLTextAreaElement, Omit<TextareaProps, 'ref'>>(
  (
    {
      //* Textarea props
      size = 'medium',
      value,
      onChange,
      children,
      validation,

      //* InputWrap props
      className,
      style,
      label,
      reversed,
      fixedDarkMode,

      //* HTML textarea props
      onInvalid,
      ...restTextareaProps
    },
    ref,
  ) => {
    const { textareaRef, handleTextareaHeight } = useTextareaDynamicHeight(ref);
    const [textareaValue, setTextareaValue, preventInnerStateChange] =
      useSubscribedState(value);

    const { required, id } = restTextareaProps;

    const { validationMessage, validateOnChange } = useValidationMessage({
      validateHandler: validation,
      value: textareaValue,
      key: id,
    });

    return (
      <Input.Wrap
        size="fit-content"
        className={className}
        style={style}
        validationMessage={validationMessage}
        label={label}
        required={required}
        fixedDarkMode={fixedDarkMode}
      >
        <div
          className={cleanClassName(
            `${styles['textarea-wrap']} ${styles[`size-${size}`]} ${
              reversed && styles.reversed
            }`,
          )}
        >
          <textarea
            {...restTextareaProps}
            value={textareaValue}
            rows={1}
            className={styles.textarea}
            required={required}
            ref={textareaRef}
            onChange={({ target }) => {
              const { value } = target;
              onChange?.({
                value,
                preventInnerStateChange,
              });
              setTextareaValue(value);
              validateOnChange?.(value);
              handleTextareaHeight(target);
            }}
            onInvalid={(e) => {
              e.preventDefault();
              onInvalid?.(e);
            }}
          />
          {children ? (
            <div className={styles.decoration}>{children}</div>
          ) : null}
        </div>
      </Input.Wrap>
    );
  },
);

export const Textarea = ({
  //* Textarea props
  size = 'medium',
  value,
  onChange,
  children,
  validation,

  //* InputWrap props
  className,
  style,
  label,
  reversed,
  fixedDarkMode,

  //* HTML textarea props
  onInvalid,
  ...restTextareaProps
}: TextareaProps) => {
  const { textareaRef, handleTextareaHeight } = useTextareaDynamicHeight();
  const [textareaValue, setTextareaValue, preventInnerStateChange] =
    useSubscribedState(value);

  const { required, id } = restTextareaProps;

  const { validationMessage, validateOnChange } = useValidationMessage({
    validateHandler: validation,
    value: textareaValue,
    key: id,
  });

  return (
    <Input.Wrap
      size="fit-content"
      className={className}
      style={style}
      validationMessage={validationMessage}
      label={label}
      required={required}
      fixedDarkMode={fixedDarkMode}
    >
      <div
        className={cleanClassName(
          `${styles['textarea-wrap']} ${styles[`size-${size}`]} ${
            reversed && styles.reversed
          }`,
        )}
      >
        <textarea
          {...restTextareaProps}
          value={textareaValue}
          rows={1}
          className={styles.textarea}
          required={required}
          ref={textareaRef}
          onChange={({ target }) => {
            const { value } = target;
            onChange?.({
              value,
              preventInnerStateChange,
            });
            setTextareaValue(value);
            validateOnChange?.(value);
            handleTextareaHeight(target);
          }}
          onInvalid={(e) => {
            e.preventDefault();
            onInvalid?.(e);
          }}
        />
        {children ? <div className={styles.decoration}>{children}</div> : null}
      </div>
    </Input.Wrap>
  );
};
