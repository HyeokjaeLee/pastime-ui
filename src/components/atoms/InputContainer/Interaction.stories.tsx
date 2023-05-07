import React, { useState as createState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputContainer } from '..';
import { Input } from '../Input';

const meta: Meta<typeof InputContainer.Intreraction> = {
  title: 'atoms/InputContainer/Interaction',
  component: InputContainer.Intreraction,

  args: {
    children: <Input />,
    theme: 'light',
    readonly: false,
    size: 'medium',
  },

  decorators: [
    (Story) => (
      <article className="story-container">
        <Story />
      </article>
    ),
  ],

  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: 'radio',
    },
    readonly: {
      control: 'boolean',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: 'radio',
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputContainer.Intreraction>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue,
      disabled: args.readonly,
    };
    return (
      <InputContainer>
        <InputContainer.Intreraction {...args}>
          <Input {...inputProps} />
        </InputContainer.Intreraction>
      </InputContainer>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue,
    };
    return (
      <>
        <InputContainer>
          <InputContainer.Intreraction {...args}>
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args} readonly>
            <Input {...inputProps} disabled />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args}>
            <Input {...inputProps} disabled />
          </InputContainer.Intreraction>
        </InputContainer>
      </>
    );
  },
};

export const Theme: Story = {
  render: (args) => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue,
      disabled: args.readonly,
    };

    return (
      <>
        <InputContainer>
          <InputContainer.Intreraction {...args}>
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args} theme="dark">
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
      </>
    );
  },
};

export const Size: Story = {
  render: (args) => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue,
      disabled: args.readonly,
    };

    return (
      <>
        <InputContainer>
          <InputContainer.Intreraction {...args} size="small">
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args}>
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer>
          <InputContainer.Intreraction {...args} size="large">
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
      </>
    );
  },
};
