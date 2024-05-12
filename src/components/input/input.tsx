import React, { ChangeEvent, ComponentPropsWithRef, ComponentType, FC } from 'react';
import classnames from 'classnames';
import { CancelIcon } from '../icons';
import { IconProps } from '../icons/iconUtils';
import { Label } from '../label';

export interface InputProps extends ComponentPropsWithRef<'input'> {
	id: string;
	type: 'text' | 'mail' | 'password';
	label: string;
	name?: string;
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
	name,
	defaultValue,
}) => {
	const iconPosition = 'absolute right-s top-1/2 -translate-y-1/2';

	return (
		<div className={'flex flex-col gap-xxs'}>
			<Label size={'s'} color={'base'} htmlFor={id}>
				{label}
			</Label>
			<div className={'relative w-full'}>
				<input
					id={id}
					name={name}
					ref={ref}
					className={classnames(
						'mb-font-placeholder-m w-full bg-base-50 text-base-900 placeholder-base-500',
						'border rounded-s border-base-200 p-s outline-none ring-1 ring-base-200',
						'transition-all duration-300',
						'hover:border-base-300 hover:ring-2 hover:ring-base-300',
						'focus:ring-3 focus:border-primary-600 focus:ring-primary-600',
						{
							'border-error ring-error hover:border-error hover:ring-error focus:border-error focus:ring-error':
								error !== undefined,
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
			{/*{error && <span className={'ml-auto text-error mb-font-label-m'}>{error}</span>}*/}
			{error && (
				<div className="ml-auto">
					<Label size="s" color="error" as="span">
						{error}
					</Label>
				</div>
			)}
		</div>
	);
};
