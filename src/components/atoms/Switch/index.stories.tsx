import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'atoms/Switch',
  component: Switch,
  args: {
    size: 'medium',
    value: false,
  },
  argTypes: {
    size: STORY_META.SIZE,
    onChange: STORY_META.HIDDEN,
    value: {
      description: 'Switch의 상태',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
