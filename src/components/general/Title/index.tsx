import React, { FC } from 'react';
import { TitleContainer } from './styles';

const Title: FC = ({ children }) => {
  return <TitleContainer>{children}</TitleContainer>;
};

export default Title;
