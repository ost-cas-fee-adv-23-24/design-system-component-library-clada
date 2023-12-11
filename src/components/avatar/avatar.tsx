import React, { ComponentProps, FC } from 'react';

type ImageProps = ComponentProps<'img'> & Omit<ComponentProps<'img'>, 'className'>;

export type AvatarProps = {
	size: 's' | 'm' | 'l' | 'xl';
	Image?: FC<ImageProps>;
	imageProps?: ImageProps;
	noBorder?: boolean;
	borderColor?: 'white' | 'base';
	onClick?: () => void;
	hoverEffect?: 'border' | 'zoom' | 'all' | 'none';
};
// defined sizeClasses outside the component, so it is created only once when the module is loaded.
const sizeClasses = {
	s: 'w-10 h-10',
	m: 'w-16 h-16',
	l: 'w-24 h-24',
	xl: 'w-40 h-40',
};

const placeholder =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcCAMAAAAshD+zAAAAQlBMVEV8Ou3///+9nPb38/6MUu/v5/3OtfjFqfeERu7ezvu2kPWld/Oda/GthPSca/Hm2vyVX/DWwvm9nfa+nPa+nfatg/TA3Iq2AAAEXElEQVR42uzazbKbMAwFYB38HxcDafv+r9rp3LtJBkZwwcLO6NufhYIiKyaklFJKKaWUUkoppZRSSimllFJKKaWUUuqnbPk7+DQ5g/+Mm5IfHiVS72IOyWCdSSH3W2EJEzhTKNSfEgz2cb6v+uanwRHOW+pESTguZerAmPAzbqTGjQ4APrK8knCOa3a22AXnNTpaHgZXMA9qjk24Smrt4T0MrmOaGiwx4FqhnaXTOlzNtdKaxeB6bqYWjKijhak5oJYnHdRRbfdX91Lbh1X3VttHVTfgzQdV90B9I91jhoRftFPre8kaY0ledJAxRRIXICXQHj0sXS0sYpZZlrv+2iVISsTo7oTb35gdN6V0Y3pIW0hKwT5dLioO+/Q4U0ZsMSFbojl7rOODt2/QDhuWSN+sB+Nw0JGEcde8/g0WH5R/dA7r/rBH4blgovoy1nl6s4DBBuUHZsI6S2+iAYMJyj86i3We/VF0PjhTZR7rMtvA54NPqsxh3cw+5PNBQ3UVbKAVYDBB8ZHiby0uUFUOGyx/9Xc+aKimAkgNFPm+DNgSmBY+HJTvywlbTORn3vngRPVEbFuYz/+aYKRq8oFLnAG848FMVfAL1ZPd7c8HA1WT9v5vKy5gsEHx5dmA4fNMZHMwYHBB+ZMu4n6WXvR9pccc4/1eou+8Senl/T5voFcd36LzP9w7fW8lfBZMuN9Er7p+RyB28WxwP0OVoAX0RYu7qrjhSq0V96+9O9BxFATCAPyPMAhKq929vv+rXi6bS3q5FSF1ENz5HqDkL1gUy9BnQ5lt+t7DGdpmcRxL2wyEMG1bKz19MIQstO1WaalmgZBA2yYcZ6BtAUIcbXM4ziO7nUrfKFca/gOEPOvMBZ4SJgiJlDDXWfqNEGIpYazzwO8hxVSZXbmglVrrDLHGAmKAmLHGuHRljdS51I2Xv7BphhhPKR8VVn495CzyXceUsEDQKN51A6WMEBRJuOssU0qEJCP8xTpKYYgaKSnKviRzEBUpib3otrUIWYaSRslxwRA2UNok+HLTQdhKO1a5j7aQFijNWKk9sAHiIu1gK5ONZsgL++lEsjEquNEeXiVqqtxQA9Ouqfx3somOy9toPPrCEkaNdBwQaB9H5LozNdNxQKQczh5ZeSqilgfl4I+MaJmVMB2qsYay8GSPiFZ5G/xEuRI1Ve/OUKYJNQXKxm7235UJfk12/o3XG9vgl8cw3y0AeLs+J8f0pcFBeeh/Lxua4n5GPRT4hepgj0L9VJ9gizNEqmFFsW5K9Uw4yydJ+4Vs3aUrytZZusJsXaUrztZRuvOz/Xsj1vdN13dWpuOZiDbY49MtrdRxvnYFbgA3Q0dpsPD9laveX/u8gkRZqyKPBrvtS2R6T2hlAvhpp7u8FS80H+2POVxuQL6ypQuTn20cvZArZuczYzed9iLmnD/XZbKrnxz4l4/Tf2c+PmOzk7VSSimllFJKKaWUUkoppZRSSimllFJKqTP9BiSAPrpV6Kh2AAAAAElFTkSuQmCC';

export const Avatar: FC<AvatarProps> = ({
	size,
	Image,
	noBorder = false,
	borderColor = 'base',
	onClick,
	hoverEffect = 'zoom',
	imageProps,
}) => {
	const handleOnClick = () => {
		if (onClick) onClick();
	};

	const useBorderEffect = hoverEffect === 'border' || hoverEffect === 'all';
	const useZoomEffect = hoverEffect === 'zoom' || hoverEffect === 'all';

	const borderClasses = noBorder ? 'border-0' : 'border-6';
	const colorClasses = borderColor === 'white' ? 'border-white' : 'border-base-100';
	const hoverBorderClasses = useBorderEffect ? 'hover:rounded-[40%]' : '';

	const imageClasses = `h-full w-full object-cover transition-all duration-300 ease-in-out ${
		useZoomEffect ? 'hover:scale-105' : ''
	}`;

	const Component: FC<ImageProps> | 'img' = Image ? Image : 'img';

	return (
		<figure
			className={`transition-border-radius cursor-pointer overflow-hidden rounded-full bg-primary-200 duration-100 ease-out ${borderClasses} ${colorClasses} ${sizeClasses[size]} ${hoverBorderClasses}`}
			onClick={handleOnClick}>
			<div className={imageClasses}>
				{imageProps ? (
					<Component {...imageProps} className={imageClasses} />
				) : (
					<img src={placeholder} alt="Avatar Placeholder"></img>
				)}
			</div>
		</figure>
	);
};
