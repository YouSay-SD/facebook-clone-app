import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Container, P } from '../..';
import { RootStore } from '../../../store/store';
import { HeroProps } from './interface';
import {
  HeroContainer,
  Image,
  Avatar,
  BlurImage,
  TextContainer,
  UserName,
} from './styles';

const Hero: FC<HeroProps> = ({ userName, avatar, banner, bio }) => {
  return (
    <HeroContainer>
      <Container hasPaddingMobile={false}>
        <Image url={banner}>
          <Avatar url={avatar} />
        </Image>
        <TextContainer>
          <UserName>{userName}</UserName>
          <P>{bio}</P>
        </TextContainer>
      </Container>
      <BlurImage url={banner} />
    </HeroContainer>
  );
};

export default Hero;
