import '../src/styles/_global.scss';
import '../src/styles/storybook.scss';
import { Preview } from '@storybook/react';
import React from 'react';

const DARK_MODE_QUERY = 'backgrounds.value:!hex(333333)';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      if (window.location.href.includes(DARK_MODE_QUERY)) {
        document.documentElement.classList.add('pastime:dark');
        document.documentElement.classList.remove('pastime:light');
      } else {
        document.documentElement.classList.add('pastime:light');
        document.documentElement.classList.remove('pastime:dark');
      }

      return <Story />;
    },
  ],
} satisfies Preview;
