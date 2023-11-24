import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';

export interface ButtonProps {
	label: string;
	onClick: () => void;
	color: 'slate' | 'violet' | 'gradient';
	size: 'M' | 'L';
	icon?: ReactNode;
	disabled?: boolean;
	className?: string;
}

/**
 * Button component for user interactions
 */
export const Button: FC<ButtonProps> = ({ label, onClick, color, size, icon, disabled = false, className }) => {
	const baseClasses =
		'leading-none box-content w-buttonWidth text-base rounded-s duration-300 focus:outline-none flex items-center justify-center';
	const sizeClasses = size === 'M' ? ' p-3' : 'px-m py-s';
	const colorClasses = {
		slate:
			'bg-base-600 hover:bg-base-700 active:bg-base-700 text-white hover:mb-border-shadow-hover-base active:mb-border-shadow-active-base',
		violet:
			'bg-primary-600 hover:bg-primary-700 active:bg-primary-700 hover:mb-border-shadow-hover-primary active:mb-border-shadow-active-primary text-white',
		gradient2:
			'bg-gradient-to-r from-secondary-600 to-primary-600 hover:bg-gradient-hover active:bg-gradient-active hover:mb-border-shadow-hover-primary active:mb-border-shadow-active-primary text-white',
		gradient:
			'mb-bg-gradient hover:mb-bg-gradient-hover active:mb-bg-gradient-active hover:mb-border-shadow-hover-primary active:mb-border-shadow-active-primary text-white',
	};

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			aria-disabled={disabled}
			className={classnames(
				baseClasses,
				sizeClasses,
				colorClasses[color],
				{ 'cursor-not-allowed opacity-50': disabled },
				className,
			)}>
			{label}
			{icon && <span className={size === 'M' ? ' ml-xs' : 'ml-3'}>{icon}</span>}
		</button>
	);
};
