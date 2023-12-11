import React, { useState, useEffect } from 'react';
import { Toggle } from '../toggle/toggle';
import { ShareIcon } from '../icons';


export type CopyLinkProps = {
	labels: {
		default: string;
		active: string;
	};
	onClick: () => void;
};

let timer: NodeJS.Timeout;

export const CopyLinkButton: React.FC<CopyLinkProps> = ({ labels, onClick }) => {
	const [isCopied, setIsCopied] = useState(false);
	const [label, setLabel] = useState(labels.default);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		if (isCopied) {
			setDisabled(true);
			setLabel(labels.active);

			  timer = setTimeout(() => {
				setLabel(labels.default);

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
