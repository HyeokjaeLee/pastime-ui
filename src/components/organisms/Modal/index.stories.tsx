import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';
import { cloneDeepWith } from '@utils';

import { Modal, ModalHeaderProps, ModalProps } from '.';

interface ModalMetaProps
  extends ModalProps,
    Pick<ModalHeaderProps, 'closeButton'> {
  headerChildren: React.ReactNode;
}
enum CATEGORY {
  MODAL = 'Modal',
  MODAL_HEADER = 'Modal.Header',
}

const meta: Meta<ModalMetaProps> = {
  title: 'organisms/Modal',
  component: Modal,
  argTypes: {
    //* Modal
    children: {
      description: `The content of the modal.\n\n모달의 내용`,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.MODAL,
      },
    },
    opened: cloneDeepWith(STORY_META.OPENED, (opened) => {
      opened.table.category = CATEGORY.MODAL;
      return opened;
    }),
    zIndex: {
      description: `The z-index of the modal, including the background layer.\n\n백그라운드 레이어를 포함한 모달의 z-index`,
      control: 'number',
      table: {
        defaultValue: { summary: 100 },
        category: CATEGORY.MODAL,
      },
    },
    onClose: cloneDeepWith(STORY_META.MODAL_CLOSE_HANDLER, (onClose) => {
      onClose.table.category = CATEGORY.MODAL;
      return onClose;
    }),
    blurredBackground: {
      description: `Whether to blur the background layer.\n\n백그라운드 레이어를 흐리게 할지 여부`,
      table: {
        defaultValue: { summary: true },
        category: CATEGORY.MODAL,
      },
    },

    //* Modal.Header
    headerChildren: {
      name: 'children',
      description: `The content to display on the left inside the component.\n\n컴포넌트 내부 좌측에 표시할 내용`,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.MODAL_HEADER,
      },
    },
    closeButton: {
      description: `Whether to display the close button.\n\n닫기 버튼을 표시할지 여부`,
      table: {
        defaultValue: { summary: false },
        type: { summary: 'boolean' },
        category: CATEGORY.MODAL_HEADER,
      },
    },
  },
  args: {
    headerChildren: 'Modal Header',
    closeButton: false,
    zIndex: 100,
    opened: false,
    children: "Modal's children",
    blurredBackground: true,
  },
};

export default meta;

type Story = StoryObj<ModalMetaProps>;

export const Default: Story = {
  render: ({ closeButton, headerChildren, children, ...restModalProps }) => (
    <Modal {...restModalProps}>
      <Modal.Header closeButton={closeButton}>{headerChildren}</Modal.Header>
      {children}
    </Modal>
  ),
};
