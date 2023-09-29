import React, { FC } from 'react';

export interface ButtonProps {
    id: string
}

export const Button: FC<ButtonProps> = ({ id }) => {
    return (<button id={id} className="text-blue-800">Hello World!</button>)
}