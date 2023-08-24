import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Textarea } from '.';

const meta: Meta<typeof Textarea> = {
  title: 'molecules/Textarea',
  component: Textarea,
  args: {
    size: 'medium',
    placeholder: 'Textarea',
    label: 'Textarea label',
  },
  argTypes: {
    value: {
      control: 'text',
    },
    reversed: STORY_META.INPUT_REVERSED,
    disabled: STORY_META.INPUT_DISABLED,
    children: STORY_META.INPUT_CHILDREN,
    placeholder: STORY_META.INPUT_PLACEHOLDER,
    onChange: STORY_META.INNER_STATE_CHANGE_HANDLER,
    size: STORY_META.SIZE,
    validation: STORY_META.VALIDATION,
    label: STORY_META.INPUT_LABEL,
    readOnly: STORY_META.INPUT_READONLY,
    required: STORY_META.INPUT_REQUIRED,
    fixedDarkMode: STORY_META.FIXED_DARK_MODE,
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
