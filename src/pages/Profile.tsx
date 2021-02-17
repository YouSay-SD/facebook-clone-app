import React, { FC } from 'react';
import { Navbar, Hero, NavbarProfile, Preview, ModalPost } from '../components';

const Profile: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NavbarProfile />
      <Preview item='Photos' />
      <ModalPost />
    </>
  );
};

export default Profile;
