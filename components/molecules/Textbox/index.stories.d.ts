import type { Meta, StoryObj } from '@storybook/react';
import { Textbox } from '..';
declare const meta: Meta<typeof Textbox>;
export default meta;
type Story = StoryObj<typeof Textbox>;
export declare const Default: Story;
export declare const WithChildren: Story;
export declare const WithValidation: Story;
