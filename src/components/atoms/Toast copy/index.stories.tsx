import type { Meta, StoryObj } from '@storybook/react';

import { THEME } from '@constants';

import { Toast } from '.';

const meta: Meta<typeof Toast> = {
  title: 'atoms/Toast2',
  component: Toast,
  args: {
    children: 'Toast message',
    holdTime: 99999999,
    icon: 'success',
  },

  argTypes: {
    theme: THEME,

    icon: {
      options: ['success', 'fail', 'warning', 'info'],
    },
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
