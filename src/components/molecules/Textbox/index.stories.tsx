import { Percent } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Textbox } from '..';

const meta: Meta<typeof Textbox> = {
  title: 'molecules/Textbox',
  component: Textbox,
  args: {
    placeholder: 'Textbox',
    value: '',
    label: 'Textbox label',
  },
  argTypes: {
    value: {
      control: 'text',
    },
    reversed: STORY_META.INPUT_REVERSED,
    placeholder: STORY_META.INPUT_PLACEHOLDER,
    children: STORY_META.INPUT_CHILDREN,
    onChange: STORY_META.INNER_STATE_CHANGE_HANDLER,
    size: STORY_META.SIZE,
    validation: STORY_META.VALIDATION,
    disabled: STORY_META.INPUT_DISABLED,
    label: STORY_META.INPUT_LABEL,
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
    children: '원',
    type: 'large-number',
    value: '-10000.95',
  },
  render: (args) => (
    <>
      <Textbox {...args} />
      <Textbox {...args}>
        <Percent size="1.2em" />
      </Textbox>
    </>
  ),
};

export const WithValidation: Story = {
  args: {
    validation: (value) => String(value),
    children: '원',
    type: 'large-number',
  },
};
