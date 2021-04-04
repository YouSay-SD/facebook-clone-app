import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { PictureContainer, Image } from './styles';
import { PictureProps } from './interface';

const Picture: FC<PictureProps> = ({ idPicture, picture, fullSize }) => {
  const history = useHistory();

  const goPictureSingle = () => {
    history.push(`/picture/YouSay/${idPicture}`);
    console.log('asdasd', idPicture);
  };

  return (
    <PictureContainer fullSize={fullSize} onClick={goPictureSingle}>
      <Image src={picture} fullSize={fullSize} alt='Picture' />
    </PictureContainer>
  );
};

export default Picture;
