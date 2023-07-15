/// <reference types="react" />
import type { ValidOptionValue } from '@hooks';
import { HTMLTagProps } from '@types';
export type SelectProps<OptionValue extends ValidOptionValue = ValidOptionValue, Multiple extends boolean = false> = Omit<HTMLTagProps<'section'>, 'value' | 'onChange' | 'onKeyDown'> & {
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
export declare const Select: <OptionValue extends ValidOptionValue = ValidOptionValue, Multiple extends boolean = false>({ opened, options, multiple, value: selectedValue, onChange, onKeyDown, float, cancelable, className, ...restSectionProps }: SelectProps<OptionValue, Multiple>) => JSX.Element;
