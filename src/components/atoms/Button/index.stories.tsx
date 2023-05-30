import { omit } from 'lodash-es';

import React from 'react';
import { Trash2 } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

import type { ButtonProps } from '.';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
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
      description: '렌더링 후 버튼을 비활성화하는 시간(ms)입니다.',
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
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
          'dark',
          'light',
          'ghost',
        ] satisfies ButtonProps['theme'][]
      ).map((theme) => (
        <Button {...args} theme={theme}>
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
          <Button {...args} size={size}>
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
        <Button {...args} shape={shape}>
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
      <Button {...args} theme="light" />
      <Button {...args} theme="dark" />
    </>
  ),
};
