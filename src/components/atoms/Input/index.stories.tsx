import React from 'react';

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

export const Default: Story = {};
