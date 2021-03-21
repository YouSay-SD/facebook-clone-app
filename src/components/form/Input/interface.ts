import React from 'react';

export interface InputProps {
  id?: any;
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  innerRef?: any;
  width?: number;
  widthMobile?: number;
  autoComplete?: string;
  border?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
