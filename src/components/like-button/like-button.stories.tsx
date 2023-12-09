import { Meta } from '@storybook/react';
import LikeButton from './like-button';

const meta: Meta<typeof LikeButton> = {
	title: 'Components/Buttons/LikeButton',
	component: LikeButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `


## Overview
The LikeButton is an interactive UI element that provides an engaging way for users to express their appreciation for content. It incorporates a Toggle component for its core functionality and extends it with unique features.

## Features
- **Toggle Integration**: Utilizes the Toggle component for the fundamental like/unlike mechanism and for styling.
- **Timing Function**: Features an internal timing function that displays an alternative label temporarily before settling on the final label.
- **Optional Counter**: Accepts an optional counter input to display the number of likes.

## Props
- \`count\`: An optional number representing the total count of likes.
- \`onClick\`: A callback function triggered when the button is clicked.

## Usage
The LikeButton can be used to display a like/unlike button with optional like counts. It is suitable for use in social media applications, comment sections, or any platform where user feedback is encouraged.

`,
			},
		},
	},
};

export default meta;

export const DefaultLikeButton = {
	args: {
		count: 0,
		isAlreadyLiked: false,
		onClick: () => console.log('like button clicked'),
	},
};

export const LikeButtonWithInitialLikes = {
	args: {
		count: 5,
		isAlreadyLiked: true,
		onClick: () => console.log('like button clicked'),
	},
};
