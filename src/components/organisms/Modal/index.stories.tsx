import type { Meta, StoryObj } from '@storybook/react';

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
      table: {
        category: CATEGORY.MODAL,
      },
    },

    //* Modal.Header
    headerChildren: {
      name: 'children',
      table: {
        category: CATEGORY.MODAL_HEADER,
      },
    },
    closeButton: {
      table: {
        type: { summary: 'boolean' },
        category: CATEGORY.MODAL_HEADER,
      },
    },
  },
  args: {
    headerChildren: 'Modal Header',
    closeButton: true,
  },
};

export default meta;

type Story = StoryObj<ModalMetaProps>;

export const Default: Story = {
  render: ({ closeButton, headerChildren, ...restModalProps }) => (
    <Modal {...restModalProps}>
      <Modal.Header closeButton={closeButton}>{headerChildren}</Modal.Header>
    </Modal>
  ),
};
