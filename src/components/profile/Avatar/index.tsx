import React, { FC } from 'react';
import { AvatarContainer, AvatarImg } from './styles';
import { AvatarProps } from './interface';

const Avatar: FC<AvatarProps> = ({ url, width }) => {
  return (
    <AvatarContainer>
      <AvatarImg src={url} width={width} />
    </AvatarContainer>
  );
};

export default Avatar;
