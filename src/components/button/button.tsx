import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';

export interface ButtonProps {
	label?: string;
	onClick: () => void;
	color: 'base' | 'primary' | 'secondary';
	size: 'm' | 'l';
	icon?: ReactNode;
	noLabel?: boolean; // new prop for no label
}

export const Button: FC<ButtonProps> = ({ label, onClick, color, size, icon, noLabel }) => {
	const baseClasses = 'leading-none text-base duration-300 focus:outline-none flex items-center justify-center';
	const sizeClasses = size === 'l' || noLabel ? 'px-m py-s' : 'p-3';
	const colorClasses = {
		base: 'bg-base-600 hover:bg-base-700 active:bg-base-700 text-white hover:mb-border-shadow-hover-base active:mb-border-shadow-active-base',
		primary:
			'bg-primary-600 hover:bg-primary-700 active:bg-primary-700 text-white hover:mb-border-shadow-hover-primary active:mb-border-shadow-active-primary',
		secondary:
			'mb-bg-gradient hover:mb-bg-gradient-hover active:mb-bg-gradient-active text-white hover:mb-border-shadow-hover-primary active:mb-border-shadow-active-primary',
	};
	return (
		<button
			onClick={onClick}
			className={classnames(
				baseClasses,
				sizeClasses,
				colorClasses[color],
				noLabel ? 'rounded-full px-s' : 'rounded-s',
			)}>
			{!noLabel && <span className={size === 'l' ? 'mr-3' : 'mr-xs'}>{label}</span>}
			{icon}
		</button>
	);
};
