import { createRef, useMemo, useState, useEffect } from 'react';
import { Check } from 'react-feather';

import styles from './index.module.scss';
import { cleanClassName } from '../../../utils';

type ValidOptionValue = string | number | undefined;

export interface Option<
  _OptionValue extends ValidOptionValue = ValidOptionValue,
> {
  label: string;
  value: _OptionValue;
}

type OptionsValue<_Option, _Multiple> = _Multiple extends true
  ? _Option[]
  : _Option;

export interface OptionsProps<
  _Option extends Option = Option,
  _Multiple extends boolean = false,
> {
  opened?: boolean;
  style?: React.CSSProperties;
  options?: _Option[];
  multiple?: _Multiple;
  value?: OptionsValue<_Option, _Multiple>;
  onSelect?: (option?: OptionsValue<_Option, _Multiple>) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  float?: 'top' | 'bottom';
  className?: string;
  theme?: 'light' | 'dark';
}

export const Options = <
  _Option extends Option = Option,
  _Multiple extends boolean = false,
>({
  opened = false,
  options,
  multiple,
  value,
  onSelect,
  onKeyDown,
  float = 'bottom',
  className,
  style,
  theme = 'light',
}: OptionsProps<_Option, _Multiple>) => {
  const refList = useMemo(
    () => options?.map(() => createRef<HTMLButtonElement>()),
    [options],
  );

  const optionData = useMemo(
    () =>
      refList &&
      options?.map((option, index) => {
        let isAlreadySelected = false;

        if (value) {
          isAlreadySelected =
            value instanceof Array
              ? value.some(
                  (selectedOption) =>
                    option.value === selectedOption.value &&
                    option.label === selectedOption.label,
                )
              : value.value === option.value && value.label === option.label;
        }

        return {
          option,
          ref: refList[index],
          isAlreadySelected,
        };
      }),
    [options, refList, value],
  );

  const [optionIndexForSelect, setOptionIndexForSelect] = useState(-1);

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

  useEffect(() => {
    if (isChangeOpenState) {
      const nextOpenState = openState === 'opening';
      if (nextOpenState) {
        setOptionIndexForSelect(-1);

        const firstSelectedOptionRef = optionData?.find(
          ({ isAlreadySelected }) => isAlreadySelected,
        )?.ref;

        if (firstSelectedOptionRef) {
          firstSelectedOptionRef.current?.scrollIntoView({
            block: 'start',
          });
        }
      }
      const timeout = setTimeout(() => setOpenState(nextOpenState), 250);
      return () => clearTimeout(timeout);
    }
  }, [openState, isChangeOpenState, optionData]);

  const optionDataForSelect = optionData?.[optionIndexForSelect];

  const handleSelect = useMemo(
    () =>
      onSelect &&
      ((multiple
        ? (value, optionForSelect, isAlreadySelected) => {
            const selectedOptions = value as _Option[] | undefined;
            const handleSelect = onSelect as (option?: _Option[]) => void;

            if (!selectedOptions) return handleSelect([optionForSelect]);

            return handleSelect(
              isAlreadySelected
                ? selectedOptions.filter(
                    ({ label, value }) =>
                      label !== optionForSelect.label ||
                      value !== optionForSelect.value,
                  )
                : [...selectedOptions, optionForSelect],
            );
          }
        : (value, optionForSelect, isAlreadySelected) => {
            const selectedOption = value as _Option | undefined;
            const handleSelect = onSelect as (option?: _Option) => void;

            if (!selectedOption) return handleSelect(optionForSelect);

            return handleSelect(
              isAlreadySelected ? undefined : optionForSelect,
            );
          }) satisfies (
        _value: typeof value,
        _optionForSelect: _Option,
        _isAlreadySelected: boolean,
      ) => void),
    [multiple, onSelect],
  );

  const [mouseHoverLock, setMouseHoverLock] = useState(false);
  const [keyboardEventLock, setKeyboardEventLock] = useState(true);

  useEffect(() => {
    if (openState === true && !keyboardEventLock && optionData) {
      const keyboardEvent = (event: KeyboardEvent) => {
        const { key } = event;
        switch (key) {
          case 'Enter':
            event.preventDefault();
            return (
              optionDataForSelect &&
              handleSelect?.(
                value,
                optionDataForSelect.option,
                optionDataForSelect.isAlreadySelected,
              )
            );

          case 'ArrowUp':
          case 'ArrowDown':
            setMouseHoverLock(true);
            event.preventDefault();

            return setOptionIndexForSelect((prevIndex) => {
              if (key === 'ArrowDown') {
                prevIndex =
                  prevIndex < optionData.length - 1 ? prevIndex + 1 : prevIndex;
              } else prevIndex = prevIndex > 0 ? prevIndex - 1 : 0;

              optionData[prevIndex].ref.current?.scrollIntoView({
                block: 'start',
              });

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
    handleSelect,
    onKeyDown,
    openState,
    optionData,
    optionDataForSelect,
    value,
    keyboardEventLock,
  ]);

  return openState && optionData?.length ? (
    <section
      style={style}
      className={cleanClassName(
        `${styles.options} ${styles[theme]} ${styles[float]} ${
          isChangeOpenState && styles[openState]
        } ${className}`,
      )}
      onMouseEnter={() => setKeyboardEventLock(false)}
      onMouseLeave={() => setKeyboardEventLock(true)}
    >
      <ul
        className={cleanClassName(
          `${styles['option-container']} ${
            !mouseHoverLock && styles['mouse-hover-enabled']
          }`,
        )}
      >
        {optionData.map(({ option, ref, isAlreadySelected }, index) => (
          <li key={index}>
            <button
              type="button"
              ref={ref}
              className={cleanClassName(
                `${styles['option-item']} ${
                  mouseHoverLock &&
                  optionIndexForSelect === index &&
                  styles.hovered
                } ${isAlreadySelected && styles.selected}`,
              )}
              onClick={() => handleSelect?.(value, option, isAlreadySelected)}
              onMouseEnter={() =>
                openState === true &&
                !mouseHoverLock &&
                setOptionIndexForSelect(index)
              }
              onMouseMove={() => setMouseHoverLock(false)}
            >
              <div>{option.label}</div>
              {multiple ? (
                <div className={styles['check-icon-wrap']}>
                  {isAlreadySelected ? <Check /> : null}
                </div>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <></>
  );
};
