/// <reference types="react" />
import type { Meta, StoryObj } from '@storybook/react';
import { ModalHeaderProps, ModalProps } from '.';
interface ModalMetaProps extends ModalProps, Pick<ModalHeaderProps, 'closeButton'> {
    headerChildren: React.ReactNode;
}
declare const meta: Meta<ModalMetaProps>;
export default meta;
type Story = StoryObj<ModalMetaProps>;
export declare const Default: Story;
