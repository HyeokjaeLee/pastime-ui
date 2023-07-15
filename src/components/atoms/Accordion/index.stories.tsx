import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { STORY_DUUMMY, STORY_META, STORY_STYLES } from '@constants';

import { Accordion } from '.';

import type { AccordionProps } from '.';

interface MetaProps extends AccordionProps {
  titleChildren: React.ReactNode;
  contentsChildren: React.ReactNode;
}

enum CATEGORY {
  ACCORDION = 'Accordion',
  ACCORDION_TITLE = 'Accordion.Title',
  ACCORDION_CONTENTS = 'Accordion.Contents',
}

const meta: Meta<MetaProps> = {
  title: 'atoms/Accordion',
  component: Accordion,
  args: {
    size: 'medium',
    style: { width: STORY_STYLES.INPUT_WIDTH },
    titleChildren: 'Accordion Title',
    contentsChildren: STORY_DUUMMY.LONG_TEXT,
  },
  argTypes: {
    //* Accordion
    size: {
      ...STORY_META.SIZE,
      table: {
        ...STORY_META.SIZE.table,
        category: CATEGORY.ACCORDION,
      },
    },
    opened: {
      description: 'The open state of the Accordion.\n\nAccordion의 열림 상태',
      type: 'boolean',
      table: {
        category: CATEGORY.ACCORDION,
      },
    },

    //* Accordion.Title
    titleChildren: {
      description: 'The content that is always displayed.\n\n항상 보이는 내용',
      type: 'string',
      name: 'children',
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.ACCORDION_TITLE,
      },
    },
    style: STORY_META.HIDDEN,

    //* Accordion.Contents
    contentsChildren: {
      description:
        'The content displayed when the Accordion is expanded.\n\nAccordion이 펼쳐졌을 때 보이는 내용',
      type: 'string',
      name: 'children',
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.ACCORDION_CONTENTS,
      },
    },
  },
};

export default meta;

type Story = StoryObj<MetaProps>;

const DEFAULT_CODE_EXAMPLE = `
<Accordion size="medium">
  <Accordion.Title>
    Accordion Title
  </Accordion.Title>
  <Accordion.Contents>
    aurora sunrise...
  </Accordion.Contents>
</Accordion>
`;

export const Default: Story = {
  render: ({ titleChildren, contentsChildren, ...args }) => (
    <Accordion {...args}>
      <Accordion.Title>{titleChildren}</Accordion.Title>
      <Accordion.Contents>{contentsChildren}</Accordion.Contents>
    </Accordion>
  ),
  parameters: {
    docs: {
      source: {
        code: DEFAULT_CODE_EXAMPLE,
      },
    },
  },
};
