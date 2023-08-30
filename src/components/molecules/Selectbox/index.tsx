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
import { InnerStateChangeEventHandler, Size } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface SelectboxProps<
  TValidOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
  TCancelable extends boolean = true,
> extends Omit<
      InputProps,
      'style' | 'className' | 'onChange' | 'value' | 'multiple' | 'type'
    >,
    Pick<
      InputWrapProps,
      'reversed' | 'className' | 'style' | 'label' | 'fixedDarkMode'
    >,
    Pick<
      SelectProps<TValidOptionValue, TMultiple, TCancelable>,
      'options' | 'float' | 'value' | 'multiple' | 'cancelable'
    > {
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
  TCancelable extends boolean = false,
>({
  //* Selectbox props
  size,
  validation,
  children,

  //* Input.Wrap props
  reversed,
  className,
  style,
  label,
  fixedDarkMode,

  //* Select props
  options,
  float,
  onChange,
  value,
  multiple,
  cancelable,

  //* Input props
  onClick,
  ...restInputProps
}: SelectboxProps<TValidOptionValue, TMultiple, TCancelable>) => {
  const [selectedValue, setSelectedValue, preventInnerStateChange] =
    useSubscribedState(value);

  const { disabled, id, readOnly, required } = restInputProps;

  const selectedOption = multiple
    ? options?.filter(({ value }) =>
        (selectedValue as TValidOptionValue[])?.includes(value),
      )
    : options?.find(({ value }) => value === selectedValue);

  const displayedValue = Array.isArray(selectedOption)
    ? selectedOption.map(({ label }) => label).join(', ')
    : selectedOption?.label;

  const { validationMessage, validateOnChange } = useValidationMessage({
    validateHandler: validation,
    value: selectedValue,
    key: id,
  });

  const {
    openingState: [opened, setOpened],
    setClosableOnClick,
  } = useClosableOnClickOpeningState();

  const setOpenedIfEnabled: typeof setOpened = (value) => {
    if (readOnly) return;
    setOpened(value);
  };

  const decoration = children ?? (
    <ChevronDown
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
      label={label}
      required={required}
      onMouseEnter={() => setClosableOnClick(false)}
      onMouseLeave={() => setClosableOnClick(true)}
      fixedDarkMode={fixedDarkMode}
    >
      <Input
        {...restInputProps}
        type="button"
        onClick={(e) => {
          onClick?.(e);
          setOpenedIfEnabled((prev) => !prev);
        }}
        value={displayedValue}
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
        fixedDarkMode={fixedDarkMode}
        onChange={({ value }) => {
          onChange?.({
            value,
            preventInnerStateChange,
          });
          setSelectedValue(value);
          validateOnChange?.(value);
          setOpenedIfEnabled(false);
        }}
      />
    </Input.Wrap>
  );
};
