import React, { ComponentProps, ElementType, FC } from 'react';
import classnames from 'classnames';

interface LabelPropsDef extends ComponentProps<'label'> {
	children: string;
	size: 's' | 'm' | 'l' | 'xl';
	color: 'base' | 'error';
	as?: ElementType;
}

export type LabelProps = Omit<LabelPropsDef, 'className'>;

export const Label: FC<LabelProps> = ({ children, size, color = 'base', as: Component = 'label', ...props }) => {
	return (
		<Component
			className={classnames(`text-inherit mb-font-label-${size}`, {
				'text-base-700': color === 'base',
				'text-error': color === 'error',
			})}
			{...props}>
			{children}
		</Component>
	);
};
