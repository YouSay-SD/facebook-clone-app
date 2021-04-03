import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PostHeader, PostContent, Box, TrashButton } from '../..';
import { PostContainer, PostHeaderContainer, PostMenu } from './styles';
import { PostComponentProps } from './interface';
import { getUserData } from '../../../helpers/getUserData';
import { RootStore } from '../../../store/store';

const Post: FC<PostComponentProps> = ({ id, author, body, picture }) => {
  const { isMyProfile } = useSelector((state: RootStore) => state.ui);

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
          {isMyProfile && (
            <PostMenu>
              <TrashButton idPost={id} />
            </PostMenu>
          )}
        </PostHeaderContainer>
        <PostContent body={body} picture={picture} />
      </PostContainer>
    </Box>
  );
};

export default Post;
