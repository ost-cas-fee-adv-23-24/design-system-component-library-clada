import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `

## Overview
The Avatar component is used to display user images with various customization options. It allows for different sizes, border customization, and interactive features.

## Features
- **Size Variability**: Comes in four sizes - small, medium, large, and extra-large.
- **Border Customization**: Optional border settings including border removal and color changes.
- **Hover Effect**: An optional hover effect that changes the border-radius.
- **Click Event**: Supports an onClick event handler for user interaction.

## Props
- \`size\`: 's' | 'm' | 'l' | 'xl' - Determines the size of the avatar.
- \`imageUrl\` (optional): String - URL of the image to be displayed.
- \`noBorder\` (optional): Boolean - If true, removes the border from the avatar.
- \`borderColor\` (optional): 'white' | 'base' - Color of the border.
- \`onClick\` (optional): Function - Callback function for the click event.
- \`hoverEffect\` (optional): Boolean - Enables a hover effect that alters border-radius.

## Usage
The Avatar component can be used in various user interfaces where user identity representation is required, such as in comments, profiles, or posts.

`,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => <Avatar {...args} />;

export const Small: Story = {
	render: Template,
	args: {
		size: 's',
		noBorder: true,
		imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
		onClick: () => console.log('Avatar clicked'),
	},
};

export const Medium: Story = {
	render: Template,
	args: {
		size: 'm',
		imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
		onClick: () => console.log('Avatar clicked'),
	},
};

export const Large: Story = {
	render: Template,
	args: {
		size: 'l',
		imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
		onClick: () => console.log('Avatar clicked'),
		hoverEffect: true,
	},
};

export const ExtraLarge: Story = {
	render: Template,
	args: {
		size: 'xl',
		imageUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
		onClick: () => console.log('Avatar clicked'),
	},
};
