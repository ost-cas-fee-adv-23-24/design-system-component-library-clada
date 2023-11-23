import React, { ChangeEvent, ComponentPropsWithRef, ComponentType, FC } from 'react';
import classnames from 'classnames';
import { CancelIcon } from '../icons';
import { IconProps } from '../icons/iconUtils';

export interface InputProps extends ComponentPropsWithRef<'input'> {
	id: string;
	type: 'text' | 'mail' | 'password';
	label: string;
	placeholder?: string;
	onChange?: (ev: ChangeEvent) => void;
	error?: string;
	Icon?: ComponentType<IconProps>;
	onIconClick?: () => void;
}

export const Input: FC<InputProps> = ({
	id,
	type,
	label,
	onChange,
	placeholder,
	error,
	Icon,
	onIconClick,
	ref,
	defaultValue,
}) => {
	const iconPosition = 'absolute right-s top-1/2 -translate-y-1/2';

	return (
		<div className={'flex flex-col gap-xs'}>
			<label htmlFor={id} className={'text-black mb-font-label-m'}>
				{label}
			</label>
			<div className={'relative w-full'}>
				<input
					id={id}
					ref={ref}
					className={classnames(
						'mb-font-placeholder-m w-full rounded-s border-1 border-base-200 bg-base-50 p-s outline-none duration-300 hover:border-primary-600 focus:border-3 focus:border-primary-600',
						{
							'border-3 border-error': error !== undefined,
						},
					)}
					type={type}
					defaultValue={defaultValue}
					placeholder={placeholder}
					onChange={onChange}
				/>
				{(error || Icon) && (
					<div
						className={classnames(iconPosition, {
							'cursor-pointer': onIconClick !== undefined,
						})}
						onClick={onIconClick}>
						{error ? <CancelIcon size="s" color="error" /> : Icon && <Icon size="s" color="base" />}
					</div>
				)}
			</div>
			{error && <span className={'ml-auto text-error mb-font-label-m'}>{error}</span>}
		</div>
	);
};
