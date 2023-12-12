import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import React, { useEffect, useState } from 'react';

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

const Template: Story['render'] = (args) => {
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		setIsOpen(args.isOpen);
	}, [args.isOpen]);

	return (
		<>
			<button onClick={() => setIsOpen(!isOpen)}>open modal</button>
			<Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={() => setIsOpen(false)}>
				<p>Hello World!</p>
			</Modal>
		</>
	);
};

export const Default: Story = {
	render: Template,
	args: {
		isOpen: false,
		width: 's',
		title: 'Modal Title',
		children: <div>Modal Content</div>,
	},
};
