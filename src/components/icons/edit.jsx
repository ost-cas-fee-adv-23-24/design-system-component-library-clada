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
      return 'fill-slate-600'; // Slate color
    case 'white':
      return 'fill-white'; // White color
    default:
      return 'fill-slate-600'; // Default color
  }
};

const EditIcon = ({ size, color }) => {
  const svgClasses = getSizeClass(size);
  const pathClasses = getColorClass(color);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={color} className={svgClasses}>
      <g clip-path="url(#clip0_478_1401)">
        <path d="M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z" className={pathClasses} />
        <path d="M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z" className={pathClasses} />
      </g>
      <defs>
        <clipPath id="clip0_478_1401">
          <rect width="16" height="16" fill="none"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default EditIcon;
