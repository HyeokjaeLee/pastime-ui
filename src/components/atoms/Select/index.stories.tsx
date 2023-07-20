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
    float: STORY_META.SELECT_OPTIONS_FLOAT,
    options: STORY_META.SELECT_OPTIONS,
    multiple: STORY_META.SELECT_MULTIPLE,
    onChange: STORY_META.HIDDEN,
    onKeyDown: STORY_META.HIDDEN,
    cancelable: STORY_META.SELECT_CANCELABLE,
    value: {
      description: 'The value of the selected option.\n\n선택된 옵션의 값',
    },
  },

  args: {
    opened: true,
    options: STORY_DUUMMY.OPTIONS,
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
