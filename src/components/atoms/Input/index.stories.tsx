import React, { useState as createState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '..';

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  args: {
    placeholder: 'placeholder',
  },
  decorators: [
    (Story) => (
      <article className="story-container">
        <Story />
      </article>
    ),
  ],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'select',
    },
    disabled: {
      options: ['read-only', true, false],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = createState<string | number>('');
    return <Input {...args} value={value} onChange={setValue} />;
  },
};

export const NumberType: Story = {
  render: (args) => {
    const [numberValue, setNumberValue] = createState<string | number>('');
    return (
      <>
        <Input
          {...args}
          placeholder="number"
          type="number"
          value={numberValue}
          onChange={setNumberValue}
        />
        <Input
          {...args}
          placeholder="large number"
          type="large-number"
          value={numberValue}
          onChange={setNumberValue}
        />
        <Input
          {...args}
          placeholder="phone number"
          type="phone-number"
          value={numberValue}
          onChange={setNumberValue}
        />
      </>
    );
  },
};
