/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms';
import { STORY_DUUMMY } from '@constants';
import { ToastOption } from '@contexts/ToastContext';
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
              ? STORY_DUUMMY.LONG_TEXT
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
  title: 'atoms/Toast',
  component: Toast.Provider,
  argTypes: {
    //* Toast.Provider
    floatDirection: {
      description:
        'The location where the Toast will be displayed.\n\nToast가 표시될 위치',
      table: {
        category: CATEGORY.TOAST_PROVIDER,
      },
    },
    children: {
      description:
        'You should wrap it around the top-level component of the app.\n\n앱의 최상위 컴포넌트로 감싸주어야 합니다.',
      control: '-',
      table: {
        type: { summary: 'ReactNode' },
        category: CATEGORY.TOAST_PROVIDER,
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

const DEFAULT_CODE_EXAMPLE = `
// App.tsx
<Toast.Provider floatDirection="from-top">
  <App />
</Toast.Provider>

// Page.tsx
const Page = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          type: 'success',
          message: 'Toast test text',
          holdTime: 5000,
        })
      }
    >
      🚀 Toast!
    </Button>
  );
}
`;

export const Default: Story = {
  render: ({ message, holdTime, type, ...args }) => (
    <Toast.Provider {...args}>
      <ToastTestButton message={message} type={type} holdTime={holdTime} />
    </Toast.Provider>
  ),
  parameters: {
    docs: {
      source: {
        code: DEFAULT_CODE_EXAMPLE,
      },
    },
  },
};

export const Type: Story = {
  render: ({ holdTime = 999999 }) => (
    <div className="story-container">
      <Toast holdTime={holdTime} icon="success">
        Success toast
      </Toast>
      <Toast holdTime={holdTime} icon="fail">
        Fail toast
      </Toast>
      <Toast holdTime={holdTime} icon="warning">
        Warning toast
      </Toast>
      <Toast holdTime={holdTime} icon="info">
        Info toast
      </Toast>
    </div>
  ),
};
