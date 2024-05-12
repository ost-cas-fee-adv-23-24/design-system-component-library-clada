import React, { useEffect, useState } from 'react';
import { Toggle } from '../toggle/toggle';
import { HeartIcon } from '../icons';

interface LikeButtonProps {
	count: number;
	isAlreadyLiked: boolean;
	isDisabled?: boolean;
	labels: {
		zero: string;
		transition: string;
		singular: string;
		plural: string;
	};
	onClick: () => void;
	testid?: string;
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

export const LikeButton: React.FC<LikeButtonProps> = ({
	count,
	isAlreadyLiked,
	isDisabled = false,
	labels,
	onClick,
	testid,
}) => {
	const [isLiked, setIsLiked] = useState(isAlreadyLiked);
	const [label, setLabel] = useState(getLikesText(count, labels));
	const [disabled, setDisabled] = useState(isDisabled);

	useEffect(() => {
		if (isLiked && !isAlreadyLiked) {
			setDisabled(true);
			setLabel(getLikesText(-1, labels));

			timer = setTimeout(() => {
				setLabel(getLikesText(count, labels));
				setDisabled(false);
				onClick();
			}, 1500);

			return () => {
				if (timer) {
					clearTimeout(timer);
				}
			};
		} else if (!isLiked && isAlreadyLiked) {
			onClick();
		}
	}, [isLiked]);

	useEffect(() => {
		setDisabled(isDisabled);
	}, [isDisabled]);

	useEffect(() => {
		setIsLiked(isAlreadyLiked);
		setLabel(getLikesText(count, labels));
	}, [count, isAlreadyLiked, labels]);

	const handleLikeClick = () => {
		if (!disabled) {
			setIsLiked(!isLiked);
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
			testid={testid}
		/>
	);
};
