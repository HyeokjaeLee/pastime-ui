/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import type { InputProps, InputContainerProps, InputWrapProps } from '.';
type MetaProps = InputProps & Pick<InputWrapProps, 'size' | 'theme'> & Pick<InputContainerProps, 'validationMessage'>;
declare const _default: {
    title: string;
    component: ((props: InputProps) => JSX.Element | null) & {
        Container: ({ children, className, validationMessage, ...restDivProps }: InputContainerProps) => JSX.Element;
        Wrap: ({ size, className, theme, ...restDivProps }: InputWrapProps) => JSX.Element;
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
            control: {
                type: string;
            };
            options: string[];
            defaultValue: string;
            table: {
                category: string;
            };
        };
        theme: {
            control: {
                type: string;
            };
            options: string[];
            defaultValue: string;
            table: {
                category: string;
            };
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
