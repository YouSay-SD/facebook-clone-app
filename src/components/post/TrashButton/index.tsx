import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Content } from './styles';
import { Modal, Box, Button, Title, P, Loader } from '../..';
import { TrashButtonProps } from './interface';
import { loadDeletePost } from '../../../actions/ui/ui';
import { deletePost } from '../../../actions/post/post';
import { RootStore } from '../../../store/store';

const TrashButton: FC<TrashButtonProps> = ({ idPost }) => {
  const dispatch = useDispatch();
  const { loadingDeletePost } = useSelector((state: RootStore) => state.ui);
  const [showModal, setShowModal] = useState(false);

  const handleDeletePost = () => {
    dispatch(loadDeletePost(true));
    deletePost(idPost);
    dispatch(loadDeletePost(false));
  };

  return (
    <div>
      {loadingDeletePost && <Loader type='post' text='Updating...' />}
      <Modal
        button={<Button type='delete' />}
        setShowModal={setShowModal}
        showModal={showModal}
      >
        <Box>
          <Content>
            <Title>Are you sure?</Title>
            <P>You won,t be able to revert this!</P>
            <Button onClick={handleDeletePost}>Yes, delete it!</Button>
          </Content>
        </Box>
      </Modal>
    </div>
  );
};

export default TrashButton;
