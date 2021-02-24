import React, { FC } from 'react';
import { AvatarContainer, AvatarImg, AvatarOnline } from './styles';
import { AvatarContainerProps, AvatarProps } from './interface';

const Avatar: FC<AvatarProps> = ({ url, size }) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImg src={url} />
      <AvatarOnline />
    </AvatarContainer>
  );
};

export default Avatar;
