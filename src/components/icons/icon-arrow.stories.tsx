import React, { FC } from 'react';
import { ArrowIcon } from './arrow';
import { RotatableIconProps } from './iconUtils';

export default {
	title: 'Components/Icons',
	component: ArrowIcon,
	argTypes: {
		size: {
			options: ['s', 'm', 'l'],
			control: { type: 'radio' },
		},
		color: {
			options: ['base', 'white', 'primary', 'secondary'],
			control: { type: 'radio' },
		},
		direction: {
			options: ['right', 'left', 'up', 'down'],
			control: { type: 'radio' },
		},
	},
};

const defaultArgs: RotatableIconProps = {
	size: 's',
	color: 'base',
	direction: 'right',
};

const createTemplate = (IconComponent: FC<RotatableIconProps>) => {
	const Template = (args: RotatableIconProps) => <IconComponent {...args} />;
	Template.args = { ...defaultArgs };
	return Template;
};

export const Arrow = createTemplate(ArrowIcon);
