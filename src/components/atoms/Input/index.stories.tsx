import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '..';
import { useSubscribedState } from '../../../hooks';

const meta: Meta<typeof Input> = {
  title: 'atoms/Input',
  component: Input,
  args: {
    placeholder: 'placeholder',
  },
  decorators: [
    (Story) => (
      <article className="story-container">
        <Story />
      </article>
    ),
  ],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'select',
    },
    value: {
      control: 'text',
    },
    disabled: {
      options: ['readonly', true, false],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const InputConfiguration: Story = {
  render: ({ value, onChange, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useSubscribedState(value);
    return (
      <Input.Container>
        <Input.Wrap>
          <Input
            {...args}
            value={inputValue}
            onChange={(value) => {
              setInputValue(value);
              onChange?.(value);
            }}
          />
        </Input.Wrap>
      </Input.Container>
    );
  },
};

export const Default: Story = {};
