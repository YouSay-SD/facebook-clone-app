import React, { FC } from 'react';
import { Navbar, Hero, NavbarProfile, Preview, ModalPost } from '../components';

const Profile: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NavbarProfile />
      <Preview item='Photos' />
      <Preview item='Friends' />
      {/* <ModalPost /> */}
    </>
  );
};

export default Profile;
