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
import { InnerStateChangeEventHandler, InputDisabled, Size } from '@types';

import styles from './index.module.scss';

export interface SearchboxProps
  extends Omit<
      InputProps,
      | 'value'
      | 'onChange'
      | 'type'
      | 'onSelect'
      | 'className'
      | 'style'
      | 'disabled'
    >,
    Pick<InputWrapProps, 'reversed' | 'style' | 'className'>,
    Pick<SelectProps<string, false, false>, 'float'>,
    Pick<UseFilteredSearchOptionsParams, 'filterByKeyword' | 'options'> {
  size?: Size;
  validation?: ValidateHandler<SearchboxProps['value']>;
  value?: string;
  onChange?: InnerStateChangeEventHandler<string>;
  children?: React.ReactNode;
  disabled?: InputDisabled;
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
  disabled,

  //* Input.Wrap props
  className,
  style,
  reversed,

  //* Select props
  float,

  //* Input props
  onClick,
  onFocus,
  id,
  name,
  onBlur,
  ...restInputProps
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue, preventInnerStateChange] =
    useSubscribedState(value);

  const filteredOptions = useFilteredSearchOptions({
    options,
    filterByKeyword,
    inputValue,
  });

  const { validationMessage, validateValue } = useValidationMessage({
    id,
    value: inputValue,
    validateHandler: validation,
  });

  const handleChange: typeof onChange = (event) => {
    onChange?.(event);

    const { value } = event;
    setInputValue(value);
    validateValue(value);
  };

  let isRefocus = false;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input.Wrap
      size={size}
      validationMessage={validationMessage}
      className={className}
      style={style}
      reversed={reversed}
      readonly={disabled === 'readonly'}
    >
      <Input
        {...restInputProps}
        ref={inputRef}
        disabled={!!disabled}
        id={id}
        name={name}
        onChange={({ value }) => {
          setOpened(true);
          handleChange({ value, preventInnerStateChange });
        }}
        onFocus={(e) => {
          if (isRefocus) isRefocus = false;
          else onFocus?.(e);
        }}
        onClick={(e) => {
          setOpened(true);
          onClick?.(e);
        }}
        onBlur={(e: SearchboxFocusEvent) => {
          if (e.relatedTarget?.name !== 'select-option-item') {
            setOpened(false);
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
          setOpened(false);
        }}
        float={float}
      />
    </Input.Wrap>
  );
};
