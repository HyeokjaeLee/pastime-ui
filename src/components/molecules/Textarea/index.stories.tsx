import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Textarea } from '.';

const meta: Meta<typeof Textarea> = {
  title: 'molecules/Textarea',
  component: Textarea,
  args: {
    size: 'medium',
    placeholder: 'Textarea',
  },
  argTypes: {
    value: {
      control: 'text',
    },
    disabled: STORY_META.INPUT_DISABLED,
    children: STORY_META.INPUT_CHILDREN,
    placeholder: STORY_META.INPUT_PLACEHOLDER,
    onChange: STORY_META.HIDDEN,
    size: STORY_META.SIZE,
    validation: STORY_META.VALIDATION,
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
