import { omit } from 'lodash-es';

import React from 'react';
import { Trash2 } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
  render: (args) => (
    <article
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} />
    </article>
  ),
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
    <article
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} theme="primary" />
      <Button {...args} theme="secondary" />
      <Button {...args} theme="success" />
      <Button {...args} theme="warning" />
      <Button {...args} theme="danger" />
      <Button {...args} theme="text-dark" />
      <Button {...args} theme="text-light" />
    </article>
  ),
};

export const Size: Story = {
  render: (args) => (
    <article
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} size="small" />
      <Button {...args} size="medium" />
      <Button {...args} size="large" />
    </article>
  ),
};

export const Shape: Story = {
  render: (args) => (
    <article
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} shape="default" />
      <Button {...args} shape="round" />
    </article>
  ),
};

export const Icon: Story = {
  args: {
    icon: <Trash2 />,
  },
  render: (args) => (
    <article
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} />
      <Button {...args} iconDirection="right" />
      <Button {...omit(args, 'children')} />
    </article>
  ),
};

export const Delay: Story = {
  args: {
    delay: 10000,
  },
  render: (args) => (
    <article
      style={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <Button {...args} />
      <Button {...args} theme="text-dark" />
    </article>
  ),
};
