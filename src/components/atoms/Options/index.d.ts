/// <reference types="react" />
export type ValidOptionValue = string | number;
type HtmlSectionProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
export interface OptionsProps<OptionValue = ValidOptionValue, Multiple = boolean> extends Omit<HtmlSectionProps, 'value' | 'onChange' | 'onKeyDown'> {
    opened?: boolean;
    options?: {
        label: string;
        value: OptionValue;
    }[];
    multiple: Multiple;
    value?: Multiple extends true ? OptionValue[] : OptionValue;
    onChange?: (value: OptionsProps['value']) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    float?: 'top' | 'bottom';
    theme?: 'light' | 'dark';
}
export declare const Options: <OptionValue, Multiple>({ opened, options, multiple, value: selectedValue, onChange, onKeyDown, float, className, theme, ...restSectionProps }: OptionsProps<OptionValue, Multiple>) => JSX.Element;
export {};
