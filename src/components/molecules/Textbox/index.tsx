import styles from './index.module.scss';
import { useValidation } from '../../../hooks';

import { InputContainer, Input } from '../../atoms';

import type { Validation } from '../../../hooks';
import type {
  InputProps,
  InputContainerProps,
  InputContainerIntreractionProps,
} from '../../atoms';

export interface TextboxProps
  extends Omit<
    InputProps & InputContainerProps & InputContainerIntreractionProps,
    'validationMessage' | 'children' | 'disabled' | 'readonly'
  > {
  unit?: React.ReactNode;
  validation?: Validation<TextboxProps['value']>;
  disabled?: boolean | 'readonly';
}

export const Textbox = ({
  value,
  unit,
  onChange,
  size,
  id,
  validation,
  className,
  disabled,
  theme,
  ...inputProps
}: TextboxProps) => {
  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    id,
  );

  return (
    <InputContainer validationMessage={validationMessage}>
      <InputContainer.Intreraction
        size={size}
        readonly={disabled === 'readonly'}
        theme={theme}
        className={className}
      >
        <Input
          {...inputProps}
          disabled={!!disabled}
          value={value}
          id={id}
          onChange={(value) => {
            checkValidation?.(value);
            onChange?.(value);
          }}
        />
        {typeof unit === 'string' ? (
          <div className={styles.unit}>{unit}</div>
        ) : (
          unit
        )}
      </InputContainer.Intreraction>
    </InputContainer>
  );
};
