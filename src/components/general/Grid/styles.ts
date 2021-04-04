import styled from '@emotion/styled/macro';
import { respondAbove } from '../../../styles/breakpoints';
import { GridProps } from './interface';

export const GridContainer = styled.div<GridProps>`
  display: grid;
  ${({ col }) => col && `grid-template-columns: repeat(${col}, 1fr);`}
  ${({ autoCol }) =>
    autoCol &&
    `grid-template-columns: repeat(auto-fit, minmax(${autoCol}px, 1fr));`}
  ${({ rows }) => rows && `grid-template-rows: repeat(${rows}, 1fr);`}
  ${({ gap }) => gap && `gap: ${gap}px;`}
  border-radius: 10px;
  overflow: hidden;
`;
