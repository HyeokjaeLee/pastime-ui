/// <reference types="react" />
import type { ValidOptionValue } from '@hooks';
import { HTMLTagProps } from '@types';
export type SelectProps<TOptionValue extends ValidOptionValue = ValidOptionValue, TMultiple extends boolean = false> = Omit<HTMLTagProps<'section'>, 'value' | 'onChange' | 'onKeyDown'> & {
    opened?: boolean;
    options?: {
        label: string;
        value: TOptionValue;
        decoration?: React.ReactNode;
    }[];
    multiple?: TMultiple;
    value?: TMultiple extends true ? TOptionValue[] : TOptionValue;
    onChange?: (value: SelectProps<TOptionValue, TMultiple>['value']) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    float?: 'top' | 'bottom';
    cancelable?: boolean;
};
export declare const Select: <TOptionValue extends ValidOptionValue = ValidOptionValue, TMultiple extends boolean = false>({ opened, options, multiple, value: selectedValue, onChange, onKeyDown, float, cancelable, className, ...restSectionProps }: SelectProps<TOptionValue, TMultiple>) => JSX.Element;
