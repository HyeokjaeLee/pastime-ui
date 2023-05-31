import { useMemo, useState } from 'react';
import { Search } from 'react-feather';

import styles from './index.module.scss';
import { useSubscribedState, useValidation } from '../../../hooks';
import { FocusLayer, Options, Input, FocusLayerProps } from '../../atoms';

import type { Validation } from '../../../hooks';
import type { InputProps, InputWrapProps, OptionsProps } from '../../atoms';

export interface SearchboxProps
  extends Omit<
      InputProps,
      'size' | 'value' | 'onChange' | 'className' | 'style' | 'type'
    >,
    Pick<FocusLayerProps, 'className' | 'style'>,
    Pick<InputWrapProps, 'size' | 'theme'>,
    Pick<OptionsProps<string, false>, 'float'> {
  filterByKeyword?: boolean;
  validation?: Validation<SearchboxProps['value']>;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Searchbox = ({
  //* Searchbox props
  filterByKeyword = true,
  validation,
  options,
  value,

  //* Input.Container props
  className,
  style,

  //* Input.Wrap props
  size,
  theme,

  //* Options props
  float,

  //* Input props
  onChange,
  onFocus,
  onClick,
  id,
  name,
  ...restInputProps
}: SearchboxProps) => {
  const [opened, setOpened] = useState(false);
  const [inputValue, setInputValue] = useSubscribedState(value);

  const labeledOptions = useMemo(
    () => options?.map((value) => ({ label: value, value })),
    [options],
  );

  let filteredOptions = labeledOptions;

  if (filterByKeyword && filteredOptions && inputValue) {
    const standardizeString = (value: string) =>
      value.toLowerCase().replace(/[^a-z0-9가-힣]/gi, '');

    const standardizeInputTextArray = inputValue
      .split(' ')
      .map((value) => standardizeString(value));

    filteredOptions = filteredOptions.filter(({ value }) => {
      const standardizeOption = standardizeString(value);
      return standardizeInputTextArray.every((inputText) =>
        standardizeOption.includes(inputText),
      );
    });
  }

  const { validationMessage, checkValidation } = useValidation(
    inputValue,
    validation,
    id || name,
  );

  const handleChange: typeof onChange = (value) => {
    setInputValue?.(value);
    onChange?.(value);
    checkValidation?.(value);
  };

  return (
    <FocusLayer
      onClick={() => setOpened(false)}
      focused={opened}
      className={className}
      style={style}
      backgroundScroll
    >
      <Input.Container validationMessage={validationMessage}>
        <Input.Wrap size={size} theme={theme}>
          <Input
            {...restInputProps}
            id={id}
            name={name}
            onChange={(value) => {
              setOpened(true);
              handleChange(value);
            }}
            onClick={(e) => {
              setOpened(true);
              onClick?.(e);
            }}
            onFocus={onFocus}
            value={inputValue}
          />
          <Search className={styles['search-icon']} />
        </Input.Wrap>
        <Options
          opened={opened}
          options={filteredOptions}
          value={inputValue}
          onChange={(value) => {
            if (value) {
              setOpened(false);
              handleChange(value);
            }
          }}
          float={float}
        />
      </Input.Container>
    </FocusLayer>
  );
};