import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Hero,
  NavbarProfile,
  Preview,
  Loader,
  ModalPost,
  WritePost,
  Post,
} from '../components';
import { RootStore } from '../store/store';
import { setCurrentUser } from '../actions/user/user';
import { setPictures } from '../actions/post/post';

interface ProfileProps {
  userName: string;
}

const Profile: FC<ProfileProps> = () => {
  const dispatch = useDispatch();
  const { userName } = useParams<ProfileProps>();
  const { userName: authUserName } = useSelector(
    (state: RootStore) => state.auth
  );

  const { pictures } = useSelector((state: RootStore) => state.post);

  useEffect(() => {
    dispatch(setCurrentUser(userName));
    dispatch(setPictures(userName));
  }, [userName]);

  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName: currentUserName, avatar, uid } = currentUser;

  if (!uid) {
    return <Loader />;
  }

  return (
    <>
      <Hero userName={currentUserName} avatar={avatar} />
      <NavbarProfile />
      <Preview type='Photos' pictures={pictures} />
      {/* {posts &&
        // eslint-disable-next-line array-callback-return
        posts.map((post) => {
          <Post post={post} />;
        })} */}
      {/* <Preview item='Friends' /> */}
      {currentUserName === authUserName && <WritePost />}
      {/* <ModalPost /> */}
    </>
  );
};

export default Profile;
