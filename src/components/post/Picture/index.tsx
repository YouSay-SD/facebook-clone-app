import React, { FC } from 'react';
import { PictureContainer, Image } from './styles';
import { PictureProps } from './interface';

const Picture: FC<PictureProps> = ({ url }) => {
  return (
    <PictureContainer>
      <Image src={url} alt='Picture' />
    </PictureContainer>
  );
};

export default Picture;
