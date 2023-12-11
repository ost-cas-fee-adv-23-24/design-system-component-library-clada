import React, { FC, ReactElement, useState } from 'react';
import classnames from 'classnames';

export type ToggleProps = {
	label: string;
	isToggled: boolean;
	onClick: () => void;
	color: 'base' | 'primary' | 'secondary';
	useToggledColor?: boolean;
	icon: ReactElement;
	toggledIcon?: ReactElement;
	hoveredIcon?: ReactElement;
	disabled?: boolean;
};

export const Toggle: FC<ToggleProps> = ({
	label,
	isToggled,
	onClick,
	color,
	useToggledColor,
	icon,
	toggledIcon,
	hoveredIcon,
	disabled,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleToggle = () => {
		if (!disabled) {
			isToggled = !isToggled;
			setIsHovered(true);
			onClick();
		}
	};

	const baseClasses =
		'leading-none text-base-600 px-3 py-xs focus:outline-none flex items-center justify-center rounded-full cursor-pointer transition duration-300 ease-in-out transform';
	const colorClasses = {
		base:
			!isToggled && !disabled
				? 'hover:bg-base-50 hover:text-base-600'
				: `text-${useToggledColor ? color + '-900' : 'base-600'}`,
		primary:
			!isToggled && !disabled
				? 'hover:bg-primary-50 hover:text-primary-600'
				: `text-${useToggledColor ? color + '-900' : 'base-600'}`,
		secondary:
			!isToggled && !disabled
				? 'hover:bg-secondary-50 hover:text-secondary-600'
				: `text-${useToggledColor ? color + '-900' : 'base-600'}`,
	};

	const getLabelClasses = () => {
		return isToggled && !isHovered ? `ml-xs text-${useToggledColor ? color + '-900' : 'base-600'}` : 'ml-xs';
	};

	const renderIcon = () => {
		if (isToggled && toggledIcon) return toggledIcon;
		if (isHovered && hoveredIcon) return hoveredIcon;
		return icon;
	};

	return (
		<button
			onClick={handleToggle}
			onMouseOver={() => setIsHovered(!disabled && !isToggled)}
			onMouseOut={() => setIsHovered(false)}
			className={classnames(baseClasses, colorClasses[color], disabled ? 'cursor-default' : '')}>
			{renderIcon()}
			<span className={getLabelClasses()}>{label}</span>
		</button>
	);
};
