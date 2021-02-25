import React, { FC } from 'react';
import { TitleContainer } from './styles';
import { TitleProps } from './interface';

const Title: FC<TitleProps> = ({ children, size }) => {
  return <TitleContainer size={size}>{children}</TitleContainer>;
};

export default Title;
