import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta: Meta<typeof Input.Container> = {
  title: 'atoms/Input/Container',
  component: Input.Container,
  argTypes: {
    validationMessage: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <article className="story-container">
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input.Container>;

export const InputConfiguration: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState('');
    return (
      <Input.Container {...args}>
        <Input.Wrap>
          <Input value={inputValue} onChange={setInputValue} />
        </Input.Wrap>
      </Input.Container>
    );
  },
};

export const Default: Story = {};

export const validationMessage: Story = {
  args: {
    validationMessage: 'validationMessage',
  },
};
