import React, { FC, forwardRef } from 'react';
import classnames from 'classnames';
import { Label } from '../label';

export type TextareaProps = {
	id: string;
	label?: string;
	value?: string;
	name: string;
	placeholder: string;
	error?: string;
};

export const Textarea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ id, label, name, placeholder, error }, ref) => {
		return (
			<div className="grid gap-xxs">
				{label && (
					<Label size={'s'} color={'base'} htmlFor={id}>
						{label}
					</Label>
				)}
				<textarea
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
					placeholder={placeholder}
					name={name}
					aria-label={label}
					aria-invalid={!!error}
				/>
				{error && <span className={'ml-auto text-error mb-font-label-m'}>{error}</span>}
			</div>
		);
	},
);
