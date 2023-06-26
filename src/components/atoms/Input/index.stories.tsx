import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META, STORY_STYLES } from '@constants';
import { useSubscribedState } from '@hooks';

import { Input } from '.';

import type { InputProps, InputWrapProps } from '.';

type MetaProps = InputProps &
  Pick<InputWrapProps, 'validationMessage' | 'size' | 'theme'>;

const GROUPS = {
  INPUT: {
    table: {
      category: 'Input',
    },
  },
  WRAP: {
    table: {
      category: 'Input.Wrap',
    },
  },
};

export default {
  title: 'atoms/Input',
  component: Input,
  args: {
    placeholder: 'placeholder',
    validationMessage: '',
  },
  argTypes: {
    //* Input.Container
    ref: STORY_META.HIDDEN,
    onChange: STORY_META.HIDDEN,
    validationMessage: {
      ...GROUPS.WRAP,
    },

    //* Input.Wrap
    size: {
      ...STORY_META.SIZE,
      table: {
        ...STORY_META.SIZE.table,
        ...GROUPS.WRAP.table,
      },
    },
    theme: {
      ...STORY_META.THEME,
      table: {
        ...STORY_META.THEME.table,
        ...GROUPS.WRAP.table,
      },
    },

    //* Input
    placeholder: {
      ...GROUPS.INPUT,
      control: 'text',
      description: 'placeholder',
    },
    type: {
      ...GROUPS.INPUT,
      control: 'select',
    },
    value: {
      ...GROUPS.INPUT,
      control: 'text',
    },
    disabled: {
      ...GROUPS.INPUT,
      options: ['readonly', true, false],
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<MetaProps>;

type Story = StoryObj<MetaProps>;

export const Default: Story = {
  render: ({
    //* Input.Container
    validationMessage,
    //* Input.Wrap
    size,
    theme,
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
        theme={theme}
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
