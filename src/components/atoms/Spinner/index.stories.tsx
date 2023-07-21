import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Spinner } from '.';

const meta: Meta<typeof Spinner> = {
  title: 'atoms/Spinner',
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  argTypes: {
    size: STORY_META.SIZE,
    sizeTransition: {
      type: 'boolean',
      description:
        'Whether to apply a transition when the size of the Spinner changes.\n\nSpinner의 크기가 변할 때 transition을 적용할지 여부',
    },
  },
};
