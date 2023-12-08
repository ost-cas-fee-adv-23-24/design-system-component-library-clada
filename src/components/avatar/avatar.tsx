import React from 'react';

interface AvatarProps {
	size: 's' | 'm' | 'l' | 'xl';
	imageUrl: string;
	altText: string;
	noBorder?: boolean;
	borderColor?: 'white' | 'base';
	onClick?: () => void;
	hoverEffect?: boolean;
}

const sizeClasses = {
	s: 'w-10 h-10', // 40px
	m: 'w-16 h-16', // 64px
	l: 'w-24 h-24', // 96px
	xl: 'w-40 h-40', // 160px
};

export const Avatar: React.FC<AvatarProps> = ({
	size,
	imageUrl,
	altText = 'User Avatar',
	noBorder = false,
	borderColor = 'base',
	onClick,
	hoverEffect = false,
}) => {
	const handleOnClick = () => {
		if (onClick) onClick();
	};

	const borderClasses = noBorder ? 'border-0' : 'border-6';
	const colorClasses = borderColor === 'white' ? 'border-white' : 'border-base-100';
	const hoverBorderClasses = hoverEffect ? 'hover:rounded-[40%]' : '';

	return (
		<div
			className={`transition-border-radius cursor-pointer overflow-hidden rounded-full bg-primary-200 duration-100 ease-out ${borderClasses} ${colorClasses} ${sizeClasses[size]} ${hoverBorderClasses}`}
			onClick={handleOnClick}>
			{
				<img
					src={imageUrl}
					alt={altText}
					className={`h-full w-full object-cover transition-all duration-300 ease-in-out hover:scale-105`}
				/>
			}
		</div>
	);
};

export default Avatar;
