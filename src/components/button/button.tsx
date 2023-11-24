import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';

export interface ButtonProps {
	label: string;
	onClick: () => void;
	color: 'base' | 'primary' | 'secondary';
	size: 'm' | 'l';
	icon?: ReactNode;
}

/**
 * 
 * The `Button` component is a versatile element in our design system, essential for user interaction and navigation.

  Our button design encapsulates several key features that make it an indispensable part of our user interfaces.

  The button supports multiple variants and sizes, ensuring versatility and adaptability across different UI contexts. Here are some key features:

  - **Colors**: 'base', 'primary', 'secondary' — each variant adjusts the button's styling to suit different purposes.
  - **Sizes**: 'm', 'l' — cater to various UI spaces and user interaction needs.
  - **Customizable**: Easily adaptable to different contexts while maintaining a consistent design language.
  - **Accessibility**: Designed with accessibility in mind, ensuring usability for all users.
 * 
 * 
 * 
 */
export const Button: FC<ButtonProps> = ({ label, onClick, color, size, icon }) => {
	const baseClasses =
		'leading-none box-content w-buttonWidth text-base rounded-s duration-300 focus:outline-none flex items-center justify-center';
	const sizeClasses = size === 'l' ? 'px-m py-s' : 'p-3';
	const colorClasses = {
		base: 'bg-base-600 hover:bg-base-700 active:bg-base-700 text-white hover:mb-border-shadow-hover-base active:mb-border-shadow-active-base',
		primary:
			'bg-primary-600 hover:bg-primary-700 active:bg-primary-700 hover:mb-border-shadow-hover-primary active:mb-border-shadow-active-primary text-white',
		secondary:
			'mb-bg-gradient hover:mb-bg-gradient-hover active:mb-bg-gradient-active hover:mb-border-shadow-hover-primary active:mb-border-shadow-active-primary text-white',
	};

	return (
		<button onClick={onClick} className={classnames(baseClasses, sizeClasses, colorClasses[color])}>
			{label}
			{icon && <span className={size === 'l' ? 'ml-3' : ' ml-xs'}>{icon}</span>}
		</button>
	);
};
