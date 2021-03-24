import React, { FC, useEffect, useState } from 'react';
import { PostHeader, PostContent } from '../..';
// import { PostProps } from '../../../reducers/postReducer/interface';
import { PostContainer } from './styles';
import { PostComponentProps } from './interface';
import { getUserData } from '../../../helpers/getUserData';

const Post: FC<PostComponentProps> = ({ author, body, picture }) => {
  // const { body, author } = post;
  // console.log('post', body);
  // console.log('a');
  // const userData = (handleGetUserData = () => async (username: string) => {
  //   const resp = await getUserData(author);
  //   return resp;
  // });

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

export default Post;
