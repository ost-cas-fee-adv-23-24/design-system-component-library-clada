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

const FullscreenIcon = ({ size, color }) => {
  const svgClasses = getSizeClass(size);
  const pathClasses = getColorClass(color);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={svgClasses}>
      <g clipPath="url(#clip0_447_528)">
        <path
          d="M15.0006 0H10.0006C9.73535 0 9.481 0.105357 9.29346 0.292893C9.10593 0.48043 9.00057 0.734784 9.00057 1C9.00057 1.26522 9.10593 1.51957 9.29346 1.70711C9.481 1.89464 9.73535 2 10.0006 2H12.5866L9.29357 5.293C9.19806 5.38525 9.12188 5.49559 9.06947 5.6176C9.01706 5.7396 8.98947 5.87082 8.98832 6.0036C8.98717 6.13638 9.01247 6.26806 9.06275 6.39095C9.11303 6.51385 9.18728 6.6255 9.28118 6.7194C9.37507 6.81329 9.48672 6.88754 9.60962 6.93782C9.73251 6.9881 9.86419 7.0134 9.99697 7.01225C10.1298 7.0111 10.261 6.98351 10.383 6.9311C10.505 6.87869 10.6153 6.80251 10.7076 6.707L14.0006 3.414V6C14.0006 6.26522 14.1059 6.51957 14.2935 6.70711C14.481 6.89464 14.7354 7 15.0006 7C15.2658 7 15.5201 6.89464 15.7077 6.70711C15.8952 6.51957 16.0006 6.26522 16.0006 6V1C16.0006 0.734784 15.8952 0.48043 15.7077 0.292893C15.5201 0.105357 15.2658 0 15.0006 0V0Z"
          className={pathClasses}
        />
        <path
          d="M6.707 9.293C6.51947 9.10553 6.26516 9.00021 6 9.00021C5.73484 9.00021 5.48053 9.10553 5.293 9.293L2 12.586V10C2 9.73478 1.89464 9.48043 1.70711 9.29289C1.51957 9.10536 1.26522 9 1 9C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10L0 15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16H6C6.26522 16 6.51957 15.8946 6.70711 15.7071C6.89464 15.5196 7 15.2652 7 15C7 14.7348 6.89464 14.4804 6.70711 14.2929C6.51957 14.1054 6.26522 14 6 14H3.414L6.707 10.707C6.89447 10.5195 6.99979 10.2652 6.99979 10C6.99979 9.73484 6.89447 9.48053 6.707 9.293Z"
          className={pathClasses}
        />
      </g>
      <defs>
        <clipPath id="clip0_447_528">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FullscreenIcon;
