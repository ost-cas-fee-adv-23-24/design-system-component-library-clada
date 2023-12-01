import LikeButton from './like-button'; // Ensure correct path for LikeButton import

const meta = {
	title: 'Components/LikeButton',
	component: LikeButton,
};

export default meta;

export const DefaultLikeButton = {
	args: {
		count: 0,
		onClick: () => console.log('like button clicked'),
	},
};

export const LikeButtonWithInitialLikes = {
	args: {
		count: 5,
		onClick: () => console.log('like button clicked'),
	},
};
