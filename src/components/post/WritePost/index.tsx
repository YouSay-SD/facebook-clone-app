import React, { FC } from 'react';
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
import { useFile } from '../../../hooks/useFile';

const WritePost: FC = () => {
  const { avatar, userName } = useSelector((state: RootStore) => state.auth);
  const { loadingPost } = useSelector((state: RootStore) => state.post);
  const { reset, formValues, handleInputChange } = useFormCustom({
    body: '',
  });
  const { handleFileChange, imagePreview, imageToUpload, resetFile } = useFile({
    picture: '',
  });

  const { body } = formValues;
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(startLoadingPost());

    const fileUrl = imageToUpload
      ? await fileUpload(imageToUpload.picture)
      : null;
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
    resetFile();
    reset();
  };

  return (
    <WritePostContainer>
      {loadingPost && <Loader type='post' text='Posting...' />}
      <Container>
        <Box>
          <WritePostForm onSubmit={handleSubmit}>
            {avatar && <Avatar url={avatar} status />}
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
                      <RemovePhotoPreview onClick={() => resetFile()} />
                      <PhotoPreview src={imagePreview.picture} />
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
              id='upload-picture'
              type='file'
              placeholder='Photo'
              name='picture'
              onChange={handleFileChange}
            />
          </WritePostForm>
        </Box>
      </Container>
    </WritePostContainer>
  );
};

export default WritePost;
