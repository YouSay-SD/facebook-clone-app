import React from 'react';
import { DeletePostContainer } from './styles';
import { Modal, Button } from '../..';

const DeletePost = () => {
  const handleDeletePost = () => {
    console.log('hola');
  };

  return (
    <DeletePostContainer>
      <Modal button={<Button type='delete' onClick={handleDeletePost} />}>
        asdsadsa
      </Modal>
    </DeletePostContainer>
  );
};

export default DeletePost;
