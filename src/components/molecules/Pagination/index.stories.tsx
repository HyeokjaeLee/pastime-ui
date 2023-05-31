import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '.';
import { useSubscribedState } from '../../../hooks';

const meta: Meta<typeof Pagination> = {
  title: 'molecules/Pagination',
  component: Pagination,
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 503,
    buttonCount: 10,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: ({ page, ...restArgs }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useSubscribedState(page);
    return (
      <Pagination {...restArgs} page={currentPage} onChange={setCurrentPage} />
    );
  },
};
