import { useRef, useState } from 'react';
import { Search } from 'react-feather';

import type {
  InputProps,
  InputWrapProps,
  SelectProps,
} from '@components/atoms';
import { Select, Input } from '@components/atoms';
import {
  useSubscribedState,
  useValidationMessage,
  useFilteredSearchOptions,
} from '@hooks';
import type { ValidateHandler, UseFilteredSearchOptionsParams } from '@hooks';
import { InnerStateChangeEventHandler, Size } from '@types';

import styles from './index.module.scss';

export interface SearchboxProps
  extends Omit<
      InputProps,
      'value' | 'onChange' | 'type' | 'onSelect' | 'className' | 'style'
    >,
    Pick<InputWrapProps, 'reversed' | 'style' | 'className' | 'label'>,
    Pick<SelectProps<string, false, false>, 'float'>,
    Pick<UseFilteredSearchOptionsParams, 'filterByKeyword' | 'options'> {
  size?: Size;
  validation?: ValidateHandler<SearchboxProps['value']>;
  value?: string;
  onChange?: InnerStateChangeEventHandler<string>;
  children?: React.ReactNode;
}

type SearchboxFocusEvent = React.FocusEvent<
  HTMLInputElement,
  Element & HTMLButtonElement
>;

export const Searchbox = ({
  //* Searchbox props
  size,
  filterByKeyword = true,
  validation,
  options,
  value,
  onChange,
  children = <Search size="1.5em" strokeWidth="2px" />,

  //* Input.Wrap props
  className,
  style,
  reversed,
  label,

  //* Select props
  float,

  //* Input props
  onClick,
  onFocus,
  onBlur,
  ...restInputProps
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);

  const { readOnly, required, id } = restInputProps;

  const setOpenedIfEnabled: typeof setOpened = (value) => {
    if (readOnly) return;
    setOpened(value);
  };

  const [inputValue, setInputValue, preventInnerStateChange] =
    useSubscribedState(value);

  const filteredOptions = useFilteredSearchOptions({
    options,
    filterByKeyword,
    inputValue,
  });

  const { validationMessage, validateOnChange } = useValidationMessage({
    key: id,
    value: inputValue,
    validateHandler: validation,
  });

  const handleChange: typeof onChange = (event) => {
    onChange?.(event);

    const { value } = event;
    setInputValue(value);
    validateOnChange?.(value);
  };

  let isRefocus = false;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input.Wrap
      size={size}
      validationMessage={validationMessage}
      className={className}
      label={label}
      style={style}
      reversed={reversed}
      required={required}
    >
      <Input
        {...restInputProps}
        ref={inputRef}
        onChange={({ value }) => {
          setOpenedIfEnabled(true);
          handleChange({ value, preventInnerStateChange });
        }}
        onFocus={(e) => {
          if (isRefocus) isRefocus = false;
          else onFocus?.(e);
        }}
        onClick={(e) => {
          setOpenedIfEnabled(true);
          onClick?.(e);
        }}
        onBlur={(e: SearchboxFocusEvent) => {
          if (e.relatedTarget?.name !== 'select-option-item') {
            setOpenedIfEnabled(false);
            onBlur?.(e);
          }
        }}
        value={inputValue}
      />
      {children ? <div className={styles.decoration}>{children}</div> : null}
      <Select
        opened={opened}
        options={filteredOptions}
        value={inputValue}
        cancelable={false}
        onChange={({ value }) => {
          handleChange({
            value,
            preventInnerStateChange,
          });

          isRefocus = true;
          inputRef.current?.focus();
          setOpenedIfEnabled(false);
        }}
        float={float}
      />
    </Input.Wrap>
  );
};
