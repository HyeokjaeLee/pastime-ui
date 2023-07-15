/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import type { InputProps, InputWrapProps } from '.';
type MetaProps = InputProps & Pick<InputWrapProps, 'validationMessage' | 'size'>;
declare const _default: {
    title: string;
    component: (({ type, value, disabled, onChange, placeholder, className, onFocus, onBlur, ...restInputProps }: InputProps) => JSX.Element) & {
        Wrap: ({ size, validationMessage, children, ...restDivProps }: InputWrapProps) => JSX.Element;
    };
    args: {
        placeholder: string;
        validationMessage: string;
    };
    argTypes: {
        ref: {
            table: {
                disable: boolean;
            };
        };
        onChange: {
            table: {
                disable: boolean;
            };
        };
        validationMessage: {
            table: {
                category: string;
            };
        };
        size: {
            table: {
                category: string;
                defaultValue: {
                    summary: string;
                };
            };
            options: string[];
            control: string;
            description: string;
        };
        placeholder: {
            control: string;
            description: string;
            table: {
                category: string;
            };
        };
        type: {
            control: string;
            table: {
                category: string;
            };
        };
        value: {
            control: string;
            table: {
                category: string;
            };
        };
        disabled: {
            options: (string | boolean)[];
            control: {
                type: string;
            };
            table: {
                category: string;
            };
        };
    };
};
export default _default;
type Story = StoryObj<MetaProps>;
export declare const Default: Story;
