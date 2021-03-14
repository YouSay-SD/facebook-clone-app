import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { WritePostContainer, WritePostForm } from './styles';
import { Container, Box, Avatar, Input } from '../..';
import { RootStore } from '../../../store/store';

const WritePost: FC = () => {
  const { avatar } = useSelector((state: RootStore) => state.auth);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <WritePostContainer>
      <Container>
        <Box>
          <WritePostForm onSubmit={handleSubmit}>
            <Avatar url={avatar} status />
            <Input type='text' placeholder="What's on your mind?" name='post' />
            <Input type='file' placeholder='Photo/Video' name='file' />
          </WritePostForm>
        </Box>
      </Container>
    </WritePostContainer>
  );
};

export default WritePost;
