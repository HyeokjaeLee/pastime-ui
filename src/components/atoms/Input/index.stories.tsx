import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';
import { useSubscribedState } from '@hooks';
import { cloneDeepWith } from '@utils';

import { Input } from '.';

import type { InputProps, InputWrapProps } from '.';

type MetaProps = InputProps &
  Pick<InputWrapProps, 'validationMessage' | 'size' | 'reversed' | 'label'>;

enum CATEGORY {
  INPUT = 'Input',
  INPUT_WRAP = 'Input.Wrap',
}

export default {
  title: 'atoms/Input',
  component: Input,
  args: {
    placeholder: 'Input',
    validationMessage: '',
    label: 'Input label',
  },
  argTypes: {
    //* Input.Wrap
    size: cloneDeepWith(STORY_META.SIZE, (size) => {
      size.table.category = CATEGORY.INPUT_WRAP;
      return size;
    }),

    label: cloneDeepWith(STORY_META.INPUT_LABEL, (label) => {
      label.table.category = CATEGORY.INPUT_WRAP;
      return label;
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

    reversed: cloneDeepWith(STORY_META.INPUT_REVERSED, (reversed) => {
      reversed.table.category = CATEGORY.INPUT_WRAP;
      return reversed;
    }),

    //* Input
    onChange: STORY_META.HIDDEN,

    placeholder: cloneDeepWith(STORY_META.INPUT_PLACEHOLDER, (placeholder) => {
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
    label,

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
        label={label}
      >
        <Input
          {...args}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.value);
            onChange?.(e);
          }}
        />
      </Input.Wrap>
    );
  },
};
