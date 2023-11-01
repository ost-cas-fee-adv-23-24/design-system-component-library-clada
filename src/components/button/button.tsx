import React, { FC } from 'react';

export interface ButtonProps {
    id: string
}

export const Button: FC<ButtonProps> = ({ id }) => {
    return (<button id={id} className="bg-primary-600 text-white">Hello World!</button>)
}