import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

const { Content } = Tooltip;

const meta: Meta<typeof Content> = {
  title: 'atoms/Tooltip/Content',
  component: Content,
  args: {
    children: 'Tooltip content',
  },
  decorators: [
    (Story) => (
      <Tooltip>
        <Tooltip.Area>Tooltip area</Tooltip.Area>
        <Story />
      </Tooltip>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Content>;

export const Default: Story = {};
