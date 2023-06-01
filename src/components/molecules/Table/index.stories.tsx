import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '.';
import { LONG_TEXT } from '../../../constants';

const meta: Meta<typeof Table> = {
  title: 'molecules/Table',
  component: Table,
  argTypes: {
    fixedTitleCount: {
      control: 'number',
      description: '고정된 타이틀의 개수',
    },
  },
  args: {
    fixedTitleCount: 3,
    children: (
      <>
        <Table.Header>
          {new Array(10).fill(0).map((_, index) => (
            <Table.Title
              key={`key-${index}`}
              width={(() => {
                switch (index) {
                  case 3:
                    return 100;
                  default:
                }
              })()}
            >
              {(() => {
                switch (index) {
                  case 3:
                    return 'Long text';
                  default:
                    return `Title ${index}`;
                }
              })()}
            </Table.Title>
          ))}
        </Table.Header>
        <Table.Body>
          {new Array(20).fill(0).map((_, rowIndex) => (
            <Table.Row key={`row${rowIndex}`}>
              {new Array(10).fill(0).map((_, cellIndex) => (
                <Table.Cell key={`Cell ${cellIndex}-${rowIndex}`}>
                  {(() => {
                    switch (cellIndex) {
                      case 3:
                        return LONG_TEXT;
                      default:
                        return `Cell ${cellIndex}-${rowIndex}`;
                    }
                  })()}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },

  decorators: [
    (Story) => (
      <article
        style={{
          width: '100%',
          height: 500,
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {};
