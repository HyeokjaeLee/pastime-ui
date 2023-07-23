import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '.';

const meta: Meta<typeof Modal> = {
  title: 'organisms/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
