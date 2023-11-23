import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { MumbleIcon } from '../icons';

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const InputText: Story = {
	args: {
		id: 'input-text',
		type: 'text',
		label: 'Input',
		placeholder: 'Placeholder',
		onChange: (ev) => console.log(ev),
		Icon: MumbleIcon,
	},
};

export const InputMail: Story = {
	args: {
		id: 'input-mail',
		type: 'mail',
		label: 'Input',
		placeholder: 'Placeholder',
		onChange: (ev) => console.log(ev),
	},
};

export const InputPrefilled: Story = {
	args: {
		id: 'input-prefilled',
		type: 'text',
		label: 'Input',
		defaultValue: 'Prefilled',
		placeholder: 'Placeholder',
		onChange: (ev) => console.log(ev),
	},
};

export const InputWithError: Story = {
	args: {
		id: 'input-with-error',
		type: 'text',
		label: 'Input',
		placeholder: 'Placeholder',
		onChange: (ev) => console.log(ev),
		error: 'Error',
	},
};
