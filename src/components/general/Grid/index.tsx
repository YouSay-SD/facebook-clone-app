import React, { FC } from 'react';
import { GridContainer } from './styles';
import { GridProps } from './interface';

const Grid: FC<GridProps> = ({ col, autoCol, rows, gap, children }) => {
  return (
    <GridContainer col={col} autoCol={autoCol} rows={rows} gap={gap}>
      {children}
    </GridContainer>
  );
};

export default Grid;
