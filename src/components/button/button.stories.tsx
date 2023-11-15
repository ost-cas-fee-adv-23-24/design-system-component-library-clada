import type { Meta } from '@storybook/react';
import React from 'react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
};

export default meta;

export const Primary = () => <Button id="test" />;
