import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'atoms/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
