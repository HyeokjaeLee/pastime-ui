export const HIDDEN = {
  table: {
    disable: true,
  },
};

export const DARK_MODE = {
  control: 'boolean',
  description: 'Dark mode setting.\n\n다크모드 설정',
  table: {
    defaultValue: { summary: false },
  },
};

export const SIZE = {
  options: ['small', 'medium', 'large'],
  control: 'radio',
  description: 'The size of the component.\n\n컴포넌트의 크기',
  table: {
    defaultValue: { summary: 'medium' },
    type: {
      summary: '"small" | "medium" | "large"',
    },
  },
};

export const SELECT_OPTIONS = {
  description: 'The options to provide.\n\n제공할 옵션',
  control: 'object',
};

export const SELECT_MULTIPLE = {
  control: 'boolean',
  description:
    'Whether multiple selection is possible or not.\n\n다중 선택이 가능한지 여부',
  table: {
    defaultValue: { summary: false },
  },
};

export const SELECT_CANCELABLE = {
  control: 'boolean',
  description:
    'Whether it is possible to cancel by re-selecting the already selected option.\n\n이미 선택된 옵션을 다시 선택하여 취소할 수 있는지 여부',
};

export const SELECT_OPTIONS_FLOAT = {
  options: ['bottom', 'top'],
  control: 'radio',
  description:
    'The location where the `Option` component will be displayed.\n\n옵션 컴포넌트가 표시될 위치',
  table: {
    defaultValue: { summary: 'bottom' },
  },
};

export const SELECT_USED_DECORATORS = [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Story: any) => (
    <article
      className="story-container"
      style={{
        height: 650,
        alignItems: 'center',
      }}
    >
      <Story />
    </article>
  ),
];

export const VALIDATION = {
  control: false,
  description:
    'The `argument` of the function is the input value, and the return value becomes the error message. If `undefined` is returned, it is considered to have passed the validation.\n\n함수의 `argument`는 입력값이며, 리턴값이 에러 메시지가 됩니다. `undefined`를 리턴하면 검증을 통과한 것으로 간주됩니다.',
};

export const INPUT_PLACEHOLDER = {
  description: 'The placeholder of the component.\n\n컴포넌트의 placeholder',
  control: 'text',
  table: {
    type: {
      summary: 'string',
    },
  },
};

export const INPUT_DISABLED = {
  description:
    'Whether the input is disabled or not.\n\n입력이 비활성화되었는지 여부',
  options: ['readonly', true, false],
  control: {
    type: 'radio',
  },
  table: {
    type: {
      summary: 'boolean | "readonly"',
    },
    defaultValue: { summary: false },
  },
};

export const INPUT_CHILDREN = {
  description: `The content to display on the right inside the component.\n\n컴포넌트 내부 우측에 표시할 내용`,
  control: 'text',
  table: {
    type: {
      summary: 'React.ReactNode',
    },
  },
};

export const INPUT_REVERSED = {
  description: `Whether to reverse the position of the children.\n\nchildren의 위치를 반전시킬지 여부`,
  control: 'boolean',
  table: {
    type: {
      summary: 'boolean',
    },
    defaultValue: { summary: false },
  },
};
