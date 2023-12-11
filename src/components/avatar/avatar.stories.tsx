import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar, { AvatarProps } from './avatar';
import AvatarEdit from './avatar-edit';

const meta: Meta<typeof Avatar | typeof AvatarEdit> = {
	title: 'Components/Avatar',
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `

## Overview
This section covers two components: the Avatar and the AvatarEdit. The Avatar component is used for displaying user images with various customization options, while the AvatarEdit component extends the Avatar's functionality by adding an editable feature.

## Avatar Component
- **Size Variability**: Available in small, medium, large, and extra-large sizes.
- **Border Customization**: Optional settings include border removal and color changes.
- **Hover Effect**: An optional effect to change the border-radius on hover.
- **Click Event**: Supports an onClick event handler for user interaction.
- **Props**:
  - \`size\`: 's' | 'm' | 'l' | 'xl'
  - \`imageUrl\` (optional): String
  - \`noBorder\` (optional): Boolean
  - \`borderColor\` (optional): 'white' | 'base'
  - \`onClick\` (optional): Function
  - \`hoverEffect\` (optional): Boolean

## AvatarEdit Component
- Extends the Avatar component by adding an edit button.
- **Edit Button**: Allows users to interact with the avatar, typically for editing purposes.
- **Props**:
  - Inherits all props from Avatar except for size, noBorder, borderColor, hoverEffect.
  - \`editOnClick\`: Function - Callback for the edit button click event.

## Usage
- The Avatar component is versatile for various user interfaces where user identity representation is required, such as in comments, profiles, or posts.
- The AvatarEdit component is particularly useful in scenarios where user avatars are interactive and require edit capabilities.

`,
			},
		},
	},
};

export default meta;

type AvatarStory = StoryObj<AvatarProps>;
type AvatarEditProps = Parameters<typeof AvatarEdit>[0]; // Extract props type for AvatarEdit
type AvatarEditStory = StoryObj<AvatarEditProps>;

const ImageComponent = ({ className }) => (
	<img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" alt="User Avatar" className={className} />
);

const AvatarTemplate: AvatarStory['render'] = (args) => <Avatar {...args} />;

const AvatarEditTemplate: AvatarEditStory['render'] = (args) => <AvatarEdit {...args} />;

export const Small: AvatarStory = {
	render: AvatarTemplate,
	args: {
		size: 's',
		noBorder: true,
		ImageComponent: ImageComponent,
		onClick: () => console.log('Avatar clicked'),
	},
};

export const Medium: AvatarStory = {
	render: AvatarTemplate,
	args: {
		size: 'm',
		onClick: () => console.log('Avatar clicked'),
	},
};

export const Large: AvatarStory = {
	render: AvatarTemplate,
	args: {
		size: 'l',
		ImageComponent: ImageComponent,
		onClick: () => console.log('Avatar clicked'),
		hoverEffect: 'all',
	},
};

export const ExtraLarge: AvatarStory = {
	render: AvatarTemplate,
	args: {
		size: 'xl',
		ImageComponent: ImageComponent,
		onClick: () => console.log('Avatar clicked'),
		borderColor: 'white',
		hoverEffect: 'none',
	},
};

export const Editable: AvatarEditStory = {
	render: AvatarEditTemplate,
	args: {
		hoverEffect: 'none',
		onClick: () => console.log('Avatar clicked'),
		editOnClick: () => console.log('Edit clicked'),
	},
};
