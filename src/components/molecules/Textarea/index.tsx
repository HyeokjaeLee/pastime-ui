import { Input } from '@components/atoms';
import type { InputWrapProps } from '@components/atoms';
import {
  useSubscribedState,
  useTextareaDynamicHeight,
  useValidationMessage,
} from '@hooks';
import type { ValidateHandler } from '@hooks';
import type { HTMLTagProps, InputDisabled, Size } from '@types';

import styles from './index.module.scss';

interface TextareaProps
  extends Pick<InputWrapProps, 'className' | 'style'>,
    Omit<
      HTMLTagProps<'textarea'>,
      'resize' | 'disabled' | 'className' | 'style' | 'rows' | 'onChange'
    > {
  size?: Size;
  disabled?: InputDisabled;
  value?: string;
  onChange?: (value: string) => void;
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

  //* HTML textarea props
  id,
  ...restTextareaProps
}: TextareaProps) => {
  const { textareaRef, handleTextareaHeight } = useTextareaDynamicHeight();
  const [textareaValue, setTextareaValue] = useSubscribedState(value);
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
    >
      <div className={`${styles['textarea-wrap']} ${styles[`size-${size}`]}`}>
        <textarea
          {...restTextareaProps}
          value={textareaValue}
          rows={1}
          disabled={!!disabled}
          className={styles.textarea}
          ref={textareaRef}
          onChange={({ target }) => {
            const { value } = target;
            setTextareaValue(value);
            onChange?.(value);
            validateValue(value);
            handleTextareaHeight(target);
          }}
        />
        {children ? <div className={styles.decoration}>{children}</div> : null}
      </div>
    </Input.Wrap>
  );
};
