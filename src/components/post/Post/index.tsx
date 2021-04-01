import React, { FC, useEffect, useState } from 'react';
import { PostHeader, PostContent, Box } from '../..';
import { PostContainer } from './styles';
import { PostComponentProps } from './interface';
import { getUserData } from '../../../helpers/getUserData';

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

  return (
    <Box>
      <PostContainer>
        <PostHeader author={author} avatar={avatar} />
        <PostContent body={body} picture={picture} />
      </PostContainer>
    </Box>
  );
};

export default Post;
