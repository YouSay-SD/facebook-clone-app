import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PictureContainer, Image } from './styles';
import { PictureProps } from './interface';
import { RootStore } from '../../../store/store';

const Picture: FC<PictureProps> = ({ redirect, id, picture, fullSize }) => {
  const history = useHistory();
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName } = currentUser;

  const goPictureSingle = () => {
    if (redirect) {
      history.push(`/picture/${userName}/${id}`);
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
