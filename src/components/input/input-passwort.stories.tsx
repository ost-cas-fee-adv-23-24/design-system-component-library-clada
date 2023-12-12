import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from './input-password';

const meta: Meta<typeof InputPassword> = {
	title: 'Components/Inputs/Input Password',
	component: InputPassword,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	args: {
		label: 'Input',
		placeholder: 'Placeholder',
	},
};
