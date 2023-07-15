import { useRef } from 'react';
import { Check } from 'react-feather';

import { useDarkMode, useIndexForSelect, useSelectOpenStatus } from '@hooks';
import type { ValidOptionValue } from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export type SelectProps<
  OptionValue extends ValidOptionValue = ValidOptionValue,
  Multiple extends boolean = false,
> = Omit<HTMLTagProps<'section'>, 'value' | 'onChange' | 'onKeyDown'> & {
  opened?: boolean;
  options?: {
    label: string;
    value: OptionValue;
  }[];
  multiple?: Multiple;
  value?: Multiple extends true ? OptionValue[] : OptionValue;
  onChange?: (value: SelectProps<OptionValue, Multiple>['value']) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  float?: 'top' | 'bottom';
  cancelable?: boolean;
};

export const Select = <
  OptionValue extends ValidOptionValue = ValidOptionValue,
  Multiple extends boolean = false,
>({
  //* Select props
  opened = false,
  options,
  multiple = false as Multiple,
  value: selectedValue,
  onChange,
  onKeyDown,
  float = 'bottom',
  cancelable = true,

  //* HTML section props
  className,
  ...restSectionProps
}: SelectProps<OptionValue, Multiple>) => {
  const openStatus = useSelectOpenStatus(opened);

  const { isDarkMode } = useDarkMode();

  const selectRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [indexForSelect, setIndexForSelect] = useIndexForSelect({
    openStatus,
    options,
    selectRefs,
    onKeyDown,
  });

  return openStatus && options?.length ? (
    <section
      {...restSectionProps}
      className={cleanClassName(
        `${styles.select} ${isDarkMode && styles.dark} ${styles[float]} ${
          typeof openStatus === 'string' && styles[openStatus]
        } ${className}`,
      )}
    >
      <ul className={cleanClassName(styles['select-container'])}>
        {options?.map(({ label, value }, index) => {
          const isHovered = index === indexForSelect;
          const isSelected = (() => {
            if (selectedValue === undefined) return false;

            if (multiple && selectedValue instanceof Array)
              return selectedValue.includes(value);

            return selectedValue === value;
          })();

          return (
            <li key={index} className={styles['select-wrap']}>
              <button
                name="select-option-item"
                type="button"
                ref={(element) => {
                  selectRefs.current[index] = element;
                }}
                className={cleanClassName(
                  `${styles['select-option-item']} ${
                    isHovered && styles.hovered
                  }`,
                )}
                onClick={() => {
                  if (multiple) {
                    let valuesForSelect = (selectedValue ??
                      []) as OptionValue[];

                    const handleChange = onChange as
                      | ((values: OptionValue[]) => void)
                      | undefined;

                    if (cancelable) {
                      valuesForSelect = isSelected
                        ? valuesForSelect.filter(
                            (selectedValue) => selectedValue !== value,
                          )
                        : [...valuesForSelect, value];
                    }

                    handleChange?.(valuesForSelect);
                  } else {
                    const handleChange = onChange as
                      | ((value?: OptionValue) => void)
                      | undefined;

                    handleChange?.(
                      isSelected && cancelable ? undefined : value,
                    );
                  }
                }}
                onMouseEnter={() => {
                  setIndexForSelect(index);
                }}
              >
                <div>{label}</div>
                <div
                  className={cleanClassName(
                    `${styles['icon-wrap']} ${isSelected && styles.show}`,
                  )}
                >
                  {<Check size="1em" />}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  ) : (
    <></>
  );
};
