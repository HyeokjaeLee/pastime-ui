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
  },
};

export const OPTIONS_FLOAT = {
  options: ['bottom', 'top'],
  control: 'radio',
  description:
    'The location where the `Option` component will be displayed.\n\n옵션 컴포넌트가 표시될 위치',
  table: {
    defaultValue: { summary: 'bottom' },
  },
};

export const VALIDATION = {
  control: false,
  description:
    'The `argument` of the function is the input value, and the return value becomes the error message. If `undefined` is returned, it is considered to have passed the validation.\n\n함수의 `argument`는 입력값이며, 리턴값이 에러 메시지가 됩니다. `undefined`를 리턴하면 검증을 통과한 것으로 간주됩니다.',
};

export const PLACEHOLDER = {
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
    defaultValue: { summary: false },
  },
};
