import type { Meta, StoryObj } from '@storybook/react';
import { ToastOption } from '../../../contexts/ToastContext';
import { ToastProviderProps } from '.';
type ToastTestButtonProps = Partial<ToastOption>;
type MetaProps = ToastTestButtonProps & ToastProviderProps;
declare const meta: Meta<MetaProps>;
export default meta;
type Story = StoryObj<MetaProps>;
export declare const Default: Story;
export declare const Type: Story;