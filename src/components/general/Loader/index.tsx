import React, { FC } from 'react';
import { LoaderContainer, LoaderCopy, LoaderGif } from './styles';
import { LoaderProps } from './interface';

const Loader: FC<LoaderProps> = ({ type, text }) => {
  return (
    <LoaderContainer type={type}>
      {!type && (
        <LoaderGif
          src={`${process.env.REACT_APP_URL}/img/gif/loader.gif`}
          alt='Loader GIF'
        />
      )}

      {type === 'post' && (
        <>
          <LoaderCopy>{text}</LoaderCopy>
          <LoaderGif
            src={`${process.env.REACT_APP_URL}/img/gif/loading-post.gif`}
            alt='Loader GIF'
          />
        </>
      )}
    </LoaderContainer>
  );
};

export default Loader;
