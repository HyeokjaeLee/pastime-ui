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
    <article className="select-used-container">
      <Story />
    </article>
  ),
];

export const VALIDATION = {
  control: false,
  description:
    'The argument of the function is the input value, and the return value will be the error message\n\nReturning undefined is considered as passing the validation.\n\nThe component id value is required to use the useValidation hook.\n\n함수의 `argument`는 입력값이며, 리턴값이 에러 메시지가 됩니다. `undefined`를 리턴하면 검증을 통과한 것으로 간주됩니다.\n\n`useValidation` hook을 사용하기 위해선 컴포넌트 `id`값이 필수 입니다.',
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

export const INPUT_LABEL = {
  description: `The label text of the component.\n\n컴포넌트의 라벨 텍스트`,
  control: 'text',
  table: {
    type: {
      summary: 'string',
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

export const INPUT_REQUIRED = {
  description: `Whether the input is required or not.\n\n입력이 필수인지 여부`,
  control: 'boolean',
  table: {
    type: {
      summary: 'boolean',
    },
    defaultValue: { summary: false },
  },
};

export const INPUT_READONLY = {
  description: `Whether the input is readonly or not.\n\n입력이 읽기전용인지 여부`,
  control: 'boolean',
  table: {
    type: {
      summary: 'boolean',
    },
    defaultValue: { summary: false },
  },
};

export const OPENED = {
  description: `Whether the component is opened or not.\n\n컴포넌트가 열려있는지 여부`,
  control: 'boolean',
  table: {
    type: {
      summary: 'boolean',
    },
    defaultValue: { summary: false },
  },
};

export const INNER_STATE_CHANGE_HANDLER = {
  description: `
  #### Inner State usage example
  <pre>
    <code>
      const handleChange = (e) => {
        inputValues.value = e.value;
      };
    </code>
  </pre>
  #### preventInnerStateChange usage example
  <pre>
    <code>
      const handleChange = (e) => {
        e.preventInnerStateChange();
        setValue(e.value);
      };
    </code>
  </pre>
  Component's Change handler supports inner State, and you can deactivate the inner State by calling the preventInnerStateChange function.
  
  컴포넌트의 Change 핸들러는 내부 State를 지원하며, preventInnerStateChange 함수를 호출하여 내부 State를 비활성화할 수 있습니다.`,
  control: false,
};

export const MODAL_CLOSE_HANDLER = {
  description: `
  #### preventDefaultClose usage example
  <pre>
    <code>
      const handleClose = (e) => {
        e.preventDefaultClose();
        setOpened(false);
      };
    </code>
  </pre>
  Component's Close handler supports inner State, and you can deactivate the inner State by calling the preventDefaultClose function.
  
  컴포넌트의 Close 핸들러는 내부 State를 지원하며, preventDefaultClose 함수를 호출하여 내부 State를 비활성화할 수 있습니다.`,
  control: false,
  table: {},
};

export const MODAL_BACKGROUND_SCROLL = {
  description: `Whether to allow background scrolling when the component is opened.\n\n컴포넌트가 열려있을 때, 백그라운드 스크롤을 허용할지 여부`,
  control: 'boolean',
  table: {
    type: {
      summary: 'boolean',
    },
    defaultValue: { summary: false },
  },
};

export const MODAL_Z_INDEX = {
  description: `The z-index of the component, including the background layer.\n\n백그라운드 레이어를 포함한 컴포넌트의 z-index`,
  control: 'number',
  table: {
    defaultValue: { summary: 100 },
    type: {
      summary: 'number',
    },
  },
};

export const MODAL_CLOSE_BUTTON = {
  description: `Whether to display the close button.\n\n닫기 버튼을 표시할지 여부`,
  table: {
    defaultValue: { summary: false },
    type: { summary: 'boolean' },
  },
};

export const MODAL_BACKGROUND_BLUR = {
  description: `Whether to blur the background layer.\n\n백그라운드 레이어를 흐리게 할지 여부`,
  table: {
    defaultValue: { summary: true },
  },
};

export const FIXED_DARK_MODE = {
  description: `Dark mode to be applied prior to the global dark mode setting.\n\n전역 darkMode 설정보다 우선 적용할 darkMode`,
  options: ['light', 'dark'],
  control: 'radio',
  table: {},
};
