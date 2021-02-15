import React, { FC } from 'react';
import { ButtonStyled } from './styles';

const Button: FC = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
