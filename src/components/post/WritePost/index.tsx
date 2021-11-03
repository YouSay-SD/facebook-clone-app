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
  setPictures,
  setPosts,
} from '../../../actions/post/post';
import { fileUpload } from '../../../helpers/fileUpload';
import { useFormCustom } from '../../../hooks/useFormCustom';
import { useFile } from '../../../hooks/useFile';
import { loadCreatePost } from '../../../actions/ui/ui';

const WritePost: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { avatar, userName } = useSelector((state: RootStore) => state.auth);
  const { loadingCreatePost } = useSelector((state: RootStore) => state.ui);
  const { reset, formValues, handleInputChange } = useFormCustom({
    body: '',
  });
  const { handleFileChange, imagePreview, imageToUpload, resetFile } = useFile({
    picture: '',
  });

  const handleImageChange = (e: any) => {
    handleFileChange(e);
    setShowModal(true);
  };

  const { body } = formValues;
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(loadCreatePost(true));

    const fileUrl = imageToUpload ? await fileUpload(imageToUpload.file) : null;

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
    setShowModal(false);
    dispatch(loadCreatePost(false));
    resetFile();
    reset();
  };

  return (
    <WritePostContainer>
      {loadingCreatePost && <Loader type='post' text='Posting...' />}
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
                    disabled
                  />
                </InputContainer>
              }
              showModal={showModal}
              setShowModal={setShowModal}
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
                  {imagePreview && (
                    <PhotoPreviewContainer>
                      <RemovePhotoPreview onClick={resetFile} />
                      <PhotoPreview src={imagePreview.file} />
                    </PhotoPreviewContainer>
                  )}
                  <Input
                    type='submit'
                    name='submit'
                    value='Post'
                    placeholder='Post'
                    disabled={loadingCreatePost}
                  />
                </Box>
              </WritePostContent>
            </Modal>
            <Input
              id='file'
              type='file'
              placeholder='Photo'
              name='file'
              onChange={handleImageChange}
            />
          </WritePostForm>
        </Box>
      </Container>
    </WritePostContainer>
  );
};

export default WritePost;
