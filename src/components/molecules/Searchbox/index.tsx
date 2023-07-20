import { useMemo, useRef, useState } from 'react';
import { Search } from 'react-feather';

import { useSubscribedState, useValidationMessage } from '@hooks';
import type { ValidateHandler } from '@hooks';
import { InputDisabled } from '@types';

import styles from './index.module.scss';
import { Select, Input } from '../../atoms';

import type { InputProps, InputWrapProps, SelectProps } from '../../atoms';

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
  onChange?: (value: string) => void;
  onSelect?: (value: string) => {
    preventDefault?: boolean;
  } | void;
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
  onSelect,
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
  onChange,
  onClick,
  onFocus,
  id,
  name,
  onBlur,
  ...restInputProps
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useSubscribedState(value);

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

  const handleChange: typeof onChange = (value) => {
    setInputValue(value);
    onChange?.(value);
    validateValue(value);
  };

  const tempSearchboxFocusEvent = useRef<SearchboxFocusEvent>();
  let isRefocus = false;

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
        disabled={!!disabled}
        id={id}
        name={name}
        onChange={(value) => {
          setOpened(true);
          handleChange(value);
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
          if (e.relatedTarget?.name === 'select-option-item')
            tempSearchboxFocusEvent.current = e;
          else {
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
        onChange={(value) => {
          const { preventDefault } = onSelect?.(value ?? '') ?? {};
          if (!preventDefault) handleChange(value ?? '');
          isRefocus = true;
          tempSearchboxFocusEvent.current?.target.focus();
          setOpened(false);
        }}
        float={float}
      />
    </Input.Wrap>
  );
};
