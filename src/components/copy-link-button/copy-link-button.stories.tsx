import { Meta } from '@storybook/react';
import CopyLinkButton from './copy-link-button';

const meta: Meta<typeof CopyLinkButton> = {
	title: 'Components/CopyLinkButton',
	component: CopyLinkButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `

## Overview
The CopyLinkButton is a user-friendly UI component designed for copying links to the clipboard.

## Features
- **User Interaction**: Provides visual feedback to users upon interaction, enhancing the user experience.
- **Simple and Intuitive**: Designed to be straightforward and easy to use, making the action of copying links as seamless as possible.

## Props
- \`onClick\`: A callback function that is triggered when the button is clicked.

## Usage
The CopyLinkButton is ideal for use in scenarios where users need to copy URLs or links. Its straightforward design makes it suitable for a wide range of applications, from social media platforms to content sharing sites.

`,
			},
		},
	},
};

export default meta;

export const CopyLink = {
	args: {
		labels: {
			default: 'Copy Link',
			active: 'Link copied',
		},
		onClick: () => console.log('copy link button clicked'),
	},
};
