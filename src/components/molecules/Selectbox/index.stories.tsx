import type { Meta, StoryObj } from '@storybook/react';

import { STORY_DUUMMY, STORY_META } from '@constants';

import { Selectbox } from '.';

const meta: Meta<typeof Selectbox> = {
  title: 'molecules/Selectbox',
  component: Selectbox,
  argTypes: {
    placeholder: STORY_META.INPUT_PLACEHOLDER,
    size: STORY_META.SIZE,
    options: STORY_META.SELECT_OPTIONS,
    float: STORY_META.SELECT_OPTIONS_FLOAT,
    reversed: STORY_META.INPUT_REVERSED,
    disabled: STORY_META.INPUT_DISABLED,
    cancelable: STORY_META.SELECT_CANCELABLE,
    onChange: STORY_META.INNER_STATE_CHANGE_HANDLER,
    validation: STORY_META.VALIDATION,
    multiple: STORY_META.SELECT_MULTIPLE,
    children: STORY_META.INPUT_CHILDREN,
    label: STORY_META.INPUT_LABEL,
  },
  decorators: STORY_META.SELECT_USED_DECORATORS,
  args: {
    placeholder: 'Selectbox',
    options: STORY_DUUMMY.OPTIONS,
    label: 'Selectbox label',
  },
};

export default meta;

type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {};
