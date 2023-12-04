import React, { useState, useEffect } from 'react';
import { Toggle } from '../toggle/toggle';
import { HeartIcon } from '../icons';

interface LikeButtonProps {
	count: number;
	isAlreadyLiked: boolean;
	onClick: () => void;
}

const getLikesText = (count: number) => (count > 1 ? `${count} Likes` : `${count ? count + ' ' : ''}Like`);

export const LikeButton: React.FC<LikeButtonProps> = ({ count, isAlreadyLiked, onClick }) => {
	const [isLiked, setIsLiked] = useState(isAlreadyLiked);
	const [label, setLabel] = useState(getLikesText(count));
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (isLiked && !isAlreadyLiked) {
			setDisabled(true);
			setLabel('Liked');

			const timer = setTimeout(() => {
				setLabel(getLikesText(count));
				setDisabled(false);
			}, 1500);

			return () => {
				if (timer) {
					clearTimeout(timer);
				}
			};
		}
	}, [isLiked]);

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
