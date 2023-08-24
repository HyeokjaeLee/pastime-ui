import type { Meta, StoryObj } from '@storybook/react';

import { STORY_META } from '@constants';
import { cloneDeepWith } from '@utils';

import { Drawer, DrawerHeaderProps, DrawerProps } from '.';

interface DrawerMetaProps
  extends DrawerProps,
    Pick<DrawerHeaderProps, 'closeButton'> {
  headerChildren: React.ReactNode;
}
enum CATEGORY {
  DRAWER = 'Drawer',
  DRAWER_HEADER = 'Drawer.Header',
}

const meta: Meta<DrawerMetaProps> = {
  title: 'organisms/Drawer',
  component: Drawer,
  argTypes: {
    //* Drawer
    children: {
      description: `The content of the drawer.\n\nDrawer의 내용`,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.DRAWER,
      },
    },
    opened: cloneDeepWith(STORY_META.OPENED, (opened) => {
      opened.table.category = CATEGORY.DRAWER;
      return opened;
    }),
    zIndex: cloneDeepWith(STORY_META.MODAL_Z_INDEX, (zIndex) => {
      zIndex.table.category = CATEGORY.DRAWER;
      return zIndex;
    }),
    onClose: cloneDeepWith(STORY_META.MODAL_CLOSE_HANDLER, (onClose) => {
      onClose.table.category = CATEGORY.DRAWER;
      return onClose;
    }),
    blurredBackground: cloneDeepWith(
      STORY_META.MODAL_BACKGROUND_BLUR,
      (blurredBackground) => {
        blurredBackground.table.category = CATEGORY.DRAWER;
        return blurredBackground;
      },
    ),
    drawerDirection: {
      description: `The direction of the drawer.\n\nDrawer의 방향`,
      table: {
        category: CATEGORY.DRAWER,
        defaultValue: { summary: 'right' },
      },
      control: {
        type: 'select',
        options: ['bottom', 'top', 'left', 'right'],
      },
    },
    backgroundScroll: cloneDeepWith(
      STORY_META.MODAL_BACKGROUND_SCROLL,
      (backgroundScroll) => {
        backgroundScroll.table.category = CATEGORY.DRAWER;
        return backgroundScroll;
      },
    ),
    fixedDarkMode: cloneDeepWith(
      STORY_META.FIXED_DARK_MODE,
      (fixedDarkMode) => {
        fixedDarkMode.table.category = CATEGORY.DRAWER;
        return fixedDarkMode;
      },
    ),

    //* Drawer.Header
    headerChildren: {
      name: 'children',
      description: `The content to display on the left inside the component.\n\n컴포넌트 내부 좌측에 표시할 내용`,
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.DRAWER_HEADER,
      },
    },
    closeButton: cloneDeepWith(STORY_META.MODAL_CLOSE_BUTTON, (closeButton) => {
      closeButton.table.category = CATEGORY.DRAWER_HEADER;
      return closeButton;
    }),
  },
  args: {
    headerChildren: 'Drawer Header',
    closeButton: false,
    zIndex: 100,
    opened: true,
    children: "Drawer's children",
    blurredBackground: true,
  },
};

export default meta;

type Story = StoryObj<DrawerMetaProps>;

export const Default: Story = {
  render: ({ closeButton, headerChildren, children, ...restDrawerProps }) => (
    <Drawer {...restDrawerProps}>
      <Drawer.Header closeButton={closeButton}>{headerChildren}</Drawer.Header>
      {children}
    </Drawer>
  ),
};
