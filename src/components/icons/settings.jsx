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
      return 'fill-slate-600'; // Default color (Slate)
  }
};

const SettingsIcon = ({ size, color }) => {
  const svgClasses = getSizeClass(size);
  const pathClasses = getColorClass(color);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={svgClasses}>
      <g clipPath="url(#clip0_447_761)">
        <path
          d="M15.135 6.784C13.832 6.458 13.214 4.966 13.905 3.815C14.227 3.279 14.13 2.817 13.811 2.499L13.501 2.189C13.183 1.871 12.721 1.774 12.185 2.095C11.033 2.786 9.541 2.168 9.216 0.865C9.065 0.258 8.669 0 8.219 0H7.781C7.331 0 6.936 0.258 6.784 0.865C6.458 2.168 4.966 2.786 3.815 2.095C3.279 1.773 2.816 1.87 2.498 2.188L2.188 2.498C1.87 2.816 1.773 3.279 2.095 3.815C2.786 4.967 2.168 6.459 0.865 6.784C0.26 6.935 0 7.33 0 7.781V8.219C0 8.669 0.258 9.064 0.865 9.216C2.168 9.542 2.786 11.034 2.095 12.185C1.773 12.721 1.87 13.183 2.189 13.501L2.499 13.811C2.818 14.13 3.281 14.226 3.815 13.905C4.967 13.214 6.459 13.832 6.784 15.135C6.935 15.742 7.331 16 7.781 16H8.219C8.669 16 9.064 15.742 9.216 15.135C9.542 13.832 11.034 13.214 12.185 13.905C12.72 14.226 13.182 14.13 13.501 13.811L13.811 13.501C14.129 13.183 14.226 12.721 13.905 12.185C13.214 11.033 13.832 9.541 15.135 9.216C15.742 9.065 16 8.669 16 8.219V7.781C16 7.33 15.74 6.935 15.135 6.784ZM8 11C6.343 11 5 9.657 5 8C5 6.343 6.343 5 8 5C9.657 5 11 6.343 11 8C11 9.657 9.657 11 8 11Z"
          className={svgClasses}
        />
      </g>
      <defs>
        <clipPath id="clip0_447_761">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SettingsIcon;
