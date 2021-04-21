import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PictureContainer, Image } from './styles';
import { PictureProps } from './interface';
import { RootStore } from '../../../store/store';

const Picture: FC<PictureProps> = ({ redirect, id, picture, fullSize }) => {
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName } = currentUser;

  return (
    <Link to={`/picture/${userName}/${id}`}>
      <PictureContainer redirect={redirect} fullSize={fullSize}>
        <Image src={picture} fullSize={fullSize} alt='Picture' />
      </PictureContainer>
    </Link>
  );
};

export default Picture;
