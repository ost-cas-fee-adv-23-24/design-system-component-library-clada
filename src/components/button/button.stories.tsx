import type { Meta } from '@storybook/react';
import React from 'react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
	title: 'Component/Button',
	component: Button,
};

export default meta;

export const Primary = () => <Button id="test" />;
