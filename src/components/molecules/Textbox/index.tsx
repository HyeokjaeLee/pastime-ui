import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { InputContainer, Input } from '../../atoms';

import type { Validation } from '../../../hooks';
import type {
  InputProps,
  InputContainerProps,
  InputContainerInteractionProps,
} from '../../atoms';

export interface TextboxProps
  extends Omit<
    InputProps & InputContainerProps & InputContainerInteractionProps,
    'validationMessage' | 'children' | 'disabled' | 'readonly'
  > {
  unit?: React.ReactNode;
  validation?: Validation<TextboxProps['value']>;
  disabled?: boolean | 'readonly';
}

export const Textbox = ({
  value: parentValue,
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
  const [value, setValue] = useSubscribedState(parentValue);
  const { validationMessage, checkValidation } = useValidation(
    value,
    validation,
    id,
  );

  return (
    <InputContainer validationMessage={validationMessage}>
      <InputContainer.Interaction
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
            setValue(value);
            onChange?.(value);
          }}
        />
        {typeof unit === 'string' ? (
          <div className={styles.unit}>{unit}</div>
        ) : (
          unit
        )}
      </InputContainer.Interaction>
    </InputContainer>
  );
};
