import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
	title: 'Components/Textarea',
	component: Textarea,
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 'txt-area-1',
		label: 'Textarea',
		name: 'text-area',
		placeholder: 'This is a placeholder',
	},
};

export const HasError: Story = {
	args: {
		id: 'txt-area-1',
		label: 'Textarea',
		name: 'text-area',
		placeholder: 'This is a placeholder',
		error: 'Error',
	},
};
