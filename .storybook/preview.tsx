import '../src/styles/_global.scss';
import '../src/styles/storybook.scss';
import { Preview } from '@storybook/react';

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
} satisfies Preview;
