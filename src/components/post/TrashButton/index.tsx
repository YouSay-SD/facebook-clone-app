import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TrashContainer, Content } from './styles';
import { Modal, Box, Button, Title, P } from '../..';
import { TrashButtonProps } from './interface';
import { DeletePost } from '../../../actions/post/post';

const TrashButton: FC<TrashButtonProps> = ({ idPost }) => {
  const dispatch = useDispatch();

  const handleDeletePost = async () => {
    dispatch(DeletePost(idPost));
  };

  return (
    <TrashContainer>
      <Modal button={<Button type='delete' />}>
        <Box>
          <Content>
            <Title>Are you sure?</Title>
            <P>You won,t be able to revert this!</P>
            <Button onClick={handleDeletePost}>Yes, delete it!</Button>
          </Content>
        </Box>
      </Modal>
    </TrashContainer>
  );
};

export default TrashButton;
