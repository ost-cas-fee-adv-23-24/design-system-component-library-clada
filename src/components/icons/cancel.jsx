import React from 'react';

const getSizeClass = (size) => {
	switch (size) {
		case 's':
			return 'w-s h-s'; // Small size
		case 'm':
			return 'w-m h-m'; // Medium size
		case 'l':
			return 'w-l h-l'; // Large size
		default:
			return 'w-s h-s'; // Default size
	}
};

const getColorClass = (color) => {
	switch (color) {
		case 'slate':
			return 'fill-slate-600'; // Small size
		case 'white':
			return 'fill-white'; // Medium size
		default:
			return 'fill-slate-600'; // Default size
	}
};

const CancelIcon = ({ size, color }) => {
	const svgClasses = getSizeClass(size);
	const pathClasses = getColorClass(color);

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={svgClasses}>
			<path
				d="M12.5578 1.25777C12.3609 1.06089 12.0411 1.06277 11.8465 1.26196L8.00004 5.20004L4.15354 1.26196C3.95898 1.06277 3.63919 1.06089 3.4423 1.25777L1.25777 3.4423C1.06089 3.63919 1.06277 3.95898 1.26196 4.15354L5.20004 8.00004L1.26196 11.8465C1.06277 12.0411 1.06089 12.3609 1.25777 12.5578L3.4423 14.7423C3.63919 14.9392 3.95898 14.9373 4.15354 14.7381L8.00004 10.8L11.8465 14.7381C12.0411 14.9373 12.3609 14.9392 12.5578 14.7423L14.7423 12.5578C14.9392 12.3609 14.9373 12.0411 14.7381 11.8465L10.8 8.00004L14.7381 4.15354C14.9373 3.95898 14.9392 3.63919 14.7423 3.4423L12.5578 1.25777Z"
				className={pathClasses}
			/>
		</svg>
	);
};

export default CancelIcon;
