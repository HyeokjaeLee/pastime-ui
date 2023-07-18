import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { STORY_DUUMMY, STORY_META } from '@constants';
import type { ValidOptionValue } from '@hooks';

import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'atoms/Select',
  component: Select,

  argTypes: {
    opened: {
      control: 'boolean',
      description: "Whether it's open or not.\n\n열려있는지 여부",
    },
    float: STORY_META.OPTIONS_FLOAT,
    options: {
      control: 'object',
      description: 'The options to provide.\n\n제공할 옵션',
    },
    multiple: {
      control: 'boolean',
      description:
        'Whether multiple selection is possible or not.\n\n다중 선택이 가능한지 여부',
      table: {
        defaultValue: { summary: false },
      },
    },
    onChange: STORY_META.HIDDEN,
    onKeyDown: STORY_META.HIDDEN,
    cancelable: {
      control: 'boolean',
      description:
        'Whether it is possible to cancel by re-selecting the already selected option.\n\n이미 선택된 옵션을 다시 선택하여 취소할 수 있는지 여부',
    },
    value: {
      description: 'The value of the selected option.\n\n선택된 옵션의 값',
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
