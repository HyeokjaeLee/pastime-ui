import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Searchbox } from '.';
import {
  HIDDEN,
  THEME,
  SIZE,
  OPTIONS_FLOAT,
  VALIDATION,
} from '../../../constants';

const meta: Meta<typeof Searchbox> = {
  title: 'molecules/Searchbox',
  component: Searchbox,
  decorators: [
    (Story) => (
      <article
        className="story-container"
        style={{
          height: 650,
          alignItems: 'center',
        }}
      >
        <Story />
      </article>
    ),
  ],
  args: {
    placeholder: 'Searchbox',
    filterByKeyword: true,

    options: Array.from(
      { length: 10 },
      (_, index) =>
        `Test label ${index}${
          index % 7 === 0
            ? ' is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom'
            : ''
        }`,
    ),

    validation: (value) => (value ? undefined : 'Value is required'),
  },

  argTypes: {
    validation: VALIDATION,
    filterByKeyword: {
      description: '옵션을 검색어로 필터링할지 여부입니다.',
    },
    onChange: HIDDEN,
    style: HIDDEN,
    ref: HIDDEN,
    size: SIZE,
    theme: THEME,
    float: OPTIONS_FLOAT,
  },
};

export default meta;

type Story = StoryObj<typeof Searchbox>;

export const Default: Story = {};

export const WithValidation: Story = {
  args: {
    validation: (value) => value,
  },
};
