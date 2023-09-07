import { useRef } from 'react';
import { Check } from 'react-feather';

import {
  useDarkMode,
  useIndexForSelect,
  useModalClosing,
  MODAL_CLOSING_STATE,
} from '@hooks';
import type { FixedDarkMode, ValidOptionValue } from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

export interface SelectChangeEvent<
  TOptionValue extends ValidOptionValue,
  TMultiple extends boolean,
  TCancelable extends boolean,
> {
  value: TMultiple extends true
    ? TOptionValue[]
    : TCancelable extends true
    ? TOptionValue | undefined
    : TOptionValue;
}

export type SelectProps<
  TOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
  TCancelable extends boolean = false,
> = Omit<HTMLTagProps<'section'>, 'value' | 'onChange' | 'onKeyDown'> & {
  opened?: boolean;
  options?: {
    label: string;
    value: TOptionValue;
    decoration?: React.ReactNode;
  }[];
  multiple?: TMultiple;
  cancelable?: TCancelable;
  value?: TMultiple extends true ? TOptionValue[] : TOptionValue | undefined;
  onChange?: (
    event: SelectChangeEvent<TOptionValue, TMultiple, TCancelable>,
  ) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  float?: 'top' | 'bottom';
  fixedDarkMode?: FixedDarkMode;
};

export const Select = <
  TOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
  TCancelable extends boolean = false,
>({
  //* Select props
  opened = false,
  options,
  multiple = false as TMultiple,
  cancelable = false as TCancelable,
  value: selectedValue,
  onChange,
  onKeyDown,
  float = 'bottom',
  fixedDarkMode,

  //* HTML section props
  className,
  ...restSectionProps
}: SelectProps<TOptionValue, TMultiple, TCancelable>) => {
  const closingTransition = useModalClosing({
    opened,
    closingDuration: 100,
  });

  const { isDarkMode } = useDarkMode(fixedDarkMode);

  const optionItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [indexForSelect, setIndexForSelect] = useIndexForSelect({
    closingTransition,
    options,
    optionItemRefs,
    onKeyDown,
  });

  return closingTransition && options?.length ? (
    <section
      {...restSectionProps}
      className={cleanClassName(
        `${styles.select} ${isDarkMode && styles.dark} ${styles[float]} ${
          closingTransition === MODAL_CLOSING_STATE.CLOSING && styles.closing
        } ${className}`,
      )}
    >
      <ul className={cleanClassName(styles['select-container'])}>
        {options?.map(({ label, value, decoration }, index) => {
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
                  optionItemRefs.current[index] = element;
                }}
                className={cleanClassName(
                  `${styles['select-option-item']} ${
                    isHovered && styles.hovered
                  }`,
                )}
                onClick={() => {
                  if (multiple) {
                    type MultipleSelectProps = SelectProps<
                      TOptionValue,
                      true,
                      TCancelable
                    >;
                    let valuesForSelect =
                      (selectedValue as MultipleSelectProps['value']) ?? [];

                    const handleChange =
                      onChange as MultipleSelectProps['onChange'];

                    if (cancelable) {
                      valuesForSelect = isSelected
                        ? valuesForSelect?.filter(
                            (selectedValue) => selectedValue !== value,
                          )
                        : [...valuesForSelect, value];
                    }

                    handleChange?.({
                      value: valuesForSelect,
                    });
                  } else {
                    type SingleSelectProps = SelectProps<
                      TOptionValue,
                      false,
                      TCancelable
                    >;
                    const handleChange =
                      onChange as SingleSelectProps['onChange'];

                    handleChange?.({
                      value: isSelected && cancelable ? undefined : value,
                    } as SelectChangeEvent<TOptionValue, false, TCancelable>);
                  }
                }}
                onMouseEnter={() => setIndexForSelect(index)}
              >
                {decoration ? <div>{decoration}</div> : null}
                <div>{label}</div>
                <div
                  className={cleanClassName(
                    `${styles['icon-wrap']} ${isSelected && styles.show}`,
                  )}
                >
                  {<Check size="1.2em" />}
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
