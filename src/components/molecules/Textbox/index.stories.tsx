import { Percent } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META, STORY_STYLES } from '@constants';

import { Textbox } from '..';

const meta: Meta<typeof Textbox> = {
  title: 'molecules/Textbox',
  component: Textbox,
  args: {
    placeholder: 'placeholder',
    value: '',
    style: {
      width: STORY_STYLES.INPUT_WIDTH,
    },
  },
  argTypes: {
    value: {
      control: 'text',
    },
    unit: {
      control: 'text',
    },
    ref: STORY_META.HIDDEN,
    onChange: STORY_META.HIDDEN,
    size: STORY_META.SIZE,
    validation: STORY_META.VALIDATION,
  },
  decorators: [
    (Story) => (
      <article className="story-container">
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const Default: Story = {};

export const WithUnit: Story = {
  args: {
    unit: '원',
    type: 'large-number',
    value: '-10000.95',
  },
  render: (args) => (
    <>
      <Textbox {...args} />
      <Textbox {...args} unit={<Percent size="1.2em" />} />
    </>
  ),
};

export const WithValidation: Story = {
  args: {
    validation: (value) => String(value),
    unit: '원',
    type: 'large-number',
  },
};
