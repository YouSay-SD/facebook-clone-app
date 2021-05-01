import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
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
import { useFile } from '../../../hooks/useFile';

const EditProfile: FC<EditProfileProps> = () => {
  const { avatar, banner, userName } = useSelector(
    (state: RootStore) => state.auth
  );

  const { handleFileChange, imagePreview, imageToUpload } = useFile({
    banner: '',
    avatar: '',
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit', imageToUpload);
    console.log(imagePreview);
  };

  return (
    <EditProfileContainer>
      <Container>
        <Box>
          <FormStyled onSubmit={onSubmit}>
            <Grid gap={30}>
              <RowStyled>
                <TitleContainerStyled>
                  <Title size='medium'>Profile Picture</Title>
                  <Input
                    id='edit-picture'
                    type='file'
                    placeholder='File'
                    name='avatar'
                    width={15}
                    onChange={handleFileChange}
                  >
                    Edit
                  </Input>
                </TitleContainerStyled>
                <Avatar url={imagePreview.avatar || avatar} size={190} />
              </RowStyled>
              <RowStyled>
                <TitleContainerStyled>
                  <Title size='medium'>Banner</Title>
                  <Input
                    id='id-banner'
                    type='file'
                    placeholder='File'
                    name='banner'
                    width={15}
                    onChange={handleFileChange}
                  >
                    Edit
                  </Input>
                </TitleContainerStyled>
                <BannerStyled
                  src={imagePreview.banner || banner}
                  alt='Banner'
                />
              </RowStyled>
              <RowStyled>
                <TitleContainerStyled>
                  <Title size='medium'>Bio</Title>
                </TitleContainerStyled>
                <Textarea name='edit-bio' placeholder='Edit bio...' />
              </RowStyled>
            </Grid>
            <Input
              type='submit'
              placeholder='Update Profile'
              name='update-profile'
              value='Update Profile'
            />
          </FormStyled>
        </Box>
      </Container>
    </EditProfileContainer>
  );
};

export default EditProfile;
