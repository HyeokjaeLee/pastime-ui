/// <reference types="react" />
import type { ValidOptionValue } from '../../../hooks';
import { HTMLTagProps } from '@types';
export interface SelectChangeEvent<TOptionValue extends ValidOptionValue, TMultiple extends boolean, TCancelable extends boolean> {
    value: TMultiple extends true ? TOptionValue[] : TCancelable extends true ? TOptionValue | undefined : TOptionValue;
}
export type SelectProps<TOptionValue extends ValidOptionValue = ValidOptionValue, TMultiple extends boolean = false, TCancelable extends boolean = false> = Omit<HTMLTagProps<'section'>, 'value' | 'onChange' | 'onKeyDown'> & {
    opened?: boolean;
    options?: {
        label: string;
        value: TOptionValue;
        decoration?: React.ReactNode;
    }[];
    multiple?: TMultiple;
    cancelable?: TCancelable;
    value?: TMultiple extends true ? TOptionValue[] : TOptionValue | undefined;
    onChange?: (event: SelectChangeEvent<TOptionValue, TMultiple, TCancelable>) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    float?: 'top' | 'bottom';
};
export declare const Select: <TOptionValue extends ValidOptionValue = ValidOptionValue, TMultiple extends boolean = false, TCancelable extends boolean = false>({ opened, options, multiple, cancelable, value: selectedValue, onChange, onKeyDown, float, className, ...restSectionProps }: SelectProps<TOptionValue, TMultiple, TCancelable>) => import("react/jsx-runtime").JSX.Element;
