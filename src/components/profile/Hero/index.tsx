import React, { FC } from 'react';
import { Container, P } from '../..';
import {
  HeroContainer,
  Image,
  Avatar,
  BlurImage,
  TextContainer,
  UserName,
} from './styles';

const Hero: FC = () => {
  return (
    <HeroContainer>
      <Container hasPaddingMobile={false}>
        <Image url='https://www.pockettactics.com/wp-content/uploads/2021/01/genshin-impact-ganyu.jpg'>
          <Avatar url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRn8HIKq1xFSeHJTiI7EBp1Cs_M0LCDxZgw&usqp=CAU' />
        </Image>
        <TextContainer>
          <UserName>YouSay</UserName>
          <P>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </P>
        </TextContainer>
      </Container>
      <BlurImage url='https://liukin.es/wp-content/uploads/2020/12/1607717844_163_El-programa-especial-Genshin-Impact-12-mostro-a-Ganyu-Albedo.jpg' />
    </HeroContainer>
  );
};

export default Hero;
