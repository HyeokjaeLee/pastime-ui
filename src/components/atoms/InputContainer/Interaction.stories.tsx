import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputContainer } from '..';

const meta: Meta<typeof InputContainer.Intreraction> = {
  title: 'atoms/InputContainer/Interaction',
  component: InputContainer.Intreraction,

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

type Story = StoryObj<typeof InputContainer.Intreraction>;

export const Default: Story = {
  render: (args) => (
    <InputContainer>
      <InputContainer.Intreraction {...args} />
    </InputContainer>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <>
      <InputContainer>
        <InputContainer.Intreraction {...args} />
      </InputContainer>
      <InputContainer>
        <InputContainer.Intreraction {...args} readonly />
      </InputContainer>
    </>
  ),
};

export const Theme: Story = {
  render: (args) => (
    <>
      <InputContainer>
        <InputContainer.Intreraction {...args} theme="light" />
      </InputContainer>
      <InputContainer>
        <InputContainer.Intreraction {...args} theme="dark" />
      </InputContainer>
    </>
  ),
};

export const Size: Story = {
  render: (args) => (
    <>
      <InputContainer>
        <InputContainer.Intreraction {...args} size="small" />
      </InputContainer>
      <InputContainer>
        <InputContainer.Intreraction {...args} size="medium" />
      </InputContainer>
      <InputContainer>
        <InputContainer.Intreraction {...args} size="large" />
      </InputContainer>
    </>
  ),
};
