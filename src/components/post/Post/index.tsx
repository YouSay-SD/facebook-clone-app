import React, { FC, useEffect, useState } from 'react';
import { PostHeader, PostContent, Box, TrashButton } from '../..';
import { PostContainer, PostHeaderContainer, PostMenu } from './styles';
import { PostComponentProps } from './interface';
import { getUserData } from '../../../helpers/getUserData';

const Post: FC<PostComponentProps> = ({ id, author, body, picture }) => {
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
        <PostHeaderContainer>
          <PostHeader author={author} avatar={avatar} />
          <PostMenu>
            <TrashButton idPost={id} />
          </PostMenu>
        </PostHeaderContainer>
        <PostContent body={body} picture={picture} />
      </PostContainer>
    </Box>
  );
};

export default Post;
