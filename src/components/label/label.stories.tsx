import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';

const meta: Meta<typeof Label> = {
	title: 'Components/Label',
	component: Label,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const SizeS: Story = {
	args: {
		size: 's',
		children: 'Label S',
	},
};

export const SizeM: Story = {
	args: {
		size: 'm',
		children: 'Label M',
	},
};

export const SizeL: Story = {
	args: {
		size: 'l',
		children: 'Label L',
	},
};

export const SizeXL: Story = {
	args: {
		size: 'xl',
		children: 'Label XL',
	},
};
