import React, { useState as createState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputContainer } from '..';
import { Input } from '../Input';

const { Intreraction } = InputContainer;

const meta: Meta<typeof Intreraction> = {
  title: 'atoms/InputContainer/Interaction',
  component: Intreraction,
  args: {
    children: <Input />,
  },
};

export default meta;

type Story = StoryObj<typeof InputContainer>;

export const Default: Story = {};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = createState('value');
    const inputProps = {
      value,
      onChange: setValue,
    };
    return (
      <article className="story-container">
        <InputContainer {...args}>
          <InputContainer.Intreraction>
            <Input {...inputProps} />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer {...args}>
          <InputContainer.Intreraction>
            <Input {...inputProps} disabled="read-only" />
          </InputContainer.Intreraction>
        </InputContainer>
        <InputContainer {...args}>
          <InputContainer.Intreraction>
            <Input {...inputProps} disabled />
          </InputContainer.Intreraction>
        </InputContainer>
      </article>
    );
  },
};
