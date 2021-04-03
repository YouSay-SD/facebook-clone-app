import React from 'react';

export interface TextareaProps {
  placeholder?: string;
  name: string;
  id?: string;
  ref?: any;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | any;
  defaultValue?: any;
  innerRef?: any;
  type?: string;
}
