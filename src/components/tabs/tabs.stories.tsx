import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	args: {
		tabs: [
			{
				text: 'Deine Mumbles',
				onClick: () => console.log('clicked tab 1'),
			},
			{
				text: 'Deine Likes',
				onClick: () => console.log('clicked tab 2'),
			},
		],
	},
};

export const OneItem: Story = {
	args: {
		tabs: [
			{
				text: 'Deine Mumbles',
				onClick: () => console.log('clicked'),
			},
		],
	},
};

export const ThreeItems: Story = {
	args: {
		tabs: [
			{
				text: 'Deine Mumbles',
				onClick: () => console.log('clicked'),
			},
			{
				text: 'Deine Likes',
				onClick: () => console.log('clicked'),
			},
			{
				text: 'Deine Follower',
				onClick: () => console.log('clicked'),
			},
		],
	},
};

export const PreselectTab: Story = {
	args: {
		tabs: [
			{
				text: 'Deine Mumbles',
				onClick: () => console.log('clicked'),
			},
			{
				text: 'Deine Likes',
				onClick: () => console.log('clicked tab 2'),
				selected: true,
			},
			{
				text: 'Deine Follower',
				onClick: () => console.log('clicked tab 3'),
			},
		],
	},
};
