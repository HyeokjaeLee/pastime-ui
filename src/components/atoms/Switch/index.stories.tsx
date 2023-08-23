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
    onChange: STORY_META.INNER_STATE_CHANGE_HANDLER,
    value: {
      description: 'Switch의 상태',
    },
    children: {
      description: 'Content of the Switch ball.\n\nSwitch ball의 내용',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
