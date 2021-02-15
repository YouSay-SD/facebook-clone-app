import React, { FC } from 'react';
import { PStyled } from './styles';

const P: FC = ({ children }) => {
  return <PStyled>{children}</PStyled>;
};

export default P;
