import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PostHeader, PostContent, Box, TrashButton, EditButton } from '../..';
import { PostContainer, PostHeaderContainer, PostMenu } from './styles';
import { PostComponentProps } from './interface';
import { getUserData } from '../../../helpers/getUserData';
import { RootStore } from '../../../store/store';

const Post: FC<PostComponentProps> = ({ id, author, body, picture }) => {
  const { userName } = useSelector((state: RootStore) => state.auth);
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const { userName: currentUserName } = currentUser;
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
          {userName === author && (
            <PostMenu>
              <EditButton idPost={id} body={body} />
              <TrashButton idPost={id} />
            </PostMenu>
          )}
        </PostHeaderContainer>
        <PostContent body={body} id={id} picture={picture} />
      </PostContainer>
    </Box>
  );
};

export default Post;
