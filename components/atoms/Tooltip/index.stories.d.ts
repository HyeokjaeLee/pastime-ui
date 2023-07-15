import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { TooltipProps } from '.';
interface TooltipMetaProps extends TooltipProps {
    areaChildren: ReactNode;
    contentChildren: ReactNode;
}
declare const meta: Meta<TooltipMetaProps>;
export default meta;
type Story = StoryObj<TooltipMetaProps>;
export declare const Default: Story;
