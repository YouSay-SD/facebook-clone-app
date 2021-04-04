import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader, PicturesGrid } from '../components';
import { RootStore } from '../store/store';
import { setCurrentUser } from '../actions/user/user';
import { setPosts } from '../actions/post/post';

interface ProfileProps {
  userName: string;
}

const Pictures: FC<ProfileProps> = () => {
  const dispatch = useDispatch();
  const { userName } = useParams<ProfileProps>();
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { uid } = currentUser;

  useEffect(() => {
    dispatch(setCurrentUser(userName));
    dispatch(setPosts(userName));
  }, [userName]);

  if (!uid) {
    return <Loader />;
  }

  return (
    <div>
      <PicturesGrid />
    </div>
  );
};

export default Pictures;
