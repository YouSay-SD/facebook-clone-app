import React, { FC } from 'react';
import { AvatarContainer, AvatarImg, AvatarStatus } from './styles';
import { AvatarContainerProps, AvatarProps } from './interface';

const Avatar: FC<AvatarProps> = ({ url, size, status }) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImg src={url} alt='Avatar' />
      {status && <AvatarStatus />}
    </AvatarContainer>
  );
};

export default Avatar;
