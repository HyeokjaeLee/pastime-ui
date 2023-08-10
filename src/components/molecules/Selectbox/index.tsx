import { ChevronDown } from 'react-feather';

import type {
  InputProps,
  SelectProps,
  InputWrapProps,
  SelectChangeEvent,
} from '@components/atoms';
import { Select, Input } from '@components/atoms';
import type { ValidOptionValue, ValidateHandler } from '@hooks';
import {
  useSubscribedState,
  useValidationMessage,
  useClosableOnClickOpeningState,
} from '@hooks';
import { InnerStateChangeEventHandler, InputDisabled, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface SelectboxProps<
  TValidOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
  TCancelable extends boolean = true,
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
      SelectProps<TValidOptionValue, TMultiple, TCancelable>,
      'options' | 'float' | 'value' | 'multiple' | 'cancelable'
    > {
  disabled?: InputDisabled;
  size?: Size;
  validation?: ValidateHandler<
    SelectProps<TValidOptionValue, TMultiple, TCancelable>['value']
  >;
  children?: React.ReactNode;
  onChange?: InnerStateChangeEventHandler<
    SelectChangeEvent<TValidOptionValue, TMultiple, TCancelable>['value']
  >;
}

export const Selectbox = <
  TValidOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
  TCancelable extends boolean = true,
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
  cancelable,

  //* Input props
  onClick,
  placeholder,
  id,
  ...restInputProps
}: SelectboxProps<TValidOptionValue, TMultiple, TCancelable>) => {
  const [selectedValue, setSelectedValue, preventInnerStateChange] =
    useSubscribedState(value);

  const selectedOption = multiple
    ? options?.filter(({ value }) =>
        (selectedValue as TValidOptionValue[])?.includes(value),
      )
    : options?.find(({ value }) => value === selectedValue);

  const displayedValue = Array.isArray(selectedOption)
    ? selectedOption.map(({ label }) => label).join(', ')
    : selectedOption?.label;

  const { validationMessage, validateValue } = useValidationMessage({
    validateHandler: validation,
    value: selectedValue,
    id,
  });

  const {
    openingState: [opened, setOpened],
    setClosableOnClick,
  } = useClosableOnClickOpeningState();

  const changeOpened = () => setOpened((prev) => !prev);

  const decoration = children ?? (
    <ChevronDown
      onClick={disabled ? undefined : () => changeOpened()}
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
          changeOpened();
        }}
        value={displayedValue}
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
        cancelable={cancelable}
        float={float}
        onChange={({ value }) => {
          onChange?.({
            value,
            preventInnerStateChange,
          });
          setSelectedValue(value);
          validateValue(value);
          setOpened(false);
        }}
      />
    </Input.Wrap>
  );
};
