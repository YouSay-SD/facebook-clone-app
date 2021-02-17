import styled from '@emotion/styled/macro';
import { AvatarProps } from './interface';

export const AvatarContainer = styled.div``;

export const AvatarImg = styled.img<AvatarProps>`
  border-radius: 50%;
  width: ${({ width }) => width || '40'}px;
`;
