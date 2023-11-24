import React, { FC, forwardRef } from 'react';
import classnames from 'classnames';

export type TextareaProps = {
	id: string;
	label?: string;
	value: string;
	name: string;
	placeholder: string;
	error?: string;
};

export const Textarea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ id, label, name, placeholder, error }, ref) => {
		return (
			<div className="grid gap-xxs">
				{label && (
					<label htmlFor={id} className={'text-black mb-font-label-m'}>
						{label}
					</label>
				)}
				<textarea
					ref={ref}
					className={classnames(
						'mb-font-placeholder-m w-full rounded-s border-1 border-base-200 bg-base-50 p-s outline-none ',
						'duration-300 hover:border-primary-600 focus:border-3 focus:border-primary-600',
						{
							'border-3 border-error': error !== undefined,
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
