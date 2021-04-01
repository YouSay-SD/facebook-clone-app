import styled from '@emotion/styled/macro';
import { GridProps } from './interface';

export const GridContainer = styled.div<GridProps>`
  display: grid;
  ${({ columns }) =>
    columns && `grid-template-columns: repeat(${columns}, 1fr);`}
  ${({ rows }) => rows && `grid-template-rows: repeat(${rows}, 1fr);`}
  ${({ gap }) => gap && `gap: ${gap}px;`}
  border-radius: 10px;
  overflow: hidden;
`;
