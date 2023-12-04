import React from 'react';
import { Toggle } from '../toggle/toggle';
import { ReplyIcon } from '../icons';

interface CommentButtonProps {
	count: number;
	hasCommented: boolean;
	onClick: () => void; // This should be updated in the parent component to handle state changes
}

const getCommentText = (count: number) => (count > 1 ? `${count} Comments` : `${count ? count + ' ' : ''}Comment`);

export const CommentButton: React.FC<CommentButtonProps> = ({ count, hasCommented, onClick }) => {
	const label = getCommentText(count);

	const handleCommentClick = () => {
		if (!hasCommented) {
			onClick(); // This should update the count and hasCommented state in the parent component
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
