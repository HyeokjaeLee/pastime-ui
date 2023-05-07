import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputContainer } from '..';
import { Input } from '../Input';

const meta: Meta<typeof InputContainer> = {
  title: 'atoms/InputContainer',
  component: InputContainer,
  argTypes: {
    validationMessage: {
      control: 'text',
    },
  },
  args: {
    children: (
      <InputContainer.Intreraction>
        <Input />
      </InputContainer.Intreraction>
    ),
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

type Story = StoryObj<typeof InputContainer>;

export const Default: Story = {};

export const validationMessage: Story = {
  render: (args) => (
    <>
      <InputContainer {...args} validationMessage={null} />
      <InputContainer {...args} validationMessage="validation message" />
    </>
  ),
};
