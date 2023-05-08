import React, { useState as createState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { BackgroundLayer } from '.';
import { Button } from '../Button';

const meta: Meta<typeof BackgroundLayer> = {
  title: 'atoms/BackgroundLayer',
  component: BackgroundLayer,
  args: {
    focused: false,

    blur: true,
  },

  decorators: [
    (Story) => (
      <article
        style={{
          minHeight: '500px',
        }}
      >
        Outer content
        <Story />
      </article>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BackgroundLayer>;

export const Default: Story = {
  render: (props) => {
    const [focused, setFocused] = createState(props.focused);

    return (
      <BackgroundLayer {...props} focused={focused}>
        <Button onClick={() => setFocused(!focused)}>
          {focused ? 'close' : 'open'}
        </Button>
      </BackgroundLayer>
    );
  },
};
