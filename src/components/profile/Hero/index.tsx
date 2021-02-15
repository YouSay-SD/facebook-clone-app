import React, { FC } from 'react';
import { Container } from '../..';
import { Image } from './styles';

const Hero: FC = () => {
  return (
    <Container hasPaddingMobile={false}>
      <Image url='https://squadstate.com/wp-content/uploads/2020/12/Sucrose-Genshin-1024x576.png' />
    </Container>
  );
};

export default Hero;
