import React, { FC } from 'react';
import { PhotoContainer, Image } from './styles';
import { PhotoProps } from './interface';

const Photo: FC<PhotoProps> = ({ url }) => {
  return (
    <PhotoContainer>
      <Image src={url} alt='Photo' />
    </PhotoContainer>
  );
};

export default Photo;
