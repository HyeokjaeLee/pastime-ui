export const HIDDEN = {
  table: {
    disable: true,
  },
};

export const DARK_MODE = {
  control: 'boolean',
  description: 'Dark mode setting.',
  table: {
    defaultValue: { summary: false },
  },
};

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
  description: 'Sets the size of the component.',
  table: {
    defaultValue: { summary: 'medium' },
  },
};

export const OPTIONS_FLOAT = {
  options: ['bottom', 'top'],
  control: 'radio',
  description: '옵션 컴포넌트가 표시될 위치를 설정합니다.',
  table: {
    defaultValue: { summary: 'bottom' },
  },
};

export const VALIDATION = {
  control: false,
  description:
    'A function for validation.\n\n 함수의 The `argument` of the function is the input value, and the return value becomes the error message. If `undefined` is returned, it is considered to have passed the validation.',
};
