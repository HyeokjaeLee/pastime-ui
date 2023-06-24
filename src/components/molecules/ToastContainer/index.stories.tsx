/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ToastContainer } from '.';
import { Button } from '../../atoms';

const meta: Meta<typeof ToastContainer> = {
  title: 'molecules/ToastContainer',
  component: ToastContainer,
  decorators: [
    (Story) => (
      <div
        style={{
          height: '100vh',
          width: '100%',
          padding: '20px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ToastContainer>;

export const Default: Story = {
  render: (args) => {
    const [toastIndex, setToastIndex] = useState(0);

    return (
      <>
        <Button onClick={() => setToastIndex((prev) => prev + 1)}>
          Toast Up
        </Button>
        <ToastContainer
          {...args}
          toastOption={{
            message: toastIndex ? `Toast test text ${toastIndex}` : null,
            type: toastIndex % 2 === 0 ? 'success' : 'fail',
          }}
        />
      </>
    );
  },
};
