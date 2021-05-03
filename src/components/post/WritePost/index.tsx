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
import { loadCreatePost, openModalCreatePost } from '../../../actions/ui/ui';

const WritePost: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const { avatar, userName } = useSelector((state: RootStore) => state.auth);
  const { loadingCreatePost } = useSelector((state: RootStore) => state.ui);
  const { reset, formValues, handleInputChange } = useFormCustom({
    body: '',
  });
  const { handleFileChange, imagePreview, imageToUpload, resetFile } = useFile({
    picture: '',
  });
  console.log(openModal);

  const { body } = formValues;
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // dispatch(loadCreatePost(true));
    setOpenModal(true);

    // console.log('imageToUpload', imageToUpload);
    // const fileUrl = imageToUpload
    //   ? await fileUpload(imageToUpload.picture)
    //   : null;

    // console.log('fileUrl', fileUrl);
    // const newPost = {
    //   author: userName,
    //   body,
    //   picture: fileUrl,
    //   date: new Date().getTime(),
    // };
    // console.log('newPost', newPost);

    // dispatch(startNewPost(newPost));
    // if (userName) {
    //   dispatch(setPictures(userName));
    //   dispatch(setPosts(userName));
    // }
    // setOpenModal(false);
    // openModalCreatePost(false);
    // dispatch(loadCreatePost(false));
    // resetFile();
    // reset();
  };

  return (
    <WritePostContainer>
      <Modal open={openModal}>
        <WritePostContent>
          <Box>
            <Title>Create Post</Title>
            <Textarea
              name='body'
              value={body}
              onChange={handleInputChange}
              placeholder="What's on your mind?"
            />
            {imagePreview.picture && (
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
              disabled={loadingCreatePost}
            />
          </Box>
        </WritePostContent>
      </Modal>
      {loadingCreatePost && <Loader type='post' text='Posting...' />}
      <Container>
        <Box>
          <WritePostForm onSubmit={handleSubmit}>
            {avatar && <Avatar url={avatar} status />}

            <InputContainer onClick={() => setOpenModal(true)}>
              <Input
                type='text'
                placeholder="What's on your mind?"
                name='post'
                autoComplete='off'
                disabled
              />
            </InputContainer>
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
