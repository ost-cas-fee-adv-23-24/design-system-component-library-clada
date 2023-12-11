import React, { useState, useEffect } from 'react';
import { Toggle } from '../toggle/toggle';
import { HeartIcon } from '../icons';

interface LikeButtonProps {
	count: number;
	isAlreadyLiked: boolean;
	labels: {
		zero: string;
		transition: string;
		singular: string;
		plural: string;
	};
	onClick: () => void;
}

const getLikesText = (
	count: number,
	labels: { zero: string; transition: string; singular: string; plural: string },
) => {
	if (count === 0) {
		return labels.zero;
	} else if (count === -1) {
		return labels.transition;
	} else if (count === 1) {
		return `${count} ${labels.singular}`;
	} else {
		return `${count} ${labels.plural}`;
	}
};

let timer: NodeJS.Timeout;


export const LikeButton: React.FC<LikeButtonProps> = ({ count, isAlreadyLiked, labels, onClick }) => {
	const [isLiked, setIsLiked] = useState(isAlreadyLiked);
	const [label, setLabel] = useState(getLikesText(count, labels));
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (isLiked && !isAlreadyLiked) {
			setDisabled(true);
			setLabel(getLikesText(-1, labels));

			  timer = setTimeout(() => {
				setLabel(getLikesText(count, labels));
				setDisabled(false);
			}, 1500);

			return () => {
				if (timer) {
					clearTimeout(timer);
				}
			};
		}
	}, [isLiked]);

	useEffect(() => {
		setIsLiked(isAlreadyLiked);
		setLabel(getLikesText(count, labels));
	}, [count, isAlreadyLiked, labels]);

	const handleLikeClick = () => {
		if (!disabled) {
			setIsLiked(!isLiked);
			onClick();
		}
	};

	return (
		<Toggle
			label={label}
			isToggled={isLiked}
			onClick={handleLikeClick}
			color="secondary"
			useToggledColor={true}
			disabled={disabled}
			icon={<HeartIcon size="s" color="base" />}
			hoveredIcon={<HeartIcon size="s" color="secondary" />}
			toggledIcon={<HeartIcon size="s" color="secondary" filled={true} />}
		/>
	);
};

export default LikeButton;
