import React from 'react';
import { Toggle } from '../toggle/toggle';
import { ReplyIcon } from '../icons';

export type CommentButtonProps = {
	count: number;
	hasCommented: boolean;
	labels: {
		zero: string;
		singular: string;
		plural: string;
	};
	onClick: () => void; // This should update the count and hasCommented state in the parent component
	testid?: string;
};

const getCommentText = (count: number, labels: { zero: string; singular: string; plural: string }) => {
	if (count === 0) {
		return labels.zero;
	} else if (count === 1) {
		return `${count} ${labels.singular}`;
	} else {
		return `${count} ${labels.plural}`;
	}
};

export const CommentButton: React.FC<CommentButtonProps> = ({ count, hasCommented, labels, onClick, testid }) => {
	const label = getCommentText(count, labels);

	const handleCommentClick = () => {
		onClick();
	};

	return (
		<Toggle
			label={label}
			isToggled={hasCommented}
			onClick={handleCommentClick}
			color="primary"
			useToggledColor={false}
			icon={<ReplyIcon size="s" color="base" />}
			hoveredIcon={<ReplyIcon size="s" color="primary" />}
			toggledIcon={<ReplyIcon size="s" color="primary" filled={true} />}
			testid={testid}
		/>
	);
};
