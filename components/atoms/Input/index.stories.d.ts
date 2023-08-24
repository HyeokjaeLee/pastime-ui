/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
import type { InputProps, InputWrapProps } from '.';
type MetaProps = InputProps & Pick<InputWrapProps, 'validationMessage' | 'size' | 'reversed' | 'label' | 'fixedDarkMode'>;
declare enum CATEGORY {
    INPUT = "Input",
    INPUT_WRAP = "Input.Wrap"
}
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>> & {
        Wrap: ({ size, validationMessage, reversed, label, required, fixedDarkMode, children, className, ...restDivProps }: InputWrapProps) => import("react/jsx-runtime").JSX.Element;
    };
    args: {
        placeholder: string;
        validationMessage: string;
        label: string;
    };
    argTypes: {
        size: any;
        label: any;
        required: any;
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
        fixedDarkMode: any;
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
