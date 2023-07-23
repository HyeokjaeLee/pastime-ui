import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '.';
import type { TabItemProps, TabProps } from '.';
type MetaProps = TabProps & Pick<TabItemProps, 'active' | 'disabled' | 'icon' | 'iconDirection'>;
declare const meta: Meta<MetaProps>;
export default meta;
type Story = StoryObj<typeof Tab>;
export declare const Default: Story;
export declare const ManyItems: Story;
