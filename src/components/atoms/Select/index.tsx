import { useState, useEffect, useRef } from 'react';
import { Check } from 'react-feather';

import { useDarkMode } from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export type ValidOptionValue = string | number;

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
  const [openState, setOpenState] = useState<boolean | 'closing' | 'opening'>(
    opened,
  );

  useEffect(() => {
    setOpenState((prevOpenState) => {
      if (prevOpenState !== opened) return opened ? 'opening' : 'closing';
      return prevOpenState;
    });
  }, [opened]);

  const { isDarkMode } = useDarkMode();

  const isChangeOpenState = typeof openState === 'string';
  const [indexForSelect, setIndexForSelect] = useState(-1);

  useEffect(() => {
    if (isChangeOpenState) {
      const nextOpenState = openState === 'opening';

      setIndexForSelect(
        options?.findIndex(({ value }) => value === selectedValue) ?? -1,
      );

      const timeout = setTimeout(() => setOpenState(nextOpenState), 250);
      return () => clearTimeout(timeout);
    }
  }, [isChangeOpenState, openState, options, selectedValue]);

  const selectRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (openState === true && options) {
      const keyboardEvent = (event: KeyboardEvent) => {
        onKeyDown?.(event);
        switch (event.key) {
          case 'ArrowUp':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex > 0) {
                const nextIndex = prevIndex - 1;
                selectRefs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });

          case 'ArrowDown':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex < options.length - 1) {
                const nextIndex = prevIndex + 1;
                selectRefs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });
          case 'Enter':
            event.preventDefault();
            return setIndexForSelect((index) => {
              if (index >= 0) selectRefs.current[index]?.click();
              return index;
            });
          default:
        }
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [openState, options, onKeyDown]);

  return openState && options?.length ? (
    <section
      {...restSectionProps}
      className={cleanClassName(
        `${styles.select} ${isDarkMode && styles.dark} ${styles[float]} ${
          isChangeOpenState && styles[openState]
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
