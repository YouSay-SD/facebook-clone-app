import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { WritePostContainer, WritePostForm, WritePostContent } from './styles';
import { Container, Box, Avatar, Input, Modal, Title, Textarea } from '../..';
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
            <Modal
              button={
                <Input
                  type='text'
                  placeholder="What's on your mind?"
                  name='post'
                  autoComplete='off'
                />
              }
            >
              <WritePostContent>
                <Box>
                  <Title>Create Post</Title>
                  <Textarea
                    name='textarea'
                    placeholder="What's on your mind?"
                  />
                </Box>
              </WritePostContent>
            </Modal>
            <Input type='file' placeholder='Photo/Video' name='file' />
          </WritePostForm>
        </Box>
      </Container>
    </WritePostContainer>
  );
};

export default WritePost;
