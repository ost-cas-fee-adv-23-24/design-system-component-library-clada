import React from 'react';
import HeartIcon from './heart';
import ReplyIcon from './reply';

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
const ReplyTemplate = (args) => <ReplyIcon {...args} />;

export const Heart = HeartTemplate.bind({});
export const Reply = ReplyTemplate.bind({});
// Set default args for all components

Heart.args = {
  size: 's',
  color: 'slate',
  filled: false
};

Reply.args = {
  size: 's',
  color: 'slate',
  filled: false
};


