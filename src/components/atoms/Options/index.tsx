import { useState, useEffect, useRef, useCallback } from 'react';
import { Check } from 'react-feather';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

export type ValidOptionValue = string | number;

export interface OptionsProps<
  OptionValue = ValidOptionValue,
  Multiple = boolean,
> {
  opened?: boolean;
  style?: React.CSSProperties;
  options?: {
    label: string;
    value: OptionValue;
  }[];
  multiple: Multiple;
  value?: Multiple extends true ? OptionValue[] : OptionValue;
  onChange?: (value: OptionsProps['value']) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  float?: 'top' | 'bottom';
  className?: string;
  theme?: 'light' | 'dark';
}

export const Options = <OptionValue, Multiple>({
  opened = false,
  options,
  multiple = false as Multiple,
  value: selectedValue,
  onChange,
  onKeyDown,
  float = 'bottom',
  className,
  style,
  theme = 'light',
}: OptionsProps<OptionValue, Multiple>) => {
  const [openState, setOpenState] = useState<boolean | 'closing' | 'opening'>(
    opened,
  );

  useEffect(() => {
    setOpenState((prevOpenState) => {
      if (prevOpenState !== opened) return opened ? 'opening' : 'closing';

      return prevOpenState;
    });
  }, [opened]);

  const isChangeOpenState = typeof openState === 'string';

  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const [indexForSelect, setIndexForSelect] = useState(-1);

  const valueForSelect = options?.[indexForSelect]?.value;
  const hasValueForSelect = valueForSelect !== undefined;

  useEffect(() => {
    if (isChangeOpenState) {
      const nextOpenState = openState === 'opening';

      if (nextOpenState) {
        const firstSelectedOptionIndex =
          options?.findIndex(({ value }) => selectedValue === value) ?? -1;
        setIndexForSelect(firstSelectedOptionIndex);

        if (firstSelectedOptionIndex >= 0) {
          const elementForSelect = refs.current[firstSelectedOptionIndex];
          elementForSelect?.scrollIntoView({
            block: 'start',
          });
        }
      }

      const timeout = setTimeout(() => setOpenState(nextOpenState), 250);
      return () => clearTimeout(timeout);
    }
  }, [isChangeOpenState, openState, options, selectedValue]);

  const checkSelected = useCallback(
    (
      valueForSelect: OptionValue,
      selectedValue?: OptionValue | OptionValue[],
    ) => {
      if (selectedValue === undefined) return false;

      return selectedValue instanceof Array
        ? selectedValue.includes(valueForSelect)
        : selectedValue === valueForSelect;
    },
    [],
  );

  const handleChange = useCallback(
    (
      valueForSelect: OptionValue,
      selectedValue?: OptionValue | OptionValue[],
    ) => {
      if (onChange) {
        const isAlreadySelected = checkSelected(valueForSelect, selectedValue);

        if (multiple) {
          const selectedValues = (selectedValue ?? []) as OptionValue[];
          const handleChange = onChange as (values: OptionValue[]) => void;

          handleChange(
            isAlreadySelected
              ? selectedValues.filter(
                  (selectedValue) => selectedValue !== valueForSelect,
                )
              : [...selectedValues, valueForSelect],
          );
        } else {
          const handleChange = onChange as (value?: OptionValue) => void;
          handleChange(isAlreadySelected ? undefined : valueForSelect);
        }
      }
    },
    [checkSelected, multiple, onChange],
  );

  const [mouseHoverLock, setMouseHoverLock] = useState(false);

  useEffect(() => {
    if (openState === true && options) {
      const keyboardEvent = (event: KeyboardEvent) => {
        const { key } = event;
        switch (key) {
          case 'Enter':
            event.preventDefault();
            return (
              hasValueForSelect && handleChange(valueForSelect, selectedValue)
            );

          case 'ArrowUp':
          case 'ArrowDown':
            setMouseHoverLock(true);
            event.preventDefault();

            return setIndexForSelect((prevIndex) => {
              if (key === 'ArrowDown') {
                prevIndex =
                  prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex;
              } else prevIndex = prevIndex > 0 ? prevIndex - 1 : 0;

              refs.current[prevIndex]?.scrollIntoView({ block: 'start' });

              return prevIndex;
            });

          default:
            return onKeyDown?.(event);
        }
      };

      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
  }, [
    handleChange,
    hasValueForSelect,
    onKeyDown,
    openState,
    options,
    selectedValue,
    valueForSelect,
  ]);

  return openState && options?.length ? (
    <section
      style={style}
      className={cleanClassName(
        `${styles.options} ${styles[theme]} ${styles[float]} ${
          isChangeOpenState && styles[openState]
        } ${className}`,
      )}
    >
      <ul
        className={cleanClassName(
          `${styles['option-container']} ${
            !mouseHoverLock && styles['mouse-hover-enabled']
          }`,
        )}
      >
        {options?.map((option, index) => {
          const isAlreadySelected =
            selectedValue instanceof Array
              ? selectedValue.includes(option.value)
              : selectedValue === option.value;

          return (
            <li key={index}>
              <button
                type="button"
                ref={(element) => {
                  refs.current[index] = element;
                }}
                className={cleanClassName(
                  `${styles['option-item']} ${
                    mouseHoverLock && indexForSelect === index && styles.hovered
                  } ${isAlreadySelected && styles.selected}`,
                )}
                onClick={() => handleChange(option.value, selectedValue)}
                onMouseEnter={() => {
                  if (openState === true && !mouseHoverLock)
                    setIndexForSelect(index);
                }}
                onMouseMove={() => setMouseHoverLock(false)}
              >
                <div>{option.label}</div>
                <div className={styles['check-icon-wrap']}>
                  {isAlreadySelected ? <Check /> : null}
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
