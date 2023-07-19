import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Textarea } from '.';

const meta: Meta<typeof Textarea> = {
  title: 'molecules/Textarea',
  component: Textarea,
  args: {
    size: 'medium',
  },
  argTypes: {
    disabled: STORY_META.INPUT_DISABLED,
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
