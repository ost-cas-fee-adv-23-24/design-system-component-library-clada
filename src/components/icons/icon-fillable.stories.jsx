import React from 'react';
import HeartIcon from './heart';

export default {
  title: 'Components/Icons-Fillable',
  component: HeartIcon,
  argTypes: {
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
    color: {
      options: ['slate', 'white'],
      control: { type: 'radio' },
    },
    filled: {
      options: [false, true],
      control: { type: 'radio' },
    },
  },
};

const HeartTemplate = (args) => <HeartIcon {...args} />;


export const Heart = HeartTemplate.bind({});

// Set default args for all components

Heart.args = {
  size: 's',
  color: 'slate',
  filled: false
};

