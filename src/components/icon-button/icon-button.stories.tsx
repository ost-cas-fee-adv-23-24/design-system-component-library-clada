import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './icon-button';
import { CalendarIcon, LocationIcon, ProfileIcon, TimeIcon } from '../icons';

const meta: Meta<typeof IconButton> = {
	title: 'Components/Icon Button',
	component: IconButton,
	tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	args: {
		href: '#',
		children: 'Username',
		Icon: ProfileIcon,
	},
};

export const BaseColor: Story = {
	args: {
		href: '#',
		children: 'Timestamp',
		Icon: TimeIcon,
		variant: 'base',
	},
};

export const Location: Story = {
	args: {
		href: '#',
		children: 'Location',
		Icon: LocationIcon,
		variant: 'base',
	},
};

export const Calendar: Story = {
	args: {
		href: '#',
		children: 'Joined',
		Icon: CalendarIcon,
		variant: 'base',
	},
};
