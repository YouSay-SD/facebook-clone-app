import React, { FC } from 'react';
import { Hero, NavbarProfile, Preview } from '../components';

const Profile: FC = () => {
  return (
    <>
      <Hero />
      <NavbarProfile />
      <Preview item='Photos' />
    </>
  );
};

export default Profile;
