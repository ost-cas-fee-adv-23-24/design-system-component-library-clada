import React, { FC, LinkHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

export type LinkProps<T> = {
	href: string;
	children: ReactNode;
	openInNewTab?: boolean;
	linkComponent?: FC<T>;
} & Omit<T, 'className' | 'target' | 'rel'>;

export const Link = <
	T extends {
		className?: string;
		rel?: string;
		target?: string;
	} = LinkHTMLAttributes<HTMLElement>,
>({
	children,
	linkComponent,
	openInNewTab = false,
	...props
}: LinkProps<T>) => {
	const LinkComponent: FC<T> | 'a' = linkComponent || 'a';

	return (
		<LinkComponent
			/* explicitly set props to any instead of writing the whole statement for the sake of simplicity:
			 * IntrinsicAttributes & T & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>
			 * It should have no effect on typings for the user and therefor we consider it as best to keep the code simple.
			 */
			/* eslint-disable-next-line */
			{...(props as any)}
			className={classnames(
				'text-primary-600 mb-font-label-s',
				'transition-decoration underline underline-offset-[2px] duration-300',
				' hover:decoration-primary-200',
			)}
			{...(openInNewTab ? { target: '_blank', rel: 'noreferrer' } : {})}>
			{children}
		</LinkComponent>
	);
};
