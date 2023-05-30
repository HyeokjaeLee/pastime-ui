import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { FocusLayer } from '.';
import { HIDDEN } from '../../../constants';

const meta: Meta<typeof FocusLayer> = {
  title: 'atoms/FocusLayer',
  component: FocusLayer,
  args: {
    focused: true,
    blur: true,
    backgroundScroll: false,
    children: "FocusLayer's children",
  },

  argTypes: {
    style: HIDDEN,
    blur: {
      defaultValue: {
        summary: 'false',
      },
      description: 'focused 상태일때 배경을 blur 처리할지 여부입니다.',
    },
    focused: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
      description: 'focused 상태인지 여부입니다.',
    },
    backgroundScroll: {
      defaultValue: {
        summary: 'false',
      },
      description: 'focused 상태일때 배경 스크롤을 허용할지 여부입니다.',
    },
    children: {
      description: 'FocusLayer 내부에 표시할 컨텐츠입니다.',
      control: {
        type: 'text',
      },
    },
  },

  decorators: [
    (Story) => (
      <article
        style={{
          minHeight: '500px',
          transform: 'scale(1)',
        }}
      >
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FocusLayer>;

export const Default: Story = {
  render: (props) => (
    <>
      FocusLayer`s parent
      <FocusLayer {...props} />
    </>
  ),
};
