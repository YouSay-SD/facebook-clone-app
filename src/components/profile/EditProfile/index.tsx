import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { EditProfileProps } from './interface';
import {
  EditProfileContainer,
  RowStyled,
  BannerStyled,
  TitleContainerStyled,
  FormStyled,
} from './styles';
import {
  Container,
  Grid,
  Title,
  Avatar,
  Textarea,
  Box,
  Button,
  Input,
} from '../..';
import { RootStore } from '../../../store/store';

const EditProfile: FC<EditProfileProps> = () => {
  const { avatar, banner, userName } = useSelector(
    (state: RootStore) => state.auth
  );

  return (
    <EditProfileContainer>
      <Container>
        <Box>
          <FormStyled>
            <Grid gap={30}>
              <RowStyled>
                <TitleContainerStyled>
                  <Title size='medium'>Profile Picture</Title>
                  <Input
                    type='file'
                    placeholder='File'
                    name='edit-picture'
                    width={15}
                  >
                    Edit
                  </Input>
                </TitleContainerStyled>
                <Avatar url={avatar} size={190} />
              </RowStyled>
              <RowStyled>
                <TitleContainerStyled>
                  <Title size='medium'>Banner</Title>
                  <Input
                    type='file'
                    placeholder='File'
                    name='edit-picture'
                    width={15}
                  >
                    Edit
                  </Input>
                </TitleContainerStyled>
                <BannerStyled src={banner} alt='Banner' />
              </RowStyled>
              <RowStyled>
                <TitleContainerStyled>
                  <Title size='medium'>Bio</Title>
                </TitleContainerStyled>
                <Textarea name='edit-bio' placeholder='Edit bio...' />
              </RowStyled>
            </Grid>
          </FormStyled>
        </Box>
      </Container>
    </EditProfileContainer>
  );
};

export default EditProfile;
