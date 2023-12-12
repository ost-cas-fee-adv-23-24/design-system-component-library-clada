import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './logo';
import React from 'react';
import classnames from 'classnames';

const meta: Meta<typeof Logo> = {
	title: 'Components/Logo',
	component: Logo,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'️NOTE: The background is not a part of the logo. It only visualizes the difference better for white logos.',
			},
		},
	},
};

type Story = StoryObj<typeof meta>;

export default meta;

const Template: Story['render'] = (args) => {
	const backgroundClasses = args.variant === 'white' ? 'bg-primary-700' : 'bg-white';

	return (
		<div className={classnames('p-l', backgroundClasses)}>
			<Logo variant={args.variant} href={args.href} />
		</div>
	);
};

export const Default: Story = {
	render: Template,
	args: {
		variant: 'primary',
		href: '#',
	},
};

export const White: Story = {
	render: Template,
	args: {
		variant: 'white',
		href: '#',
	},
};

export const Gradient: Story = {
	render: Template,
	args: {
		variant: 'primary',
		href: '#',
	},
};
