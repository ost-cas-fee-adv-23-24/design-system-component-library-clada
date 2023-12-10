import React from 'react';

export type AvatarProps = {
	size: 's' | 'm' | 'l' | 'xl';
	imageUrl: string;
	altText: string;
	noBorder?: boolean;
	borderColor?: 'white' | 'base';
	onClick?: () => void;
	hoverEffect?: 'border' | 'zoom' | 'all' | 'none';
};
// defined sizeClasses outside the component, so it is created only once when the module is loaded.
const sizeClasses = {
	s: 'w-10 h-10',
	m: 'w-16 h-16',
	l: 'w-24 h-24',
	xl: 'w-40 h-40',
};

export const Avatar: React.FC<AvatarProps> = ({
	size,
	imageUrl,
	altText = 'User Avatar',
	noBorder = false,
	borderColor = 'base',
	onClick,
	hoverEffect = 'zoom',
}) => {
	const handleOnClick = () => {
		if (onClick) onClick();
	};

	const useBorderEffect = hoverEffect === 'border' || hoverEffect === 'all';
	const useZoomEffect = hoverEffect === 'zoom' || hoverEffect === 'all';

	const borderClasses = noBorder ? 'border-0' : 'border-6';
	const colorClasses = borderColor === 'white' ? 'border-white' : 'border-base-100';
	const hoverBorderClasses = useBorderEffect ? 'hover:rounded-[40%]' : '';

	const imageClasses = `h-full w-full object-cover transition-all duration-300 ease-in-out ${
		useZoomEffect ? 'hover:scale-105' : ''
	}`;

	return (
		<div
			className={`transition-border-radius cursor-pointer overflow-hidden rounded-full bg-primary-200 duration-100 ease-out ${borderClasses} ${colorClasses} ${sizeClasses[size]} ${hoverBorderClasses}`}
			onClick={handleOnClick}>
			{<img src={imageUrl} alt={altText} className={imageClasses} />}
		</div>
	);
};

export default Avatar;
