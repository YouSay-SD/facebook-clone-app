import React, { FC } from 'react';
import { AvatarContainer, AvatarImg, AvatarOnline } from './styles';
import { AvatarProps } from './interface';

const Avatar: FC<AvatarProps> = ({ url, width }) => {
  return (
    <AvatarContainer>
      <AvatarImg src={url} width={width} />
      <AvatarOnline />
    </AvatarContainer>
  );
};

export default Avatar;
