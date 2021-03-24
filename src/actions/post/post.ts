import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';
import { db } from '../../firebase/firebaseConfig';
import {
  FormPostProps,
  PostProps,
  PictureProps,
} from '../../reducers/postReducer/interface';

export const startNewPost = (newPost: FormPostProps) => {
  return async (dispatch: any, getState: any) => {
    const { userName } = getState().auth;

    const doc = await db.collection(`posts/${userName}/post`).add(newPost);
  };
};

export const setPosts = (posts: PostProps[]) => ({
  type: types.getPosts,
  payload: posts,
});

export const setPictures = (pictures: PictureProps[]) => ({
  type: types.getPictures,
  payload: pictures,
});

export const startUploading = (file: string) => {
  return async (dispatch: any, getState: any) => {
    const fileUrl = await fileUpload(file);
  };
};

export const startLoadingPost = () => ({
  type: types.startLoadingPost,
});

export const finishLoadingPost = () => ({
  type: types.finishLoadingPost,
});
