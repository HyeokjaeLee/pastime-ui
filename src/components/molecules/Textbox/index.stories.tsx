import React from 'react';
import { Percent } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Textbox } from '..';
import { HIDDEN, SIZE, THEME, VALIDATION } from '../../../constants';

const meta: Meta<typeof Textbox> = {
  title: 'molecules/Textbox',
  component: Textbox,
  args: {
    placeholder: 'placeholder',
    value: '',
  },
  argTypes: {
    value: {
      control: 'text',
    },
    unit: {
      control: 'text',
    },
    ref: HIDDEN,
    onChange: HIDDEN,
    size: SIZE,
    theme: THEME,
    validation: VALIDATION,
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

type Story = StoryObj<typeof Textbox>;

export const Default: Story = {};

export const WithUnit: Story = {
  args: {
    unit: '원',
    type: 'large-number',
    value: '-10000.95',
  },
  render: (args) => (
    <>
      <Textbox {...args} />
      <Textbox {...args} unit={<Percent size="1.2em" />} />
    </>
  ),
};

export const WithValidation: Story = {
  args: {
    validation: (value) => String(value),
    unit: '원',
    type: 'large-number',
  },
};
