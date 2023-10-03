import type { Meta } from '@storybook/react'
import React from 'react';
import { Button } from '../components/button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Primary = () =>  <Button id='test' />;