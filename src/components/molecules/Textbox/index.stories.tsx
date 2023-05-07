import React, { useState as createState } from 'react';
import { Percent } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Textbox } from '..';

const meta: Meta<typeof Textbox> = {
  title: 'molecules/Textbox',
  component: Textbox,
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
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const Default: Story = {};

export const Unit: Story = {
  render: (args) => {
    const [value, setValue] = createState('');
    return (
      <>
        <Textbox {...args} value={value} onChange={setValue} />
        <Textbox {...args} value={value} onChange={setValue} unit="원" />
        <Textbox
          {...args}
          value={value}
          onChange={setValue}
          unit={<Percent />}
        />
      </>
    );
  },
};

export const Validation: Story = {
  render: (args) => {
    const [value, setValue] = createState('');
    return (
      <Textbox
        {...args}
        value={value}
        onChange={setValue}
        validation={(value) => {
          if (value === '') return '값을 입력해주세요';

          if (Number(value) < 1000) return '1,000원 이상 입력해주세요';
        }}
        unit="원"
        type="large-number"
      />
    );
  },
};
