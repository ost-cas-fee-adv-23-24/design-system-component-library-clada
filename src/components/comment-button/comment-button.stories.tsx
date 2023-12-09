import { Meta } from '@storybook/react';
import CommentButton from './comment-button';

const meta: Meta<typeof CommentButton> = {
	title: 'Components/Buttons/CommentButton',
	component: CommentButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `

## Overview
The CommentButton is an interactive UI element that enables users to engage with content by commenting. It integrates a Toggle component for visual feedback and interaction.

## Features
- **Toggle Integration**: Uses the Toggle component to provide visual feedback indicating whether a user has commented.
- **Comment Counter**: Optionally displays the total number of comments.
- **Disabled State**: Becomes disabled after the user has commented, preventing multiple submissions.

## Props
- \`count\`: A number representing the total count of comments.
- \`hasCommented\`: A boolean indicating whether the user has already commented.
- \`onClick\`: A callback function triggered when the button is clicked.

## Usage
The CommentButton is ideal for use in scenarios where user interaction through comments is encouraged, such as social media platforms, forums, or discussion threads. It allows users to indicate their engagement and see the overall engagement of others.

`,
			},
		},
	},
};

export default meta;

export const DefaultCommentButton = {
	args: {
		count: 0,
		hasCommented: false,
		onClick: () => console.log('comment button clicked'),
	},
};

export const CommentButtonWithInitialComments = {
	args: {
		count: 5,
		hasCommented: true,
		onClick: () => console.log('comment button clicked'),
	},
};
