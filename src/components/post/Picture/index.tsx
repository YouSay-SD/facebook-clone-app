import React, { FC } from 'react';
import { PictureContainer, Image } from './styles';
import { PictureProps } from './interface';

const Picture: FC<PictureProps> = ({ picture }) => {
  return (
    <PictureContainer>
      <Image src={picture} alt='Picture' />
    </PictureContainer>
  );
};

export default Picture;
