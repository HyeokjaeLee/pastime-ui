import React from 'react';
import { CheckCircle } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from '.';

const meta: Meta<typeof Toast> = {
  title: 'atoms/Toast',
  component: Toast,
  args: {
    children: 'Toast message',
    icon: <CheckCircle size="1.2em" />,
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {};
