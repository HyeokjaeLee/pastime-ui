import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta: Meta<typeof Input.Wrap> = {
  title: 'atoms/Input/Wrap',
  component: Input.Wrap,

  args: {
    theme: 'light',
    size: 'medium',
    style: {
      width: '150px',
    },
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
    size: {
      options: ['small', 'medium', 'large'],
      control: 'radio',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input.Wrap>;

export const InputConfiguration: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useState('');
    return (
      <Input.Container>
        <Input.Wrap {...args}>
          <Input value={inputValue} onChange={setInputValue} />
        </Input.Wrap>
      </Input.Container>
    );
  },
};

export const Default: Story = {};

export const Theme: Story = {
  render: (args) => (
    <>
      <Input.Wrap {...args} theme="light" />
      <Input.Wrap {...args} theme="dark" />
    </>
  ),
};

export const Size: Story = {
  render: (args) => (
    <>
      <Input.Wrap {...args} size="small" />
      <Input.Wrap {...args} size="medium" />
      <Input.Wrap {...args} size="large" />
    </>
  ),
};
