import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	args: {
		tabs: [
			{
				text: 'Deine Mumbles',
				onClick: () => console.log('clicked'),
				selected: true,
			},
			{
				text: 'Deine Likes',
				onClick: () => console.log('clicked'),
				selected: false,
			},
		],
	},
};
