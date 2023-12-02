import React, { useState, useEffect } from 'react';
import { Toggle } from '../toggle/toggle';
import { ShareIcon } from '../icons';

interface CopyLinkProps {
	onClick: () => void;
}

const CopyLinkButton: React.FC<CopyLinkProps> = ({ onClick }) => {
	const defaultLabel = 'Copy Link';
	const activeLabel = 'Link copied';

	const [isCopied, setIsCopied] = useState(false);
	const [label, setLabel] = useState(defaultLabel);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (isCopied) {
			setDisabled(true);
			setLabel(activeLabel);

			const timer = setTimeout(() => {
				setLabel(defaultLabel);
				setDisabled(false);
				setIsCopied(false);
			}, 1500);

			return () => {
				if (timer) {
					clearTimeout(timer);
				}
			};
		}
	}, [isCopied]);

	const handleCopyClick = () => {
		if (!disabled) {
			setIsCopied(true);
			onClick();
		}
	};

	return (
		<Toggle
			label={label}
			isToggled={isCopied}
			onClick={handleCopyClick}
			color="base"
			disabled={disabled}
			icon={<ShareIcon size="s" color="base" />}
		/>
	);
};

export default CopyLinkButton;
