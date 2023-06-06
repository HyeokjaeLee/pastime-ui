import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

const meta: Meta<typeof Tooltip> = {
  title: 'atoms/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <>
        <Tooltip.Area>Tooltip area</Tooltip.Area>
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </>
    ),
    mouseEnterDelay: 200,
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
