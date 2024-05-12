import React, { FC } from 'react';
import { getSizeClass, getColorClass, IconProps } from './iconUtils';

export const RepostIcon: FC<IconProps> = ({ size, color }) => {
	const svgClasses = getSizeClass(size);
	const pathClasses = getColorClass(color);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={svgClasses}>
			<g clipPath="url(#clip0_413_274)">
				<path
					d="M14.4133 0.388957C14.3933 0.300829 14.3498 0.219763 14.2874 0.154379C14.2251 0.0889949 14.1461 0.0417372 14.059 0.017631C13.972 -0.00647525 13.88 -0.00652887 13.7928 0.0174758C13.7057 0.0414805 13.6267 0.0886461 13.5643 0.153957L12.0763 1.71296C10.7615 0.862644 9.21332 0.445536 7.64928 0.520217C6.08524 0.594897 4.58388 1.15761 3.35605 2.12933C2.12823 3.10105 1.23562 4.43297 0.80359 5.93801C0.371562 7.44305 0.421817 9.04561 0.947296 10.5206C1.47278 11.9956 2.44708 13.269 3.73338 14.1619C5.01967 15.0548 6.55334 15.5223 8.11899 15.4988C9.68463 15.4754 11.2036 14.9621 12.4626 14.0311C13.7215 13.1 14.6572 11.7981 15.1383 10.308C15.2047 10.0604 15.1735 9.79676 15.0512 9.57151C14.9289 9.34626 14.7247 9.17659 14.4809 9.09754C14.237 9.01849 13.9721 9.03609 13.7409 9.1467C13.5097 9.25732 13.3298 9.4525 13.2383 9.69196C12.8917 10.7746 12.2189 11.7236 11.3121 12.409C10.4053 13.0945 9.30879 13.4829 8.17269 13.521C7.0366 13.5591 5.9165 13.2451 4.96576 12.622C4.01503 11.9989 3.28016 11.0971 2.86177 10.0402C2.44339 8.98327 2.36195 7.82284 2.62861 6.71783C2.89527 5.61282 3.49699 4.61725 4.35138 3.86745C5.20576 3.11766 6.27103 2.6503 7.40131 2.52938C8.53159 2.40845 9.67162 2.63988 10.6653 3.19196L9.06529 4.87196C9.00304 4.93703 8.95953 5.01771 8.93934 5.10547C8.91916 5.19323 8.92305 5.28481 8.9506 5.37054C8.97815 5.45627 9.02835 5.53297 9.09588 5.59254C9.16342 5.65211 9.24578 5.69233 9.33429 5.70896L15.1583 6.79996C15.1886 6.80592 15.2194 6.80894 15.2503 6.80896C15.3254 6.80891 15.3996 6.79193 15.4673 6.75926C15.535 6.7266 15.5944 6.6791 15.6412 6.62029C15.688 6.56148 15.721 6.49288 15.7376 6.41959C15.7542 6.3463 15.7541 6.2702 15.7373 6.19696L14.4133 0.388957Z"
					className={pathClasses}
				/>
			</g>
			<defs>
				<clipPath id="clip0_413_274">
					<rect className={svgClasses} fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
