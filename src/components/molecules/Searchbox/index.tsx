import { useMemo, useRef, useState } from 'react';
import { Search } from 'react-feather';

import type {
  InputProps,
  InputWrapProps,
  SelectProps,
} from '@components/atoms';
import { Select, Input } from '@components/atoms';
import { useSubscribedState, useValidationMessage } from '@hooks';
import type { ValidateHandler } from '@hooks';
import { InnerStateChangeEventHandler, InputDisabled } from '@types';

import styles from './index.module.scss';

export interface SearchboxProps
  extends Omit<
      InputProps,
      | 'size'
      | 'value'
      | 'onChange'
      | 'type'
      | 'onSelect'
      | 'className'
      | 'style'
      | 'disabled'
    >,
    Pick<InputWrapProps, 'size' | 'reversed' | 'style' | 'className'>,
    Pick<SelectProps<string, false>, 'float'> {
  filterByKeyword?: boolean;
  validation?: ValidateHandler<SearchboxProps['value']>;
  options?: string[];
  value?: string;
  onChange?: InnerStateChangeEventHandler<string>;
  children?: React.ReactNode;
  disabled?: InputDisabled;
}

type SearchboxFocusEvent = React.FocusEvent<
  HTMLInputElement,
  Element & HTMLButtonElement
>;

// TODO: 추후 추상화 필요
export const Searchbox = ({
  //* Searchbox props
  filterByKeyword = true,
  validation,
  options,
  value,
  onChange,
  children = <Search size="1.5em" strokeWidth="2px" />,
  disabled,

  //* Input.Wrap props
  size,
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

  const labeledSelect = useMemo(
    () => options?.map((value) => ({ label: value, value })),
    [options],
  );

  let filteredSelect = labeledSelect;

  if (filterByKeyword && filteredSelect && inputValue) {
    const standardizeString = (value: string) =>
      value.toLowerCase().replace(/[^a-z0-9가-힣]/gi, '');

    const standardizeInputTextArray = inputValue
      .split(' ')
      .map((value) => standardizeString(value));

    filteredSelect = filteredSelect.filter(({ value }) => {
      const standardizeOption = standardizeString(value);
      return standardizeInputTextArray.every((inputText) =>
        standardizeOption.includes(inputText),
      );
    });
  }

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
        options={filteredSelect}
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
