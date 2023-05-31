/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ToastProvider } from '.';
import { useToast } from '../../../hooks';
import { Button } from '../../atoms';

const meta: Meta<typeof ToastProvider> = {
  title: 'molecules/ToastProvider',
  component: ToastProvider,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '50vh',
          width: '100%',
          padding: '20px',
          transform: 'scale(1)',
          display: 'flex',

          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToastProvider>;

const TestTemplate = () => {
  const toast = useToast();
  return (
    <Button onClick={() => toast('Hello World!', '🚀')}>Hello World!</Button>
  );
};

export const Default: Story = {
  render: (args) => (
    <ToastProvider {...args}>
      <TestTemplate />
    </ToastProvider>
  ),
};
