import { useRef } from 'react';
import { Check } from 'react-feather';

import {
  useDarkMode,
  useIndexForSelect,
  useOpeningTransitionState,
  OPENING_TRANSITION,
  useMountedEffect,
} from '@hooks';
import type { ValidOptionValue } from '@hooks';
import { HTMLTagProps } from '@types';
import { cleanClassName } from '@utils';

import styles from './index.module.scss';

type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface SelectChangeEvent<T> extends Omit<ButtonMouseEvent, 'target'> {
  target: ButtonMouseEvent['target'] & {
    value: T;
  };
}

type SelectChangeEventHandler<T> = (event: SelectChangeEvent<T>) => void;

export type SelectProps<
  TOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
> = Omit<HTMLTagProps<'section'>, 'value' | 'onChange' | 'onKeyDown'> & {
  opened?: boolean;
  options?: {
    label: string;
    value: TOptionValue;
    decoration?: React.ReactNode;
  }[];
  multiple?: TMultiple;
  value?: TMultiple extends true ? TOptionValue[] : TOptionValue;
  onChange?: SelectChangeEventHandler<
    SelectProps<TOptionValue, TMultiple>['value']
  >;
  onKeyDown?: (event: KeyboardEvent) => void;
  float?: 'top' | 'bottom';
  cancelable?: boolean;
};

export const Select = <
  TOptionValue extends ValidOptionValue = ValidOptionValue,
  TMultiple extends boolean = false,
>({
  //* Select props
  opened = false,
  options,
  multiple = false as TMultiple,
  value: selectedValue,
  onChange,
  onKeyDown,
  float = 'bottom',
  cancelable = true,

  //* HTML section props
  className,
  ...restSectionProps
}: SelectProps<TOptionValue, TMultiple>) => {
  const [openingTransition, setOpeningTransition] = useOpeningTransitionState({
    openingTransition: opened
      ? OPENING_TRANSITION.OPENED
      : OPENING_TRANSITION.CLOSED,
    openingDuration: 200,
    closingDuration: 200,
  });

  useMountedEffect(() => setOpeningTransition(opened), [opened]);

  const { isDarkMode } = useDarkMode();

  const optionItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [indexForSelect, setIndexForSelect] = useIndexForSelect({
    openingTransition,
    options,
    optionItemRefs,
    onKeyDown,
  });

  return openingTransition && options?.length ? (
    <section
      {...restSectionProps}
      className={cleanClassName(
        `${styles.select} ${isDarkMode && styles.dark} ${styles[float]} ${
          openingTransition === OPENING_TRANSITION.CLOSING && styles.closing
        } ${
          openingTransition === OPENING_TRANSITION.OPENING && styles.opening
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
                onClick={(event) => {
                  if (multiple) {
                    type MultipleSelectProps = SelectProps<TOptionValue, true>;
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
                      ...event,
                      target: {
                        ...event.target,
                        value: valuesForSelect,
                      },
                    });
                  } else {
                    type SingleSelectProps = SelectProps<TOptionValue, false>;
                    const handleChange =
                      onChange as SingleSelectProps['onChange'];

                    handleChange?.({
                      ...event,
                      target: {
                        ...event.target,
                        value: isSelected && cancelable ? undefined : value,
                      },
                    });
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
