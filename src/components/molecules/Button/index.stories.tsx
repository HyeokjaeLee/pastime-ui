import { omit } from 'lodash-es';

import { Trash2 } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Button } from '.';

import type { ButtonProps } from '.';

const meta: Meta<typeof Button> = {
  title: 'molecules/Button',
  component: Button,
  decorators: [
    (Story) => (
      <article className="story-container">
        <Story />
      </article>
    ),
  ],
  argTypes: {
    delay: {
      control: 'number',
      description: `The time (in milliseconds) to disable the button after rendering.\n\n렌더링 후 버튼을 비활성화하는 시간(ms)`,
    },

    children: {
      description: 'The content of the button.\n\n버튼의 내용',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
      },
    },

    size: STORY_META.SIZE,

    theme: {
      description: 'The theme of the button.\n\n버튼의 테마',
    },

    shape: {
      description: 'The shape of the button.\n\n버튼의 모양',
    },

    icon: {
      description: 'The icon of the button.\n\n버튼의 아이콘',
      control: 'text',
    },

    iconDirection: {
      description: 'The display position of the icon.\n\n아이콘 표시 위치',
    },

    isLoading: {
      description:
        'Whether the button is loading or not, submit, click handlers do not work while loading.\n\n버튼의 로딩 여부, 로딩 중에는 submit, click 핸들러가 동작하지 않습니다.',
      defaultValue: false,
    },

    disabled: {
      description: 'The disabled state of the button.\n\n버튼의 비활성화 상태',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
      },
    },
  },

  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Theme: Story = {
  render: (args) => (
    <>
      {(
        [
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
          'ghost',
          'clear',
        ] satisfies ButtonProps['theme'][]
      ).map((theme) => (
        <Button {...args} theme={theme} key={theme}>
          {theme} button
        </Button>
      ))}
    </>
  ),
};

export const Size: Story = {
  render: (args) => (
    <>
      {(['small', 'medium', 'large'] satisfies ButtonProps['size'][]).map(
        (size) => (
          <Button {...args} size={size} key={size}>
            {size} button
          </Button>
        ),
      )}
    </>
  ),
};

export const Shape: Story = {
  render: (args) => (
    <>
      {(
        ['pill', 'rounded', 'sharp-corner'] satisfies ButtonProps['shape'][]
      ).map((shape) => (
        <Button {...args} shape={shape} key={shape}>
          {shape} button
        </Button>
      ))}
    </>
  ),
};

export const Icon: Story = {
  args: {
    icon: <Trash2 />,
  },
  render: (args) => (
    <>
      <Button {...args} />
      <Button {...args} iconDirection="right" />
      <Button {...omit(args, 'children')} />
    </>
  ),
};

export const Delay: Story = {
  args: {
    delay: 10000,
  },
  render: (args) => (
    <>
      <Button {...args} />
      <Button {...args} theme="ghost" />
      <Button {...args} theme="clear" />
    </>
  ),
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => (
    <>
      <Button {...args} shape="pill" />
      <Button {...args} />
      <Button {...args} shape="sharp-corner" />
      <Button {...args} icon={<Trash2 />} iconDirection="left" />
      <Button {...args} icon={<Trash2 />} iconDirection="right" />
      <Button {...omit(args, 'children')} icon={<Trash2 />} />
    </>
  ),
};
