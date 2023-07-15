import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { AccordionProps } from '.';
interface MetaProps extends AccordionProps {
    titleChildren: React.ReactNode;
    contentsChildren: React.ReactNode;
}
declare const meta: Meta<MetaProps>;
export default meta;
type Story = StoryObj<MetaProps>;
export declare const Default: Story;
