import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { PictureContainer, Image } from './styles';
import { PictureProps } from './interface';

const Picture: FC<PictureProps> = ({ redirect, id, picture, fullSize }) => {
  const history = useHistory();

  const goPictureSingle = () => {
    if (redirect) {
      history.push(`/picture/YouSay/${id}`);
      console.log('asdasd', id);
    }
  };

  return (
    <PictureContainer
      redirect={redirect}
      fullSize={fullSize}
      onClick={goPictureSingle}
    >
      <Image src={picture} fullSize={fullSize} alt='Picture' />
    </PictureContainer>
  );
};

export default Picture;
