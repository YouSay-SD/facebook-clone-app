import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { EditContainer, Content } from './styles';
import { Modal, Box, Button, Title, P } from '../..';
import { EditButtonProps } from './interface';
import { DeletePost } from '../../../actions/post/post';

const EditButton: FC<EditButtonProps> = ({ idPost }) => {
  const dispatch = useDispatch();

  const handleDeletePost = async () => {
    // dispatch(EditPost(idPost));
  };

  return (
    <EditContainer>
      <Modal button={<Button type='edit' />}>
        <Box>
          <Content>
            <Title>Edit Post</Title>
            <P>You won,t be able to revert this!</P>
            <Button onClick={handleDeletePost}>Yes, delete it!</Button>
          </Content>
        </Box>
      </Modal>
    </EditContainer>
  );
};

export default EditButton;
