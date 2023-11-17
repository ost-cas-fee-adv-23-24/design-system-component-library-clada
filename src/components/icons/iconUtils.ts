export const getSizeClass = (size: 's' | 'm' | 'l') => {
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

export const getColorClass = (color: 'base' | 'white' | 'primary' | 'secondary' | 'error') => {
	switch (color) {
		case 'base':
			return 'fill-base-600';
		case 'secondary':
			return 'fill-secondary-600';
		case 'primary':
			return 'fill-primary-600';
		case 'white':
			return 'fill-white';
		case 'error':
			return 'fill-error';
		default:
			return 'fill-slate-600'; // Default
	}
};

export interface IconProps {
	size: 's' | 'm' | 'l';
	color: 'base' | 'white' | 'primary' | 'secondary' | 'error';
}

export interface FillableIconProps extends IconProps {
	filled: true | false;
}

export interface RotatableIconProps extends IconProps {
	direction: 'up' | 'down' | 'left' | 'right';
}
