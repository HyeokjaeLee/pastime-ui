import React, { useState as createState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Options } from '.';
import { HIDDEN, THEME, OPTIONS_FLOAT, LONG_TEXT } from '../../../constants';

import type { ValidOptionValue } from '..';

const meta: Meta<typeof Options> = {
  title: 'atoms/Options',
  component: Options,

  argTypes: {
    opened: {
      control: 'boolean',
    },
    float: OPTIONS_FLOAT,
    options: {
      control: 'object',
    },
    theme: THEME,
    multiple: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    onChange: HIDDEN,
    onKeyDown: HIDDEN,
  },

  args: {
    opened: true,
    options: Array.from({ length: 10 }, (_, index) => ({
      label: `Test label ${index}${
        index % 7 === 0 ? ` is long text: ${LONG_TEXT}` : ''
      }`,
      value: `${index}번 옵션이 선택`,
    })),
    float: 'bottom',
    multiple: false,
  },

  decorators: [
    (Story) => (
      <article
        style={{
          position: 'relative',
          height: 650,
          padding: '10px 0',
        }}
      >
        <div
          style={{
            margin: '300px auto',
            position: 'relative',
            width: '400px',
          }}
        >
          <Story />
        </div>
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Options>;

export const Default: Story = {
  render: (props) => {
    const [value, setValue] = createState<
      ValidOptionValue | ValidOptionValue[]
    >();
    return <Options {...props} value={value} onChange={setValue} />;
  },
};
