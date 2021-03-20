import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  WritePostContainer,
  WritePostForm,
  WritePostContent,
  InputContainer,
  PhotoPreview,
} from './styles';
import { Container, Box, Avatar, Input, Modal, Title, Textarea } from '../..';
import { RootStore } from '../../../store/store';
import { uiOpenModal } from '../../../actions/ui/ui';

const WritePost: FC = () => {
  const { avatar } = useSelector((state: RootStore) => state.auth);
  const [photoPreview, setPhotoPreview] = useState<any>();
  const dispatch = useDispatch();

  const handlerImage = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhotoPreview(reader.result);
        dispatch(uiOpenModal());
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

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
                <InputContainer>
                  <Input
                    type='text'
                    placeholder="What's on your mind?"
                    name='post'
                    autoComplete='off'
                  />
                </InputContainer>
              }
            >
              <WritePostContent>
                <Box>
                  <Title>Create Post</Title>
                  <Textarea
                    name='textarea'
                    placeholder="What's on your mind?"
                  />
                  <PhotoPreview src={photoPreview} />
                  <Input
                    type='submit'
                    name='submit'
                    value='Post'
                    placeholder='Post'
                  />
                </Box>
              </WritePostContent>
            </Modal>
            <Input
              type='file'
              placeholder='Photo'
              name='file'
              onChange={handlerImage}
            />
          </WritePostForm>
        </Box>
      </Container>
    </WritePostContainer>
  );
};

export default WritePost;
