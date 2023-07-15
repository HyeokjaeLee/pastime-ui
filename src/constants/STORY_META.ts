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

/**
 * @deprecated 안씀
 */
export const THEME = {
  options: ['light', 'dark'],
  control: 'radio',
  description: '컴포넌트의 테마를 설정합니다.',
  table: {
    defaultValue: { summary: 'light' },
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
    'A function for validation.\n\n 함수의 The `argument` of the function is the input value, and the return value becomes the error message. If `undefined` is returned, it is considered to have passed the validation.',
};
