import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';
import React from 'react';

const meta: Meta<typeof Link> = {
	title: 'Components/Link',
	component: Link,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	args: {
		href: '#',
		openInNewTab: false,
		children: <>Default link</>,
	},
};

export const OpenInNewTab: Story = {
	args: {
		href: '#',
		openInNewTab: true,
		children: <>Open in new Tab</>,
	},
};
