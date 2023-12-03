export const getSizeClass = (size: 's' | 'm' | 'l') => {
	switch (size) {
		case 's':
			return 'w-s h-s';
		case 'm':
			return 'w-m h-m';
		case 'l':
			return 'w-l h-l';
		default:
			return 'w-s h-s';
	}
};

export const getColorClass = (color: 'base' | 'white' | 'primary' | 'secondary' | 'error' | 'inherit') => {
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
		case 'inherit':
			return 'fill-current';
		default:
			return 'fill-slate-600';
	}
};

export interface IconProps {
	size: 's' | 'm' | 'l';
	color: 'base' | 'white' | 'primary' | 'secondary' | 'error' | 'inherit';
}

export interface FillableIconProps extends IconProps {
	filled: true | false;
}

export interface RotatableIconProps extends IconProps {
	direction: 'up' | 'down' | 'left' | 'right';
}
