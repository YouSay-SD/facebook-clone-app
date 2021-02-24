import React from 'react';
import { LoaderContainer, LoaderGif } from './styles';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderGif
        src={`${process.env.REACT_APP_URL}/img/gif/loader.gif`}
        alt='Loader GIF'
      />
    </LoaderContainer>
  );
};

export default Loader;
