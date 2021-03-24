import React, { FC } from 'react';
import { PictureContainer, Image } from './styles';
import { PictureProps } from './interface';

const Picture: FC<PictureProps> = ({ picture, fullSize }) => {
  return (
    <PictureContainer fullSize={fullSize}>
      <Image src={picture} fullSize={fullSize} alt='Picture' />
    </PictureContainer>
  );
};

export default Picture;
