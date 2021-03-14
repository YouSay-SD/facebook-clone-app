import styled from '@emotion/styled/macro';
import { AvatarImgProps, AvatarContainerProps } from './interface';

export const AvatarContainer = styled.div<AvatarContainerProps>`
  position: relative;
  width: ${({ size }) => size || '40'}px;
  height: ${({ size }) => size || '40'}px;
`;

export const AvatarImg = styled.img<AvatarImgProps>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarStatus = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  width: 13px;
  height: 13px;
  border-radius: 50%;
  position: absolute;
  bottom: -1px;
  right: 1px;
`;
