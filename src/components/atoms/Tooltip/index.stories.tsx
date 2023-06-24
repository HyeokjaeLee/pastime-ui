import { omit } from 'lodash-es';

import type { ReactNode } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

import type { TooltipProps } from '.';

interface TooltipMetaProps extends TooltipProps {
  areaChildren: ReactNode;
  contentChildren: ReactNode;
}

const meta: Meta<TooltipMetaProps> = {
  title: 'atoms/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <>
        <Tooltip.Area>Tooltip area</Tooltip.Area>
        <Tooltip.Content>ss</Tooltip.Content>
      </>
    ),
    mouseEnterDelay: 200,
    areaChildren: 'Tooltip area',
    contentChildren: 'Tooltip content',
  },
  argTypes: {
    children: {
      control: false,
      table: {
        type: 'ReactNode',
      },
    },
  },
  render: ({ areaChildren, contentChildren, ...restArgs }) => (
    <Tooltip {...omit(restArgs, 'children')}>
      <Tooltip.Area>{areaChildren}</Tooltip.Area>
      <Tooltip.Content>{contentChildren}</Tooltip.Content>
    </Tooltip>
  ),
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
