import { ChevronDown } from 'react-feather';

import type {
  InputProps,
  SelectProps,
  InputWrapProps,
} from '@components/atoms';
import { Select, Input } from '@components/atoms';
import type { ValidOptionValue, ValidateHandler } from '@hooks';
import {
  useSubscribedState,
  useValidationMessage,
  useClosableOnClickOpeningState,
} from '@hooks';
import { InputDisabled, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface SelectboxProps<
  TValidOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
> extends Omit<
      InputProps,
      | 'style'
      | 'className'
      | 'onChange'
      | 'value'
      | 'multiple'
      | 'type'
      | 'disabled'
    >,
    Pick<InputWrapProps, 'reversed' | 'className' | 'style'>,
    Pick<
      SelectProps<TValidOptionValue, TMultiple>,
      'options' | 'float' | 'onChange' | 'value' | 'multiple'
    > {
  disabled?: InputDisabled;
  size?: Size;
  validation?: ValidateHandler<
    SelectboxProps<TValidOptionValue, TMultiple>['value']
  >;
  children?: React.ReactNode;
}

export const Selectbox = <
  TValidOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
>({
  //* Selectbox props
  disabled,
  size,
  validation,
  children,

  //* Input.Wrap props
  reversed,
  className,
  style,

  //* Select props
  options,
  float,
  onChange,
  value,
  multiple,

  //* Input props
  onClick,
  placeholder,
  id,
  ...restInputProps
}: SelectboxProps<TValidOptionValue, TMultiple>) => {
  const [selectedValue, setSelectedValue] = useSubscribedState(value);

  const selectedOption = options?.find(({ value }) => value === selectedValue);

  const { validationMessage, validateValue } = useValidationMessage({
    validateHandler: validation,
    value: selectedValue,
    id,
  });

  const {
    openingState: [opened, setOpened],
    setClosableOnClick,
  } = useClosableOnClickOpeningState();

  const decoration = children ?? (
    <ChevronDown
      onClick={disabled ? undefined : () => setOpened((prev) => !prev)}
      className={cleanClassName(
        `${styles['selectbox-icon']} ${
          (float === 'top' ? !opened : opened) && styles.reversed
        } ${disabled && styles.disabled}`,
      )}
    />
  );

  return (
    <Input.Wrap
      validationMessage={validationMessage}
      size={size}
      style={style}
      className={className}
      reversed={reversed}
      readonly={disabled === 'readonly'}
      onMouseEnter={() => setClosableOnClick(false)}
      onMouseLeave={() => setClosableOnClick(true)}
    >
      <Input
        {...restInputProps}
        id={id}
        type="button"
        onClick={(e) => {
          onClick?.(e);
          setOpened((prev) => !prev);
        }}
        value={selectedOption?.label}
        disabled={!!disabled}
        placeholder={placeholder}
      />
      {decoration ? (
        <div className={styles.decoration}>{decoration}</div>
      ) : null}
      <Select
        opened={opened}
        options={options}
        multiple={multiple}
        value={selectedValue}
        float={float}
        onChange={(value) => {
          setSelectedValue(value);
          validateValue(value);
          onChange?.(value);
          setOpened(false);
        }}
      />
    </Input.Wrap>
  );
};
