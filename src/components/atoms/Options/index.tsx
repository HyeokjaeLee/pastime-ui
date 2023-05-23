import { useState, useEffect, useRef } from 'react';
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

  const refs = useRef<(HTMLButtonElement | null)[]>([]);

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
                refs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });

          case 'ArrowDown':
            event.preventDefault();
            return setIndexForSelect((prevIndex) => {
              if (prevIndex < options.length - 1) {
                const nextIndex = prevIndex + 1;
                refs.current[nextIndex]?.focus();
                return nextIndex;
              }
              return prevIndex;
            });
          case 'Enter':
            event.preventDefault();
            return setIndexForSelect((index) => {
              if (index >= 0) refs.current[index]?.click();
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
      style={style}
      className={cleanClassName(
        `${styles.options} ${styles[theme]} ${styles[float]} ${
          isChangeOpenState && styles[openState]
        } ${className}`,
      )}
    >
      <ul className={cleanClassName(styles['option-container'])}>
        {options?.map(({ label, value }, index) => {
          const isHovered = index === indexForSelect;
          const isSelected = (() => {
            if (selectedValue === undefined) return false;

            if (multiple && selectedValue instanceof Array)
              return selectedValue.includes(value);

            return selectedValue === value;
          })();

          return (
            <li key={index} className={styles['option-wrap']}>
              <button
                type="button"
                ref={(element) => {
                  refs.current[index] = element;
                }}
                className={cleanClassName(
                  `${styles['option-item']} ${isHovered && styles.hovered} ${
                    isSelected && styles.selected
                  }`,
                )}
                onClick={() => {
                  if (multiple) {
                    const selectedValues = (selectedValue ??
                      []) as OptionValue[];
                    const handleChange = onChange as
                      | ((values: OptionValue[]) => void)
                      | undefined;
                    handleChange?.(
                      isSelected
                        ? selectedValues.filter(
                            (selectedValue) => selectedValue !== value,
                          )
                        : [...selectedValues, value],
                    );
                  } else {
                    const handleChange = onChange as
                      | ((value?: OptionValue) => void)
                      | undefined;
                    handleChange?.(isSelected ? undefined : value);
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
