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
				text: 'Option 1',
				onClick: () => console.log('clicked option 1'),
			},
			{
				text: 'Option 2',
				onClick: () => console.log('clicked option 2'),
			},
		],
	},
};

export const OneItem: Story = {
	args: {
		tabs: [
			{
				text: 'One Option',
				onClick: () => console.log('clicked'),
			},
		],
	},
};

export const ThreeItems: Story = {
	args: {
		tabs: [
			{
				text: 'Option 1',
				onClick: () => console.log('clicked option 1'),
			},
			{
				text: 'Option 2 with longer text',
				onClick: () => console.log('clicked option 2'),
			},
			{
				text: 'Option 3',
				onClick: () => console.log('clicked option 3'),
			},
		],
	},
};

export const PreselectTab: Story = {
	args: {
		tabs: [
			{
				text: 'Option 1',
				onClick: () => console.log('clicked option 1'),
			},
			{
				text: 'Option 2',
				onClick: () => console.log('clicked option 2'),
				selected: true,
			},
			{
				text: 'Option 3',
				onClick: () => console.log('clicked option 3'),
			},
		],
	},
};
