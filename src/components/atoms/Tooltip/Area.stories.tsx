import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

const { Area } = Tooltip;

const meta: Meta<typeof Area> = {
  title: 'atoms/Tooltip/Area',
  component: Area,
  args: {
    children: 'Tooltip area',
  },
  decorators: [
    (Story) => (
      <Tooltip>
        <Story />
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </Tooltip>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Area>;

export const Default: Story = {};
