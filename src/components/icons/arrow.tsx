import React, { FC } from 'react';
import { getSizeClass, getColorClass, RotatableIconProps } from './iconUtils';

export const ArrowIcon: FC<RotatableIconProps> = ({ size, color, direction }) => {
	const svgClasses = `${getSizeClass(size)} ${getColorClass(color)}`;

	// Function to get Tailwind rotation class based on direction
	const getRotationClass = (direction?: 'up' | 'down' | 'left' | 'right') => {
		switch (direction) {
			case 'up':
				return '-rotate-90'; // Rotates 90 degrees counter-clockwise
			case 'down':
				return 'rotate-90'; // Rotates 90 degrees clockwise
			case 'left':
				return 'rotate-180'; // Rotates 180 degrees
			case 'right':
			default:
				return ''; // No rotation for the right direction
		}
	};

	const rotationClass = getRotationClass(direction);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={`${svgClasses} ${rotationClass}`}>
			<g clipPath="url(#clip0_426_303)">
				<path d="M10.625 3.21901C10.4779 3.10124 10.3005 3.02743 10.1133 3.00607C9.92609 2.98472 9.73665 3.0167 9.56682 3.09833C9.39698 3.17995 9.25367 3.3079 9.15338 3.46743C9.0531 3.62696 8.99993 3.81158 9 4.00001V7.00001H1C0.734784 7.00001 0.48043 7.10537 0.292893 7.2929C0.105357 7.48044 0 7.73479 0 8.00001C0 8.26523 0.105357 8.51958 0.292893 8.70712C0.48043 8.89465 0.734784 9.00001 1 9.00001H9V12C8.99993 12.1884 9.0531 12.3731 9.15338 12.5326C9.25367 12.6921 9.39698 12.8201 9.56682 12.9017C9.73665 12.9833 9.92609 13.0153 10.1133 12.9939C10.3005 12.9726 10.4779 12.8988 10.625 12.781L15.625 8.78101C15.7422 8.68733 15.8367 8.56849 15.9017 8.43329C15.9667 8.2981 16.0005 8.15002 16.0005 8.00001C16.0005 7.85 15.9667 7.70192 15.9017 7.56673C15.8367 7.43153 15.7422 7.31269 15.625 7.21901L10.625 3.21901Z" />
			</g>
			<defs>
				<clipPath id="clip0_426_303">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
