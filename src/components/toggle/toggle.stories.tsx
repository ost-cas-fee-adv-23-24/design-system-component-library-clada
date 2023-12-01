import React from 'react';
import { Toggle } from './toggle';
import { HeartIcon } from '../icons/heart';
import { ReplyIcon } from '../icons/reply';
import { ShareIcon } from '../icons/share';

const meta = {
	title: 'Components/Toggle',
	component: Toggle,
};

export default meta;

export const LikeButton = {
	args: {
		label: 'Like',
		icon: <HeartIcon size="s" color="base" />,
		hoveredIcon: <HeartIcon size="s" color="secondary" />,
		toggledIcon: <HeartIcon size="s" color="secondary" filled={true} />,
		color: 'secondary',
		useToggledColor: true,
		onClick: () => console.log('Like Button clicked'),
	},
};

export const CommentCounter = {
	args: {
		label: 'Comment',
		icon: <ReplyIcon size="s" color="base" />,
		hoveredIcon: <ReplyIcon size="s" color="primary" />,
		toggledIcon: <ReplyIcon size="s" color="primary" filled={true} />,
		color: 'primary',
		onClick: () => console.log('Comment Counter clicked'),
	},
};

export const CopyLink = {
	args: {
		label: 'Copy Link',
		icon: <ShareIcon size="s" color="base" />,
		color: 'base',
		onClick: () => console.log('Copy Link clicked'),
	},
};
