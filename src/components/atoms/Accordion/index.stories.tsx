import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '.';
import { HIDDEN, INPUT_WIDTH, LONG_TEXT, SIZE } from '../../../constants';

import type { AccordionProps } from '.';

interface MetaProps extends AccordionProps {
  titleChildren: React.ReactNode;
  contentsChildren: React.ReactNode;
}

const meta: Meta<MetaProps> = {
  title: 'atoms/Accordion',
  component: Accordion,
  args: {
    size: 'medium',
    style: { width: INPUT_WIDTH },
    contentsChildren: LONG_TEXT,
    titleChildren: 'Accordion Title',
  },
  argTypes: {
    size: {
      ...SIZE,
      table: {
        ...SIZE.table,
        category: 'Accordion',
      },
    },
    opened: {
      description: 'Accordion의 열림 여부',
      type: 'boolean',
      table: {
        category: 'Accordion',
      },
    },
    titleChildren: {
      description: 'Accordion.Title의 children \n\n `ReactNode`',
      type: 'string',
      name: 'children',
      table: {
        category: 'Accordion.Title',
      },
    },
    style: HIDDEN,
    contentsChildren: {
      description: 'Accordion.Contents의 children \n\n `ReactNode`',
      type: 'string',
      name: 'children',
      table: {
        category: 'Accordion.Contents',
      },
    },
  },
  render: ({ titleChildren, contentsChildren, ...args }) => (
    <Accordion {...args}>
      <Accordion.Title>{titleChildren}</Accordion.Title>
      <Accordion.Contents>{contentsChildren}</Accordion.Contents>
    </Accordion>
  ),
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};
