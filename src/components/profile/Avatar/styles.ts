import styled from '@emotion/styled/macro';
import { AvatarProps } from './interface';

export const AvatarContainer = styled.div`
  position: relative;
`;

export const AvatarImg = styled.img<AvatarProps>`
  border-radius: 50%;
  width: ${({ width }) => width || '40'}px;
`;

export const AvatarOnline = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  width: 13px;
  height: 13px;
  border-radius: 50%;
  position: absolute;
  bottom: -1px;
  right: 1px;
`;
