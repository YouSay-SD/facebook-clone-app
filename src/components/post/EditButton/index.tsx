import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Content, FormEditPost } from './styles';
import { Modal, Box, Button, Title, P, Textarea, Input, Alert } from '../..';
import { EditButtonProps } from './interface';
import { UpdatePost } from '../../../actions/post/post';

const EditButton: FC<EditButtonProps> = ({ idPost, body }) => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = ({ bodyEdited }: any) => {
    dispatch(UpdatePost(idPost, bodyEdited));
  };

  return (
    <div>
      <Modal button={<Button type='edit' />}>
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
