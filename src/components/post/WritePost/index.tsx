import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
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
import { startUploading, startNewPost } from '../../../actions/post/post';
import { FormPostProps } from '../../../reducers/postReducer/interface';
import { fileUpload } from '../../../helpers/fileUpload';
import { useFormCustom } from '../../../hooks/useFormCustom';

const WritePost: FC = () => {
  const { avatar } = useSelector((state: RootStore) => state.auth);
  const [photoPreview, setPhotoPreview] = useState<any>();
  const [fileObject, setFileObject] = useState<any>();
  // const { register, getValues, handleSubmit } = useForm<FormPostProps>();
  const { formValues, handleInputChange } = useFormCustom({
    body: '',
  });
  const { body } = formValues;
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

    const file = e.target.files[0];
    setFileObject(file);
    // if (file) {
    //   const asd = dispatch(startUploading(file));
    // }
  };

  // const onSubmit = handleSubmit(
  //   async ({ description }: FormPostProps, { target }: any) => {
  //     target.reset();

  //     // const textarea = document.getElementById('description');
  //     console.log(descriptionS);
  //     // console.log(textarea.value);

  //     // const fileUrl = await fileUpload(fileObject);
  //     const newPost = {
  //       description,
  //       // picture: fileUrl,
  //       date: new Date().getTime(),
  //     };

  //     console.log(newPost);
  //     // dispatch(startNewPost(newPost));
  //     // dispatch(startLoginEmailPassword(email, password));
  //   }
  // );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fileUrl = await fileUpload(fileObject);
    const newPost = {
      body,
      picture: fileUrl,
      date: new Date().getTime(),
    };

    dispatch(startNewPost(newPost));
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
                    name='body'
                    value={body}
                    onChange={handleInputChange}
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
