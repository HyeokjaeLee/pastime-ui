import { useMemo, useRef, useState } from 'react';
import { Search } from 'react-feather';

import { useSubscribedState, useValidationMessage } from '@hooks';
import type { ValidateHandler } from '@hooks';

import styles from './index.module.scss';
import { Select, Input } from '../../atoms';

import type { InputProps, InputWrapProps, SelectProps } from '../../atoms';

export interface SearchboxProps
  extends Omit<InputProps, 'size' | 'value' | 'onChange' | 'type' | 'onSelect'>,
    Pick<InputWrapProps, 'size'>,
    Pick<SelectProps<string, false>, 'float'> {
  filterByKeyword?: boolean;
  validation?: ValidateHandler<SearchboxProps['value']>;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  onSelect?: (value: string) => {
    preventDefault?: boolean;
  } | void;
}

type SearchboxFocusEvent = React.FocusEvent<
  HTMLInputElement,
  Element & HTMLButtonElement
>;

export const Searchbox = ({
  //* Searchbox props
  filterByKeyword = true,
  validation,
  options,
  value,
  onSelect,

  //* FocusLayer props
  className,
  style,

  //* Input.Wrap props
  size,

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
    >
      <Input
        {...restInputProps}
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
      <Search className={styles['search-icon']} />
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
