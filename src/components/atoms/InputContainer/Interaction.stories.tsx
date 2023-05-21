import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputContainer } from '..';

const meta: Meta<typeof InputContainer.Interaction> = {
  title: 'atoms/InputContainer/Interaction',
  component: InputContainer.Interaction,

  args: {
    theme: 'light',
    readonly: false,
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

type Story = StoryObj<typeof InputContainer.Interaction>;

export const Default: Story = {
  render: (args) => (
    <InputContainer>
      <InputContainer.Interaction {...args} />
    </InputContainer>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <>
      <InputContainer>
        <InputContainer.Interaction {...args} />
      </InputContainer>
      <InputContainer>
        <InputContainer.Interaction {...args} readonly />
      </InputContainer>
    </>
  ),
};

export const Theme: Story = {
  render: (args) => (
    <>
      <InputContainer>
        <InputContainer.Interaction {...args} theme="light" />
      </InputContainer>
      <InputContainer>
        <InputContainer.Interaction {...args} theme="dark" />
      </InputContainer>
    </>
  ),
};

export const Size: Story = {
  render: (args) => (
    <>
      <InputContainer>
        <InputContainer.Interaction {...args} size="small" />
      </InputContainer>
      <InputContainer>
        <InputContainer.Interaction {...args} size="medium" />
      </InputContainer>
      <InputContainer>
        <InputContainer.Interaction {...args} size="large" />
      </InputContainer>
    </>
  ),
};
