import type { Meta, StoryObj } from '@storybook/react';

import { HIDDEN, THEME, SIZE, INPUT_WIDTH } from '@constants';
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
    ref: HIDDEN,
    onChange: HIDDEN,
    validationMessage: {
      ...GROUPS.WRAP,
    },

    //* Input.Wrap
    size: {
      ...SIZE,
      table: {
        ...SIZE.table,
        ...GROUPS.WRAP.table,
      },
    },
    theme: {
      ...THEME,
      table: {
        ...THEME.table,
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
          width: INPUT_WIDTH,
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
