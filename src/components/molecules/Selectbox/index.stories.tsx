import type { Meta, StoryObj } from '@storybook/react';

import { STORY_DUUMMY, STORY_META } from '@constants';

import { Selectbox } from '.';

const meta: Meta<typeof Selectbox> = {
  title: 'molecules/Selectbox',
  component: Selectbox,
  argTypes: {
    options: STORY_META.SELECT_OPTIONS,
    float: STORY_META.SELECT_OPTIONS_FLOAT,
    reversed: STORY_META.INPUT_REVERSED,
    disabled: STORY_META.INPUT_DISABLED,
  },
  decorators: STORY_META.SELECT_USED_DECORATORS,
  args: {
    placeholder: 'Selectbox',
    options: STORY_DUUMMY.OPTIONS,

    validation: (value) => {
      if (!value) return 'Value is required';

      if (value === '0번 옵션이 선택') return '0번 옵션은 선택할 수 없습니다.';
    },
  },
};

export default meta;

type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {};
