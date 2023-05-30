import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from '.';

const items = Array.from({ length: 100 }, (_, index) => `Tab ${index + 1}`);

const meta: Meta<typeof Tab> = {
  title: 'molecules/Tab',
  component: Tab,
  args: {
    children: items.map((item, index) => (
      <Tab.Item selected={!index}>{item}</Tab.Item>
    )),
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {};
