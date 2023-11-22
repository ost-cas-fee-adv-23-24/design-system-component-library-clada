import React, { forwardRef, useState } from 'react';
import { EyeIcon } from '../icons';
import { Input, InputProps } from './input';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IInputPasswordProps extends Omit<InputProps, 'Icon' | 'type' | 'onIconClick'> {}

// eslint-disable-next-line react/display-name
export const InputPassword = forwardRef<HTMLInputElement, IInputPasswordProps>(({ ...rest }, ref) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<Input
			ref={ref}
			Icon={EyeIcon}
			onIconClick={() => setShowPassword(!showPassword)}
			type={showPassword ? 'text' : 'password'}
			{...rest}
		/>
	);
});
