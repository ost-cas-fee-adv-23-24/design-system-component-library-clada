import React, { FC, ReactElement, useState } from 'react';
import classnames from 'classnames';

export interface ToggleProps {
	label: string;
	onClick: () => void;
	color: 'base' | 'primary' | 'secondary';
	useToggledColor?: boolean;
	icon: ReactElement;
	toggledIcon?: ReactElement;
	hoveredIcon?: ReactElement;
	disabled?: boolean;
}

export const Toggle: FC<ToggleProps> = ({
	label,
	onClick,
	color,
	useToggledColor,
	icon,
	toggledIcon,
	hoveredIcon,
	disabled,
}) => {
	const [isToggled, setIsToggled] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleToggle = () => {
		if (!disabled) {
			setIsToggled(!isToggled);
			setIsHovered(true);
			onClick();
		}
	};

	const baseClasses =
		'leading-none px-3 py-xs focus:outline-none flex items-center justify-center rounded-full cursor-pointer transition duration-300 ease-in-out transform';
	const colorClasses = {
		base:
			!isToggled && !disabled
				? 'hover:bg-base-50 hover:text-base-600'
				: `ml-xs text-${useToggledColor ? color + '-900' : 'base-600'}`,
		primary:
			!isToggled && !disabled
				? 'hover:bg-primary-50 hover:text-primary-600'
				: `ml-xs text-${useToggledColor ? color + '-900' : 'base-600'}`,
		secondary:
			!isToggled && !disabled
				? 'hover:bg-secondary-50 hover:text-secondary-600'
				: `text-${useToggledColor ? color + '-900' : 'base-600'}`,
	};

	const getLabelClasses = () => {
		return isToggled && !isHovered ? `ml-xs text-${useToggledColor ? color + '-900' : 'base-600'}` : 'ml-xs';
	};

	const renderIcon = () => {
		console.log(isHovered);
		if (isToggled && toggledIcon) return toggledIcon;
		if (isHovered && hoveredIcon) return hoveredIcon;
		return icon;
	};

	return (
		<button
			onClick={handleToggle}
			onMouseOver={() => setIsHovered(!disabled && !isToggled)}
			onMouseOut={() => setIsHovered(false)}
			className={classnames(baseClasses, colorClasses[color])}>
			{renderIcon()}
			<span className={getLabelClasses()}>{label}</span>
		</button>
	);
};
