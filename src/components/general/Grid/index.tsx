import React, { FC } from 'react';
import { GridContainer } from './styles';
import { GridProps } from './interface';

const Grid: FC<GridProps> = ({ columns, rows, gap, children }) => {
  return (
    <GridContainer columns={columns} rows={rows} gap={gap}>
      {children}
    </GridContainer>
  );
};

export default Grid;
