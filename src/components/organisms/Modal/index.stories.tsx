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
    zIndex: cloneDeepWith(STORY_META.MODAL_Z_INDEX, (zIndex) => {
      zIndex.table.category = CATEGORY.MODAL;
      return zIndex;
    }),
    onClose: cloneDeepWith(STORY_META.MODAL_CLOSE_HANDLER, (onClose) => {
      onClose.table.category = CATEGORY.MODAL;
      return onClose;
    }),
    blurredBackground: cloneDeepWith(
      STORY_META.MODAL_BACKGROUND_BLUR,
      (blurredBackground) => {
        blurredBackground.table.category = CATEGORY.MODAL;
        return blurredBackground;
      },
    ),
    backgroundScroll: cloneDeepWith(
      STORY_META.MODAL_BACKGROUND_SCROLL,
      (backgroundScroll) => {
        backgroundScroll.table.category = CATEGORY.MODAL;
        return backgroundScroll;
      },
    ),

    //* Modal.Header
    headerChildren: {
      name: 'children',
      description: `The content to display on the left inside the component.\n\n컴포넌트 내부 좌측에 표시할 내용`,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.MODAL_HEADER,
      },
    },
    closeButton: cloneDeepWith(STORY_META.MODAL_CLOSE_BUTTON, (closeButton) => {
      closeButton.table.category = CATEGORY.MODAL_HEADER;
      return closeButton;
    }),
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
