/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms';
import { STORY_DUUMMY_DATA, STORY_META_DATA } from '@constants';
import { ToastOption } from '@contexts';
import { useToast } from '@hooks';

import { Toast, ToastProviderProps } from '.';

type ToastTestButtonProps = Partial<ToastOption>;

const ToastTestButton = ({ message, type, holdTime }: ToastTestButtonProps) => {
  const [toastIndex, setToastIndex] = useState(0);
  const { toast } = useToast();
  const typeNumber = toastIndex % 4;
  return (
    <Button
      onClick={() => {
        toast({
          message:
            message ||
            (toastIndex % 4 === 0
              ? STORY_DUUMMY_DATA.LONG_TEXT
              : `Toast test text ${toastIndex}`),
          type:
            type ??
            (() => {
              switch (typeNumber) {
                case 0:
                  return 'success';
                case 1:
                  return 'fail';
                case 2:
                  return 'warning';
                case 3:
                  return 'info';
                default:
                  return 'success';
              }
            })(),
          holdTime,
        });
        setToastIndex((prev) => prev + 1);
      }}
    >
      🚀 Toast!
    </Button>
  );
};

type MetaProps = ToastTestButtonProps & ToastProviderProps;

enum CATEGORY {
  TOAST_PROVIDER = 'Toast.Provider',
  TOAST_OPTION = 'Toast Option',
}

const meta: Meta<MetaProps> = {
  title: 'molecules/Toast',
  component: Toast.Provider,

  render: ({ message, holdTime, type, ...args }) => (
    <Toast.Provider {...args}>
      <ToastTestButton message={message} type={type} holdTime={holdTime} />
    </Toast.Provider>
  ),
  argTypes: {
    //* Toast.Provider
    floatDirection: {
      description: 'Toast가 표시될 위치',
      table: {
        category: CATEGORY.TOAST_PROVIDER,
      },
    },
    darkMode: {
      ...STORY_META_DATA.DARK_MODE,
      table: {
        category: CATEGORY.TOAST_PROVIDER,
      },
    },
    children: {
      description: '앱의 최상위 컴포넌트로 감싸주어야 합니다. \n\n `ReactNode`',
      control: '-',
      table: {
        category: CATEGORY.TOAST_PROVIDER,
        type: 'ReactNode',
      },
    },

    //* Toast Option
    message: {
      control: 'text',
      description: 'Toast의 메시지',
      table: {
        type: { summary: 'string' },
        category: CATEGORY.TOAST_OPTION,
      },
    },
    type: {
      description: 'Toast의 타입',
      options: ['success', 'fail', 'warning', 'info'],
      control: 'radio',
      table: {
        category: CATEGORY.TOAST_OPTION,
        type: { summary: `success | fail | warning | info | ReactNode` },
        defaultValue: { summary: 'success' },
      },
    },
    holdTime: {
      description: 'Toast가 보여지는 시간 (ms)',
      control: 'number',
      table: {
        type: { summary: 'number' },
        category: CATEGORY.TOAST_OPTION,
        defaultValue: { summary: 5000 },
      },
    },
  },
};

export default meta;

type Story = StoryObj<MetaProps>;

export const Default: Story = {};

export const Type: Story = {
  render: () => (
    <div className="story-container">
      <Toast holdTime={999999} icon="success">
        Success toast
      </Toast>
      <Toast holdTime={999999} icon="fail">
        Fail toast
      </Toast>
      <Toast holdTime={999999} icon="warning">
        Warning toast
      </Toast>
      <Toast holdTime={999999} icon="info">
        Info toast
      </Toast>
    </div>
  ),
};
