import React, { ComponentType, FC, LinkHTMLAttributes } from 'react';
import classnames from 'classnames';
import { IconProps } from '../icons/iconUtils';

export type IconButton<T> = {
	href: string;
	children: string;
	variant?: 'primary' | 'base';
	linkComponent?: FC<T>;
	Icon: ComponentType<IconProps>;
} & Omit<T, 'className' | 'target' | 'rel'>;

export const IconButton = <
	T extends {
		className?: string;
		rel?: string;
		target?: string;
	} = LinkHTMLAttributes<HTMLElement>,
>({
	children,
	linkComponent,
	variant = 'primary',
	Icon,
	...props
}: IconButton<T>) => {
	const LinkComponent: FC<T> | 'a' = linkComponent || 'a';
	const colorClasses = classnames({
		'text-primary-600 hover:text-primary-900': variant === 'primary',
		'text-base-600 hover:text-base-900 hover:fill-error': variant === 'base',
	});

	return (
		<LinkComponent
			/* explicitly set props to any instead of writing the whole statement for the sake of simplicity:
			 * IntrinsicAttributes & T & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>
			 * It should have no effect on typings for the user and therefor we consider it as best to keep the code simple.
			 */
			/* eslint-disable-next-line */
			{...(props as any)}
			className={classnames(' flex items-center gap-xxs transition-colors duration-300 mb-font-label-s', colorClasses)}>
			{<Icon size={'s'} color={'inherit'} />}
			<span>{children}</span>
		</LinkComponent>
	);
};
