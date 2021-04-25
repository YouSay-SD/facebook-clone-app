import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { EditProfileProps } from './interface';
import { EditProfileContainer, Row } from './styles';
import { Container, Grid, Title, Avatar } from '../..';
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
            <Title size='medium'>Profile Picture</Title>
            <img src={banner} alt='Banner' />
          </Row>
        </Grid>
      </Container>
    </EditProfileContainer>
  );
};

export default EditProfile;
