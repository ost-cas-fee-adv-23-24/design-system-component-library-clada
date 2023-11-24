import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { MumbleIcon } from '../icons'; // Assuming MumbleIcon is one of your icons
import React from 'react';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Slate: Story = {
	args: {
		label: 'Slate Button',
		onClick: () => console.log('Slate Button clicked'),
		color: 'slate',
	},
};

export const Violet: Story = {
	args: {
		label: 'Violet Button',
		onClick: () => console.log('Violet Button clicked'),
		color: 'violet',
	},
};

export const Gradient: Story = {
	args: {
		label: 'Gradient Button',
		onClick: () => console.log('Gradient Button clicked'),
		color: 'gradient',
	},
};

export const LargeSize: Story = {
	args: {
		label: 'Large Button',
		onClick: () => console.log('Large Button clicked'),
		size: 'L',
	},
};

export const MediumSize: Story = {
	args: {
		label: 'Medium Button',
		onClick: () => console.log('Medium Button clicked'),
		size: 'M',
	},
};

export const WithIcon: Story = {
	args: {
		label: 'Button with Icon',
		onClick: () => console.log('Button with Icon clicked'),
		icon: <MumbleIcon color="white" />, // Replace with the actual icon you want to use
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Button',
		onClick: () => console.log('Disabled Button clicked'),
		disabled: true,
	},
};
