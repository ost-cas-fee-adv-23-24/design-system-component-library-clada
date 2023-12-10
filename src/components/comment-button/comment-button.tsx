import React from 'react';
import { Toggle } from '../toggle/toggle';
import { ReplyIcon } from '../icons';

interface CommentButtonProps {
	count: number;
	hasCommented: boolean;
	labels: {
		zero: string;
		singular: string;
		plural: string;
	};
	onClick: () => void;
}

const getCommentText = (count: number, labels: { zero: string; singular: string; plural: string }) => {
	if (count === 0) {
		return labels.zero;
	} else if (count === 1) {
		return `${count} ${labels.singular}`;
	} else {
		return `${count} ${labels.plural}`;
	}
};

export const CommentButton: React.FC<CommentButtonProps> = ({ count, hasCommented, labels, onClick }) => {
	const label = getCommentText(count, labels);

	const handleCommentClick = () => {
		if (!hasCommented) {
			onClick();
		}
	};

	return (
		<Toggle
			label={label}
			isToggled={hasCommented}
			onClick={handleCommentClick}
			color="primary"
			disabled={hasCommented}
			useToggledColor={false}
			icon={<ReplyIcon size="s" color="base" />}
			hoveredIcon={<ReplyIcon size="s" color="primary" />}
			toggledIcon={<ReplyIcon size="s" color="primary" filled={true} />}
		/>
	);
};

export default CommentButton;
