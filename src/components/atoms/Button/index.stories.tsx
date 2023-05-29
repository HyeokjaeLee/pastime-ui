import { omit } from 'lodash-es';

import React from 'react';
import { Trash2 } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

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
      <Button {...args} theme="primary" />
      <Button {...args} theme="secondary" />
      <Button {...args} theme="success" />
      <Button {...args} theme="warning" />
      <Button {...args} theme="danger" />
      <Button {...args} theme="text-dark" />
      <Button {...args} theme="text-light" />
    </>
  ),
};

export const Size: Story = {
  render: (args) => (
    <>
      <Button {...args} size="small" />
      <Button {...args} size="medium" />
      <Button {...args} size="large" />
    </>
  ),
};

export const Shape: Story = {
  render: (args) => (
    <>
      <Button {...args} shape="default" />
      <Button {...args} shape="round" />
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
      <Button {...args} theme="text-light" />
      <Button {...args} theme="text-dark" />
    </>
  ),
};
