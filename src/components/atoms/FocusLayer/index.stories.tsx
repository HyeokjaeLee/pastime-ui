import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { FocusLayer } from '.';

const meta: Meta<typeof FocusLayer> = {
  title: 'atoms/FocusLayer',
  component: FocusLayer,
  args: {
    focused: false,
    blur: true,
  },

  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    (Story) => (
      <article
        style={{
          minHeight: '500px',
          transform: 'scale(1)',
        }}
      >
        Outer content
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FocusLayer>;

export const Default: Story = {
  render: (props) => <FocusLayer {...props} />,
};
