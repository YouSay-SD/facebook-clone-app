import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Content, FormEditPost } from './styles';
import {
  Modal,
  Box,
  Button,
  Loader,
  Title,
  Textarea,
  Input,
  Alert,
} from '../..';
import { EditButtonProps } from './interface';
import { UpdatePost } from '../../../actions/post/post';
import { RootStore } from '../../../store/store';
import { loadUpdatePost } from '../../../actions/ui/ui';

const EditButton: FC<EditButtonProps> = ({ idPost, body }) => {
  const dispatch = useDispatch();
  const { loadingUpdatePost } = useSelector((state: RootStore) => state.ui);
  const [showModal, setShowModal] = useState(false);
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = ({ bodyEdited }: any) => {
    dispatch(loadUpdatePost(true));
    dispatch(UpdatePost(idPost, bodyEdited));
    dispatch(loadUpdatePost(false));
  };

  return (
    <div>
      {loadingUpdatePost && <Loader type='post' text='Updating...' />}
      <Modal
        button={<Button type='edit' />}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <Box>
          <Content>
            <Title>Edit Post</Title>
            <FormEditPost onSubmit={handleSubmit(onSubmit)}>
              <Textarea
                name='bodyEdited'
                defaultValue={body}
                innerRef={register({
                  required: { value: true, message: 'The text is required' },
                })}
              />
              {errors?.bodyEdited && (
                <Alert>{errors?.bodyEdited?.message}</Alert>
              )}
              <Input
                type='submit'
                placeholder='Update Post!'
                name='updatePost'
                value='Update Post!'
              />
            </FormEditPost>
          </Content>
        </Box>
      </Modal>
    </div>
  );
};

export default EditButton;
