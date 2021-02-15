import React, { FC } from 'react';
import { BoxContainer } from './styles';

const Box: FC = ({ children }) => {
  return <BoxContainer>{children}</BoxContainer>;
};

export default Box;
