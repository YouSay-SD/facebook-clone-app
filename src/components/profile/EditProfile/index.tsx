import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  Loader,
} from '../..';
import { RootStore } from '../../../store/store';
import { useFile } from '../../../hooks/useFile';
import { fileUpload } from '../../../helpers/fileUpload';
import { updateProfile } from '../../../actions/auth/auth';
import { useFormCustom } from '../../../hooks/useFormCustom';
import {
  startLoadingPost,
  finishLoadingPost,
} from '../../../actions/post/post';

const EditProfile: FC<EditProfileProps> = () => {
  const dispatch = useDispatch();
  const { loadingPost } = useSelector((state: RootStore) => state.post);
  const { avatar, banner, bio, userName } = useSelector(
    (state: RootStore) => state.auth
  );

  const { formValues, handleInputChange } = useFormCustom({
    body: bio,
  });
  const { body } = formValues;

  const { handleFileChange, imagePreview, imageToUpload } = useFile({});
  const { banner: bannerPreview, avatar: avatarPreview } = imagePreview;
  const { banner: bannerToUpload, avatar: avatarToUpload } = imageToUpload;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(startLoadingPost());

    if (bannerToUpload) {
      await fileUpload(bannerToUpload);
    }

    if (avatarToUpload) {
      await fileUpload(avatarToUpload);
    }

    const newUpdates = {
      banner: bannerPreview || banner,
      avatar: avatarPreview || avatar,
      bio: body || bio,
    };

    dispatch(updateProfile(newUpdates));
    dispatch(finishLoadingPost());
  };

  return (
    <EditProfileContainer>
      {loadingPost && <Loader type='post' text='Updating...' />}

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
                <Avatar url={avatarPreview || avatar} size={190} />
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
                <BannerStyled src={bannerPreview || banner} alt='Banner' />
              </RowStyled>
              <RowStyled>
                <TitleContainerStyled>
                  <Title size='medium'>Bio</Title>
                </TitleContainerStyled>
                <Textarea
                  placeholder='Edit bio...'
                  name='body'
                  value={body}
                  onChange={handleInputChange}
                />
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
