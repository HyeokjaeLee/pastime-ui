import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { STORY_DUUMMY, STORY_META } from '@constants';

import { Select } from '.';

import type { ValidOptionValue } from '..';

const meta: Meta<typeof Select> = {
  title: 'atoms/Select',
  component: Select,

  argTypes: {
    opened: {
      control: 'boolean',
    },
    float: STORY_META.OPTIONS_FLOAT,
    options: {
      control: 'object',
    },
    multiple: {
      control: 'boolean',
      description: '다중 선택 가능 여부',
      table: {
        defaultValue: { summary: false },
      },
    },
    onChange: STORY_META.HIDDEN,
    onKeyDown: STORY_META.HIDDEN,
    cancelable: {
      control: 'boolean',
      description: '이미 선택된 옵션을 다시 선택하여 취소 가능 여부',
    },
  },

  args: {
    opened: true,
    options: Array.from({ length: 10 }, (_, index) => ({
      label: `Test label ${index}${
        index % 7 === 0 ? ` is long text: ${STORY_DUUMMY.LONG_TEXT}` : ''
      }`,
      value: `${index}번 옵션이 선택`,
    })),
    float: 'bottom',
    multiple: false,
    cancelable: true,
  },

  decorators: [
    (Story) => (
      <article
        style={{
          position: 'relative',
          height: 650,
          padding: '10px 0',
        }}
      >
        <div
          style={{
            margin: '300px auto',
            position: 'relative',
            width: '400px',
          }}
        >
          <Story />
        </div>
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<ValidOptionValue | ValidOptionValue[]>();
    return <Select {...props} value={value} onChange={setValue} />;
  },
};
