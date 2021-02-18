import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, ModalPost } from '../components';

interface PhotosProps {
  user: string;
}

const Photos: FC = () => {
  const { user } = useParams<PhotosProps>();
  console.log(user);
  return (
    <>
      <Navbar />
      <ModalPost />
    </>
  );
};

export default Photos;
