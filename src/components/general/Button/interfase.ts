import React from 'react';

export interface ButtonProps {
  type?: string;
  fontWeight?: number;
  fontSize?: number;
  width?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  circle?: boolean;
}
