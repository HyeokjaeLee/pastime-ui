import { omit } from 'lodash-es';

import type { ReactNode } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '.';

import type { TooltipProps } from '.';

interface TooltipMetaProps extends TooltipProps {
  areaChildren: ReactNode;
  contentChildren: ReactNode;
}

enum CATEGORY {
  TOOLTIP = 'Tooltip',
  TOOLTIP_AREA = 'Tooltip.Area',
  TOOLTIP_CONTENT = 'Tooltip.Content',
}

const meta: Meta<TooltipMetaProps> = {
  title: 'atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    //* Tooltip
    children: {
      description: `You should wrap the component that composes the Tooltip.\n\nTooltip을 구성하는 컴포넌트를 감싸주어야 합니다.`,
      control: false,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.TOOLTIP,
      },
    },
    mouseEnterDelay: {
      description:
        'The delay time before the Tooltip appears (ms).\n\nTooltip이 나타나기 전까지의 지연 시간 (ms)',
      table: {
        category: CATEGORY.TOOLTIP,
      },
    },

    //* Tooltip.Area
    areaChildren: {
      name: 'children',
      description: `The area to display the tooltip when the mouse hovers.\n\n마우스가 올라갔을 때 툴팁을 표시할 영역`,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.TOOLTIP_AREA,
      },
    },

    //* Tooltip.Content
    contentChildren: {
      name: 'children',
      description: `The content to display in the tooltip.\n\n툴팁에 표시할 내용`,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.TOOLTIP_CONTENT,
      },
    },
  },
  args: {
    mouseEnterDelay: 200,
    areaChildren: 'Tooltip area',
    contentChildren: 'Tooltip content',
  },
};

export default meta;

type Story = StoryObj<TooltipMetaProps>;

const DEFAULT_CODE_EXAMPLE = `
<Tooltip mouseEnterDelay={200}>
  <Tooltip.Area>
    Tooltip area
  </Tooltip.Area>
  <Tooltip.Content>
    Tooltip content
  </Tooltip.Content>
</Tooltip>
`;

export const Default: Story = {
  render: ({ areaChildren, contentChildren, ...restArgs }) => (
    <Tooltip {...omit(restArgs, 'children')}>
      <Tooltip.Area>{areaChildren}</Tooltip.Area>
      <Tooltip.Content>{contentChildren}</Tooltip.Content>
    </Tooltip>
  ),

  parameters: {
    docs: {
      source: {
        code: DEFAULT_CODE_EXAMPLE,
      },
    },
  },
};
