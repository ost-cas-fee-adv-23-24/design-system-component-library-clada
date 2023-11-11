export const getSizeClass = (size) => {
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

export const getColorClass = (color) => {
	switch (color) {
		case 'slate':
			return 'fill-slate-600'; // Small size
		case 'white':
			return 'fill-white'; // Medium size
		default:
			return 'fill-slate-600'; // Default size
	}
};