import React, { FC } from 'react';
import HeartIcon from './heart';
import ReplyIcon from './reply';
import { FillableIconProps } from './iconUtils';

export default {
	title: 'Components/Icons',
	component: HeartIcon,
	argTypes: {
		size: {
			options: ['s', 'm', 'l'],
			control: { type: 'radio' },
		},
		color: {
			options: ['base', 'white', 'primary', 'secondary'],
			control: { type: 'radio' },
		},
		filled: {
			options: [false, true],
			control: { type: 'radio' },
		},
	},
};

const defaultArgs: FillableIconProps = {
	size: 's',
	color: 'base',
	filled: false,
};

const createTemplate = (IconComponent: FC<FillableIconProps>) => {
	const Template = (args: FillableIconProps) => <IconComponent {...args} />;
	Template.args = { ...defaultArgs };
	return Template;
};

export const Heart = createTemplate(HeartIcon);
export const Reply = createTemplate(ReplyIcon);
