import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META, STORY_DUUMMY } from '@constants';

import { Searchbox } from '.';

const meta: Meta<typeof Searchbox> = {
  title: 'molecules/Searchbox',
  component: Searchbox,
  decorators: STORY_META.SELECT_USED_DECORATORS,
  args: {
    placeholder: 'Searchbox',
    filterByKeyword: true,
    label: 'Searchbox label',
    options: STORY_DUUMMY.STRING_OPTIONS,

    validation: (value) => (value ? undefined : 'Value is required'),
  },

  argTypes: {
    validation: STORY_META.VALIDATION,
    placeholder: STORY_META.INPUT_PLACEHOLDER,
    filterByKeyword: {
      description:
        'It is whether to filter the options by search term.\n\n옵션을 검색어로 필터링할지 여부입니다.',
    },
    reversed: STORY_META.INPUT_REVERSED,
    options: STORY_META.SELECT_OPTIONS,
    disabled: STORY_META.INPUT_DISABLED,
    onChange: STORY_META.INNER_STATE_CHANGE_HANDLER,
    label: STORY_META.INPUT_LABEL,
    style: STORY_META.HIDDEN,
    size: STORY_META.SIZE,
    float: STORY_META.SELECT_OPTIONS_FLOAT,
    children: STORY_META.INPUT_CHILDREN,
  },
};

export default meta;

type Story = StoryObj<typeof Searchbox>;

export const Default: Story = {};

export const WithValidation: Story = {
  args: {
    validation: (value) => value,
  },
};
