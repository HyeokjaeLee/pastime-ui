import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from '.';

const meta: Meta<typeof Toast> = {
  title: 'atoms/Toast',
  component: Toast,
  args: {
    children: 'Toast message',
    type: 'success',
    opened: true,
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {};

export const Type: Story = {
  render: (args) => (
    <>
      <Toast {...args} type="success" />
      <Toast {...args} type="fail" />
    </>
  ),
};
