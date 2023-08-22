import { useDeferredValue, useMemo } from 'react';

export interface UseFilteredSearchOptionsParams {
  options?: string[];
  filterByKeyword?: boolean;
  inputValue?: string;
}

export const useFilteredSearchOptions = ({
  options,
  filterByKeyword,
  inputValue,
}: UseFilteredSearchOptionsParams) => {
  const value = useDeferredValue(inputValue);

  return useMemo(() => {
    if (options) {
      let filteredOptions = options;

      if (filterByKeyword && value) {
        const standardizeString = (value: string) =>
          value.toLowerCase().replace(/[^a-z0-9가-힣]/gi, '');

        const standardizeInputTextArray = value
          .split(' ')
          .map((value) => standardizeString(value));

        filteredOptions = filteredOptions.filter((value) => {
          const standardizeOption = standardizeString(value);

          return standardizeInputTextArray.every((inputText) =>
            standardizeOption.includes(inputText),
          );
        });
      }

      return filteredOptions.map((value) => ({
        label: value,
        value,
      }));
    }
  }, [filterByKeyword, options, value]);
};
