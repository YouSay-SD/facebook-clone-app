import React, { FC } from 'react';
import { ContainerStyled } from './styles';
import { ContainerProps } from './interface';

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>;
};

export default Container;
