/// <reference types="react" />
type ValidOptionValue = string | number | undefined;
export interface Option<_OptionValue extends ValidOptionValue = ValidOptionValue> {
    label: string;
    value: _OptionValue;
}
type OptionsValue<_Option, _Multiple> = _Multiple extends true ? _Option[] : _Option;
export interface OptionsProps<_Option extends Option = Option, _Multiple extends boolean = false> {
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
export declare const Options: <_Option extends Option<ValidOptionValue> = Option<ValidOptionValue>, _Multiple extends boolean = false>({ opened, options, multiple, value, onSelect, onKeyDown, float, className, style, theme, }: OptionsProps<_Option, _Multiple>) => JSX.Element;
export {};
