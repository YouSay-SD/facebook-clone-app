import React, { FC, useEffect, useState, useRef } from 'react';
import { PostHeader, PostContent } from '../..';
// import { PostProps } from '../../../reducers/postReducer/interface';
import { PostContainer } from './styles';
import { PostComponentProps } from './interface';
import { getUserData } from '../../../helpers/getUserData';
import useNearScreen from '../../../hooks/useNearScreen';

const Post: FC<PostComponentProps> = ({ author, body, picture }) => {
  const [userData, setUserData] = useState<any>({
    avatar: '',
  });

  const handleGetUserData = async (username: string) => {
    const resp = await getUserData(author);
    setUserData(resp);
  };

  const { avatar } = userData;

  useEffect(() => {
    handleGetUserData(author);
  }, []);
  // const userData = handleGetUserData(author);
  // console.log(userData);

  return (
    <PostContainer>
      <PostHeader author={author} avatar={avatar} />
      <PostContent body={body} picture={picture} />
    </PostContainer>
  );
};

// Lazy Post
const LazyPost: FC<PostComponentProps> = ({ author, body, picture }) => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' });

  return (
    <div ref={fromRef}>
      {isNearScreen ? (
        <Post author={author} body={body} picture={picture} />
      ) : null}
    </div>
  );
};

export default LazyPost;
