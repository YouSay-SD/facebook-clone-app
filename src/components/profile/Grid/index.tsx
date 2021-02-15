import React, { FC } from 'react';
import { GridContainer } from './styles';

const Grid: FC = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default Grid;
