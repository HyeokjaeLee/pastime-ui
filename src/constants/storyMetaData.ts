export const HIDDEN = {
  table: {
    disable: true,
  },
};

export const DARK_MODE = {
  control: 'boolean',
  description: '다크 모드를 설정합니다.',
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
  description: '컴포넌트의 크기를 설정합니다.',
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
    '유효성 검사를 위한 함수입니다.\n\n 함수의 `argument`는 입력값이고 반환값이 에러 메시지가 되며 `undefined`를 반환하면 유효성 검사를 통과한 것으로 간주합니다.',
};
