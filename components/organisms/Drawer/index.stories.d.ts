/// <reference types="react" />
import type { Meta, StoryObj } from '@storybook/react';
import { DrawerHeaderProps, DrawerProps } from '.';
interface DrawerMetaProps extends DrawerProps, Pick<DrawerHeaderProps, 'closeButton'> {
    headerChildren: React.ReactNode;
}
declare const meta: Meta<DrawerMetaProps>;
export default meta;
type Story = StoryObj<DrawerMetaProps>;
export declare const Default: Story;
