import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META, STORY_STYLES } from '@constants';
import { useSubscribedState } from '@hooks';
import { cloneDeepWith } from '@utils';

import { Input } from '.';

import type { InputProps, InputWrapProps } from '.';

type MetaProps = InputProps &
  Pick<InputWrapProps, 'validationMessage' | 'size'>;

enum CATEGORY {
  INPUT = 'Input',
  INPUT_WRAP = 'Input.Wrap',
}

export default {
  title: 'atoms/Input',
  component: Input,
  args: {
    placeholder: 'placeholder',
    validationMessage: '',
  },
  argTypes: {
    //* Input.Wrap
    size: cloneDeepWith(STORY_META.SIZE, (size) => {
      size.table.category = CATEGORY.INPUT_WRAP;
      return size;
    }),

    validationMessage: {
      description: 'The validation message to display.\n\n유효성 검사 메시지',

      table: {
        category: CATEGORY.INPUT_WRAP,
        type: {
          summary: 'string',
        },
      },
    },

    //* Input
    onChange: STORY_META.HIDDEN,

    placeholder: cloneDeepWith(STORY_META.PLACEHOLDER, (placeholder) => {
      placeholder.table.category = CATEGORY.INPUT;
      return placeholder;
    }),
    type: {
      table: {
        category: CATEGORY.INPUT,
      },
      control: 'select',
    },
    value: {
      table: {
        category: CATEGORY.INPUT,
      },
      control: 'text',
    },
    disabled: cloneDeepWith(STORY_META.INPUT_DISABLED, (disabled) => {
      disabled.table.category = CATEGORY.INPUT;
      return disabled;
    }),
  },
} satisfies Meta<MetaProps>;

type Story = StoryObj<MetaProps>;

export const Default: Story = {
  render: ({
    //* Input.Container
    validationMessage,
    //* Input.Wrap
    size,

    //* Input
    value,
    onChange,
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = useSubscribedState(value);
    return (
      <Input.Wrap
        validationMessage={validationMessage}
        size={size}
        style={{
          width: STORY_STYLES.INPUT_WIDTH,
        }}
      >
        <Input
          {...args}
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
            onChange?.(value);
          }}
        />
      </Input.Wrap>
    );
  },
};
