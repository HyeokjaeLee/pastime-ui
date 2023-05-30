import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { cleanClassName } from '../../../utils';
import { Input, InputContainerProps } from '../../atoms';

import type { Validation } from '../../../hooks';
import type { InputProps, InputWrapProps, InputType } from '../../atoms';

export interface TextboxProps
  extends Omit<InputProps, 'className' | 'size' | 'style'>,
    Pick<InputContainerProps, 'className' | 'style'>,
    Pick<InputWrapProps, 'size' | 'theme'> {
  unit?: React.ReactNode;
  type?: Exclude<InputType, 'button'>;
  validation?: Validation<TextboxProps['value']>;
}

export const Textbox = ({
  //* Textbox props
  unit,
  validation,
  type,

  //* Input.Container props
  className,
  style,

  //* Input.Wrap props
  size,
  theme = 'light',

  //* Input props
  onChange,
  value,
  id,
  name,
  ...restInputProps
}: TextboxProps) => {
  const [inputValue, setInputValue] = useSubscribedState(value);
  const { validationMessage, checkValidation } = useValidation(
    inputValue,
    validation,
    id || name,
  );

  return (
    <Input.Container
      validationMessage={validationMessage}
      className={className}
      style={style}
    >
      <Input.Wrap size={size} theme={theme}>
        <Input
          {...restInputProps}
          type={type}
          value={inputValue}
          id={id}
          name={name}
          onChange={(value) => {
            checkValidation?.(value);
            setInputValue(value);
            onChange?.(value);
          }}
        />
        {unit ? (
          <div className={cleanClassName(`${styles.unit} ${styles[theme]}`)}>
            {unit}
          </div>
        ) : null}
      </Input.Wrap>
    </Input.Container>
  );
};
