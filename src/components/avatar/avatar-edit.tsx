import React from 'react';
import Avatar, { AvatarProps } from './avatar'; // Adjust the import path as needed
import { Button } from '../button/button';
import { EditIcon } from '../icons';

type AvatarEditProps = {
	editOnClick: () => void;
} & Omit<AvatarProps, 'size' | 'borderColor' | 'hoeverEffect'>;

export const AvatarEdit: React.FC<AvatarEditProps> = ({ editOnClick, imageUrl, altText, onClick }) => {
	return (
		<div className="border-0 relative h-40 w-40 rounded-full">
			<Avatar
				size="xl"
				imageUrl={imageUrl}
				borderColor="white"
				hoverEffect="none"
				altText={altText}
				onClick={onClick}
			/>
			<div className="absolute bottom-0 right-0">
				<Button
					color="base"
					size="m"
					noLabel={true}
					noBorder={true}
					onClick={editOnClick}
					aria-label="Edit Avatar"
					Icon={EditIcon}></Button>
			</div>
		</div>
	);
};

export default AvatarEdit;
