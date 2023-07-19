import { Input } from '@components/atoms';
import type { InputWrapProps } from '@components/atoms';
import { useTextareaDynamicHeight } from '@hooks';
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
  onChange?: (value: string) => void;
  children?: React.ReactNode;
}

export const Textarea = ({
  //* Textarea props
  size = 'medium',
  disabled,
  onChange,
  children,

  //* InputWrap props
  className,
  style,
}: TextareaProps) => {
  const { textareaRef, handleTextareaHeight } = useTextareaDynamicHeight();

  return (
    <Input.Wrap
      size="fit-content"
      className={className}
      style={style}
      readonly={disabled === 'readonly'}
    >
      <div className={`${styles['textarea-wrap']} ${styles[`size-${size}`]}`}>
        <textarea
          rows={1}
          disabled={!!disabled}
          className={styles.textarea}
          ref={textareaRef}
          onChange={({ target }) => {
            onChange?.(target.value);
            handleTextareaHeight(target);
          }}
        />
        <div>{children}</div>
      </div>
    </Input.Wrap>
  );
};
