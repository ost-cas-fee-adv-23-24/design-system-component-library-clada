import React, { forwardRef, useState } from 'react';
import { EyeIcon } from '../icons';
import { Input, InputProps } from './input';

// For the Password input we do not need all properties.
// Therefor we create this interface and only expose the needed properties
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputPasswordProps extends Omit<InputProps, 'Icon' | 'type' | 'onIconClick'> {}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(({ ...rest }, ref) => {
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
