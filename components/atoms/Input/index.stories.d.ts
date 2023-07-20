/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import type { InputProps, InputWrapProps } from '.';
type MetaProps = InputProps & Pick<InputWrapProps, 'validationMessage' | 'size' | 'reversed'>;
declare enum CATEGORY {
    INPUT = "Input",
    INPUT_WRAP = "Input.Wrap"
}
declare const _default: {
    title: string;
    component: (({ type, value, onChange, placeholder, className, onFocus, onBlur, ...restInputProps }: InputProps) => JSX.Element) & {
        Wrap: ({ size, validationMessage, readonly, reversed, children, className, ...restDivProps }: InputWrapProps) => JSX.Element;
    };
    args: {
        placeholder: string;
        validationMessage: string;
    };
    argTypes: {
        size: any;
        validationMessage: {
            description: string;
            table: {
                category: CATEGORY;
                type: {
                    summary: string;
                };
            };
        };
        reversed: any;
        onChange: {
            table: {
                disable: boolean;
            };
        };
        placeholder: any;
        type: {
            table: {
                category: CATEGORY;
            };
            control: string;
        };
        value: {
            table: {
                category: CATEGORY;
            };
            control: string;
        };
        disabled: any;
    };
};
export default _default;
type Story = StoryObj<MetaProps>;
export declare const Default: Story;
