import React, { FC } from 'react';
import { getSizeClass, getColorClass, FillableIconProps } from './iconUtils';

export const ReplyIcon: FC<FillableIconProps> = ({ size, color, filled }) => {
	const svgClasses = getSizeClass(size);
	const pathClasses = getColorClass(color);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={svgClasses}>
			{filled ? (
				<g clipPath="url(#clip0_413_277)">
					<path
						d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.4 14 8.8 14 9.1 13.9L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0Z"
						className={pathClasses}
					/>
				</g>
			) : (
				<g clipPath="url(#clip0_413_278)">
					<path
						d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.2 14 8.4 14 8.6 14L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0ZM12 10.8V13.1L8.9 12C8.9 12 8.2 12 8 12C4.7 12 2 9.8 2 7C2 4.2 4.7 2 8 2C11.3 2 14 4.2 14 7C14 9.2 12 10.8 12 10.8Z"
						className={pathClasses}
					/>
				</g>
			)}
			<defs>
				<clipPath id={filled ? 'clip0_413_277' : 'clip0_413_278'}>
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
