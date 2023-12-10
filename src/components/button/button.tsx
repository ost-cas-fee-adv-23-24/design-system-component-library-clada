import React, { ComponentType, FC } from 'react';
import classnames from 'classnames';
import { IconProps } from '../icons/iconUtils';

export interface ButtonProps {
	label?: string;
	onClick: () => void;
	color: 'base' | 'primary' | 'secondary';
	noBorder?: boolean;
	size: 'm' | 'l';
	Icon?: ComponentType<IconProps>;
	noLabel?: boolean;
}

export const Button: FC<ButtonProps> = ({ label, onClick, color, noBorder = false, size, Icon, noLabel }) => {
	const baseClasses = `leading-none text-base transition-all duration-300 hover:ring active:ring-4 focus:outline-none flex items-center justify-center`;
	const sizeClasses = size === 'l' || noLabel ? 'px-m py-s' : 'p-3';
	const colorClasses = {
		base: 'bg-base-600 hover:bg-base-700 active:bg-base-700 text-white hover:ring-base-100 active:ring-base-200',
		primary:
			'bg-primary-600 hover:bg-primary-700 active:bg-primary-700 text-white hover:ring-primary-100 active:ring-primary-200',
		secondary:
			'mb-bg-gradient hover:mb-bg-gradient-hover active:mb-bg-gradient-active text-white hover:ring-primary-100 active:ring-primary-200',
	};
	const noBorderOverride = 'hover:ring-white active:ring-white';
	return (
		<button
			onClick={onClick}
			className={classnames(
				baseClasses,
				sizeClasses,
				colorClasses[color],
				noBorder ? noBorderOverride : '',
				noLabel ? 'rounded-full px-s' : 'w-full rounded-s',
			)}>
			{!noLabel && <span className={Icon ? (size === 'l' ? 'mr-3' : 'mr-xs') : ''}>{label}</span>}
			{Icon && <Icon size="s" color="white" />}
		</button>
	);
};
