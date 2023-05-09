import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputContainer } from '..';

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
      <InputContainer.Intreraction
        style={{
          width: '150px',
        }}
      />
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
  args: {
    validationMessage: 'validationMessage',
  },
};
