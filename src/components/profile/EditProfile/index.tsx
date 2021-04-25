import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { EditProfileProps } from './interface';
import { EditProfileContainer, Row, Banner } from './styles';
import { Container, Grid, Title, Avatar, Textarea } from '../..';
import { RootStore } from '../../../store/store';

const EditProfile: FC<EditProfileProps> = () => {
  const { avatar, banner, userName } = useSelector(
    (state: RootStore) => state.auth
  );

  console.log(banner);

  return (
    <EditProfileContainer>
      <Container>
        <Grid gap={30}>
          <Row>
            <Title size='medium'>Profile Picture</Title>
            <Avatar url={avatar} size={140} />
          </Row>
          <Row>
            <Title size='medium'>Banner</Title>
            <Banner src={banner} alt='Banner' />
          </Row>
          <Row>
            <Title size='medium'>Bio</Title>
            <Textarea name='edit-bio' placeholder='Edit bio...' />
          </Row>
        </Grid>
      </Container>
    </EditProfileContainer>
  );
};

export default EditProfile;
