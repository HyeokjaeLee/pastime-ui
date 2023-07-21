import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'atoms/Skeleton',
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};
