import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { STORY_DUUMMY, STORY_META, STORY_STYLES } from '@constants';

import { Accordion } from '.';

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
    style: { width: STORY_STYLES.INPUT_WIDTH },
    contentsChildren: STORY_DUUMMY.LONG_TEXT,
    titleChildren: 'Accordion Title',
  },
  argTypes: {
    size: {
      ...STORY_META.SIZE,
      table: {
        ...STORY_META.SIZE.table,
        category: 'Accordion',
      },
    },
    opened: {
      description: 'The open state of the Accordion.',
      type: 'boolean',
      table: {
        category: 'Accordion',
      },
    },
    titleChildren: {
      description: 'Child elements of Accordion.Title.',
      type: 'string',
      name: 'children',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Accordion.Title',
      },
    },
    style: STORY_META.HIDDEN,
    contentsChildren: {
      description: 'Child elements of Accordion.Contents.',
      type: 'string',
      name: 'children',
      table: {
        type: { summary: 'ReactNode' },
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
