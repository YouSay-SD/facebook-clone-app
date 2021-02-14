import React, { FC } from 'react';
import { InputStyled } from './styles';
import { InputProps } from './interface';

const Input: FC<InputProps> = ({ ...props }) => {
  return <InputStyled {...props} />;
};

export default Input;
