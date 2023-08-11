import { Input } from '@components/atoms';
import type { InputWrapProps } from '@components/atoms';
import {
  useSubscribedState,
  useTextareaDynamicHeight,
  useValidationMessage,
} from '@hooks';
import type { ValidateHandler } from '@hooks';
import type {
  HTMLTagProps,
  InnerStateChangeEventHandler,
  InputDisabled,
  Size,
} from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

interface TextareaProps
  extends Pick<InputWrapProps, 'className' | 'style' | 'label' | 'reversed'>,
    Omit<
      HTMLTagProps<'textarea'>,
      'resize' | 'disabled' | 'className' | 'style' | 'rows' | 'onChange'
    > {
  size?: Size;
  disabled?: InputDisabled;
  value?: string;
  onChange?: InnerStateChangeEventHandler<string>;
  children?: React.ReactNode;
  validation?: ValidateHandler<TextareaProps['value']>;
}

export const Textarea = ({
  //* Textarea props
  size = 'medium',
  disabled,
  value,
  onChange,
  children,
  validation,

  //* InputWrap props
  className,
  style,
  label,
  reversed,

  //* HTML textarea props
  id,
  ...restTextareaProps
}: TextareaProps) => {
  const { textareaRef, handleTextareaHeight } = useTextareaDynamicHeight();
  const [textareaValue, setTextareaValue, preventInnerStateChange] =
    useSubscribedState(value);

  const { validationMessage, validateValue } = useValidationMessage({
    validateHandler: validation,
    value: textareaValue,
    id,
  });

  return (
    <Input.Wrap
      size="fit-content"
      className={className}
      style={style}
      readonly={disabled === 'readonly'}
      validationMessage={validationMessage}
      label={label}
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
          disabled={!!disabled}
          className={styles.textarea}
          ref={textareaRef}
          onChange={({ target }) => {
            const { value } = target;
            onChange?.({
              value,
              preventInnerStateChange,
            });
            setTextareaValue(value);
            validateValue(value);
            handleTextareaHeight(target);
          }}
        />
        {children ? <div className={styles.decoration}>{children}</div> : null}
      </div>
    </Input.Wrap>
  );
};
