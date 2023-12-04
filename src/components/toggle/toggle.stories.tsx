import React from 'react';
import { Toggle } from './toggle';
import { HeartIcon } from '../icons/heart';

const meta = {
	title: 'Components/Toggle',
	component: Toggle,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
## Overview
The Toggle component is a versatile and customizable UI control, ideal for implementing interactive toggle functionality in any application. It exhibits distinct visual states to enhance user interaction and experience.

## Features
- **Styling Based on State**: The component provides specialized styling for three distinct states: default, hover, and active.
- **Icon Customization**: You can define specific icons for each state — a default icon, a hovered icon, and an active icon.
- **Active State Color Customization**: Optionally, a special color for the active state can be defined, adding an extra layer of visual feedback.
- **Accessibility and Interaction**: The component is designed with accessibility in mind, ensuring focus, hover, and active states are clearly distinguishable.

## Props
- \`label\`: A text label for the toggle button.
- \`isToggled\`: A boolean representing the current state of the toggle (toggled/untoggled).
- \`onClick\`: A callback function triggered on click events.
- \`color\`: Defines the base color theme. Options are 'base', 'primary', and 'secondary'.
- \`useToggledColor\`: A boolean to determine if the toggle should use a darker color shade to display the label when active.
- \`icon\`: The default icon displayed.
- \`toggledIcon\`: The icon displayed when the toggle is in an active state.
- \`hoveredIcon\`: The icon displayed when the toggle is being hovered over.
- \`disabled\`: A boolean to disable the toggle functionality.

## Usage
To use the Toggle component, provide the necessary props according to your requirement. The component's state management and icon swapping are handled internally, offering a seamless integration into your UI.
        `,
			},
		},
	},
};

export default meta;

export const Like = {
	args: {
		label: 'Like',
		isToggled: false,
		icon: <HeartIcon size="s" color="base" />,
		hoveredIcon: <HeartIcon size="s" color="secondary" />,
		toggledIcon: <HeartIcon size="s" color="secondary" filled={true} />,
		color: 'secondary',
		useToggledColor: true,
		onClick: () => console.log('Like Button Toggle clicked'),
	},
};
