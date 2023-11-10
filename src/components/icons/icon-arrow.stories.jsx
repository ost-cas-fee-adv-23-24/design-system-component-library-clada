import React from 'react';
import ArrowIcon from './arrow';

export default {
  title: 'Components/Icons-Arrow',
  component: ArrowIcon,
  argTypes: {
    size: {
      options: ['s', 'm', 'l'],
      control: { type: 'radio' },
    },
    color: {
      options: ['slate', 'white'],
      control: { type: 'radio' },
    },
    direction: {
      options: ['right', 'left', 'up', 'down'],
      control: { type: 'radio' },
    },
  },
};

const ArrowTemplate = (args) => <ArrowIcon {...args} />;

export const Arrow = ArrowTemplate.bind({});
// Set default args for all components

Arrow.args = {
  size: 's',
  color: 'slate',
  direction: 'right'
};


