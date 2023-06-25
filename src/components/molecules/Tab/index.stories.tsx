import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from '.';
import { SIZE, THEME } from '../../../constants';

import type { TabItemProps, TabProps } from '.';

type MetaProps = TabProps &
  Pick<TabItemProps, 'active' | 'disabled' | 'icon' | 'iconDirection'>;

const createTabDummyData = (length: number) =>
  Array.from({ length }, (_, index) => `Tab ${index + 1}`);

const meta: Meta<MetaProps> = {
  title: 'molecules/Tab',
  component: Tab,
  args: {
    theme: 'light',
    size: 'medium',
    icon: '⚙️',
  },
  argTypes: {
    theme: {
      ...THEME,
      table: {
        ...THEME.table,
        category: 'Tab',
      },
    },
    size: {
      ...SIZE,
      table: {
        ...SIZE.table,
        category: 'Tab',
      },
    },
    active: {
      description: 'Tab.Item의 선택 여부 \n\n `boolean`',
      type: 'boolean',
      table: {
        category: 'Tab.Item',
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'Tab.Item의 비활성화 여부 \n\n `boolean`',
      type: 'boolean',

      table: {
        category: 'Tab.Item',
        defaultValue: { summary: false },
      },
    },
    icon: {
      description: 'Tab.Item의 아이콘',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Tab.Item',
      },
    },
    iconDirection: {
      description: 'Tab.Item의 아이콘 방향 \n\n `left` | `right`',
      type: 'string',
      options: ['left', 'right'],
      control: 'radio',
      table: {
        category: 'Tab.Item',
      },
    },
  },
  render: ({ disabled, active, icon, iconDirection, ...restTabArgs }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activedIndex, setActivedIndex] = useState(0);
    return (
      <Tab {...restTabArgs}>
        <Tab.Item
          disabled={disabled}
          active={active}
          icon={icon}
          iconDirection={iconDirection}
        >
          Controlled tab
        </Tab.Item>
        {createTabDummyData(5).map((item, index) => (
          <Tab.Item
            key={index}
            active={activedIndex === index}
            onClick={() => setActivedIndex(index)}
          >
            {item}
          </Tab.Item>
        ))}
      </Tab>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {};

export const ManyItems: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activedIndex, setActivedIndex] = useState(0);
    return (
      <Tab {...args}>
        {createTabDummyData(20).map((item, index) => (
          <Tab.Item
            key={index}
            active={activedIndex === index}
            onClick={() => setActivedIndex(index)}
          >
            {item}
          </Tab.Item>
        ))}
      </Tab>
    );
  },
};
