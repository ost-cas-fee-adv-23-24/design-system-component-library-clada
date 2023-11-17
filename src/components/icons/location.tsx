import React, { FC } from 'react';
import { getSizeClass, getColorClass, IconProps } from './iconUtils';

export const LocationIcon: FC<IconProps> = ({ size, color }) => {
	const svgClasses = getSizeClass(size);
	const pathClasses = getColorClass(color);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={svgClasses}>
			<g clipPath="url(#clip0_478_1451)">
				<path
					d="M8 0C4.1 0 1 3.1 1 7C1 8.9 1.7 10.7 3.1 12C3.2 12.1 7.2 15.7 7.3 15.8C7.7 16.1 8.3 16.1 8.6 15.8C8.7 15.7 12.8 12.1 12.8 12C14.2 10.7 14.9 8.9 14.9 7C15 3.1 11.9 0 8 0ZM8 9C6.9 9 6 8.1 6 7C6 5.9 6.9 5 8 5C9.1 5 10 5.9 10 7C10 8.1 9.1 9 8 9Z"
					className={pathClasses}
				/>
			</g>
			<defs>
				<clipPath id="clip0_478_1451">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default LocationIcon;
