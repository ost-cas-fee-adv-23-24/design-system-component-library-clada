import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { MumbleIcon } from '../icons';
import React from 'react';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Base: Story = {
	args: {
		label: 'Base Button',
		onClick: () => console.log('Base Button clicked'),
		color: 'base',
	},
};

export const Primary: Story = {
	args: {
		label: 'Primary Button',
		onClick: () => console.log('Primary Button clicked'),
		color: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		label: 'Secondary Button',
		onClick: () => console.log('Secondary Button clicked'),
		color: 'secondary',
	},
};

export const LargeSize: Story = {
	args: {
		label: 'Large Button',
		onClick: () => console.log('Large Button clicked'),
		size: 'l',
		color: 'base',
	},
};

export const MediumSize: Story = {
	args: {
		label: 'Medium Button',
		onClick: () => console.log('Medium Button clicked'),
		size: 'm',
		color: 'primary',
	},
};

export const WithIcon: Story = {
	args: {
		label: 'Button with Icon',
		onClick: () => console.log('Button with Icon clicked'),
		icon: <MumbleIcon color="white" size="s" />,
		color: 'secondary',
	},
};

export const NoLabelButton: Story = {
	args: {
		onClick: () => console.log('No Label Button clicked'),
		color: 'base',
		noLabel: true,
		size: 'l',
		icon: <MumbleIcon color="white" size="s" />,
	},
};
