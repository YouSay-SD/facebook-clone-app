import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  WritePostContainer,
  WritePostForm,
  WritePostContent,
  InputContainer,
  PhotoPreviewContainer,
  RemovePhotoPreview,
  PhotoPreview,
} from './styles';
import {
  Container,
  Box,
  Avatar,
  Input,
  Modal,
  Title,
  Textarea,
  Loader,
} from '../..';
import { RootStore } from '../../../store/store';
import {
  startNewPost,
  startLoadingPost,
  finishLoadingPost,
  setPictures,
  setPosts,
} from '../../../actions/post/post';
import { fileUpload } from '../../../helpers/fileUpload';
import { useFormCustom } from '../../../hooks/useFormCustom';

const WritePost: FC = () => {
  const { avatar, userName } = useSelector((state: RootStore) => state.auth);
  const { loadingPost } = useSelector((state: RootStore) => state.post);
  const [photoPreview, setPhotoPreview] = useState<any>();
  const [openModal, setOpenModal] = useState<boolean>();
  const [fileObject, setFileObject] = useState<any>();
  const { reset, formValues, handleInputChange } = useFormCustom({
    body: '',
  });
  const { body } = formValues;
  const dispatch = useDispatch();

  const handleImage = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhotoPreview(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    const file = e.target.files[0];
    setFileObject(file);
  };

  const handleRemovePreview = () => {
    setPhotoPreview(null);
    setFileObject(null);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(startLoadingPost());

    const fileUrl = fileObject ? await fileUpload(fileObject) : null;
    const newPost = {
      author: userName,
      body,
      picture: fileUrl,
      date: new Date().getTime(),
    };

    dispatch(startNewPost(newPost));
    if (userName) {
      dispatch(setPictures(userName));
      dispatch(setPosts(userName));
    }
    dispatch(finishLoadingPost());
    setFileObject(null);
    setPhotoPreview(null);
    reset();
  };

  return (
    <WritePostContainer>
      {loadingPost && <Loader type='post' text='Posting...' />}
      <Container>
        <Box>
          <WritePostForm onSubmit={handleSubmit}>
            <Avatar url={avatar} status />
            <Modal
              openModal={openModal}
              button={
                <InputContainer>
                  <Input
                    type='text'
                    placeholder="What's on your mind?"
                    name='post'
                    autoComplete='off'
                    disabled
                  />
                </InputContainer>
              }
            >
              <WritePostContent>
                <Box>
                  <Title>Create Post</Title>
                  <Textarea
                    name='body'
                    value={body}
                    onChange={handleInputChange}
                    placeholder="What's on your mind?"
                  />
                  {photoPreview && (
                    <PhotoPreviewContainer>
                      <RemovePhotoPreview onClick={handleRemovePreview} />
                      <PhotoPreview src={photoPreview} />
                    </PhotoPreviewContainer>
                  )}
                  <Input
                    type='submit'
                    name='submit'
                    value='Post'
                    placeholder='Post'
                    disabled={loadingPost}
                  />
                </Box>
              </WritePostContent>
            </Modal>
            <Input
              type='file'
              placeholder='Photo'
              name='file'
              onChange={handleImage}
            />
          </WritePostForm>
        </Box>
      </Container>
    </WritePostContainer>
  );
};

export default WritePost;
