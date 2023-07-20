import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';

import { Pagination } from '.';
import { useSubscribedState } from '../../../hooks';

const meta: Meta<typeof Pagination> = {
  title: 'molecules/Pagination',
  component: Pagination,
  argTypes: {
    page: {
      description: 'The current page.\n\n현재 페이지',
    },
    pageSize: {
      description:
        'The number of items to be displayed per page.\n\n페이지 당 표시할 항목 수',
    },
    totalItems: {
      description: 'The total number of items.\n\n전체 항목 수',
    },
    buttonCount: {
      description:
        'The number of page buttons to display.\n\n표시할 페이지 버튼 수',
    },
    onChange: STORY_META.HIDDEN,
    size: STORY_META.SIZE,
  },
  args: {
    page: 1,
    pageSize: 10,
    totalItems: 503,
    buttonCount: 10,
    size: 'medium',
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
